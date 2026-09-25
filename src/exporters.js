import * as XLSX from 'xlsx'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

const BRAND = 'Red Sun Transport & Movers Packers'
let _fontB64 = null
let _fontPromise = null

function loadArabicFont() {
  if (_fontB64) return Promise.resolve()
  if (_fontPromise) return _fontPromise
  _fontPromise = (async () => {
    const res = await fetch('/fonts/NotoSansArabic-Regular.ttf')
    const buf = await res.arrayBuffer()
    _fontB64 = btoa(String.fromCharCode(...new Uint8Array(buf)))
  })()
  return _fontPromise
}

function ensureFont(doc) {
  if (!_fontB64) return 'helvetica'
  doc.addFileToVFS('NotoSansArabic-Regular.ttf', _fontB64)
  doc.addFont('NotoSansArabic-Regular.ttf', 'NotoAr', 'normal')
  return 'NotoAr'
}

function download(filename, blob) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function ts() {
  return new Date().toISOString().slice(0, 10)
}

function shortValue(v) {
  if (v === null || v === undefined) return ''
  if (typeof v === 'object') {
    if (v && (v.en !== undefined || v.ar !== undefined)) return v.en || v.ar || ''
    return JSON.stringify(v)
  }
  return String(v)
}

export function exportJSON(all) {
  download(
    `redsun-export-${ts()}.json`,
    new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), brand: BRAND, ...all }, null, 2)], { type: 'application/json' }),
  )
}

export function exportCSV(kind, rows) {
  if (!rows || !rows.length) return
  const keys = Object.keys(rows[0]).filter((k) => !['vehicle', 'driver'].includes(k))
  const lines = rows.map((r) => keys.map((k) => `"${String(shortValue(r[k])).replace(/"/g, '""')}"`).join(','))
  download(`redsun-${kind}-${ts()}.csv`, new Blob(['\ufeff' + keys.join(',') + '\n' + lines.join('\n')], { type: 'text/csv;charset=utf-8' }))
}

export function exportExcel(all) {
  const wb = XLSX.utils.book_new()
  for (const [kind, rows] of Object.entries(all)) {
    if (!Array.isArray(rows) || !rows.length) continue
    const ws = XLSX.utils.json_to_sheet(rows.map((r) => {
      const o = {}
      for (const [k, v] of Object.entries(r)) {
        if (k === 'vehicle' || k === 'driver') continue
        o[k] = shortValue(v)
      }
      return o
    }))
    XLSX.utils.book_append_sheet(wb, ws, kind.slice(0, 31))
  }
  XLSX.writeFile(wb, `redsun-export-${ts()}.xlsx`)
}

export async function exportPDF(kind, rows, lang = 'en', label = kind) {
  if (!rows || !rows.length) return
  await loadArabicFont()
  const doc = new jsPDF({ orientation: 'landscape' })
  const ar = lang === 'ar'
  if (ar) ensureFont(doc)
  const font = ar ? 'NotoAr' : 'helvetica'
  doc.setFont(font, 'bold')
  doc.setFontSize(ar ? 12 : 16)
  const title = ar ? label : `${BRAND}\n${label} — ${ts()}`
  const lines = title.split('\n')
  lines.forEach((l, i) => doc.text(l, 14, 14 + i * 6))
  doc.setFont(font, 'normal')
  const keys = Object.keys(rows[0]).filter((k) => !['vehicle', 'driver'].includes(k))
  const head = keys.map((k) => k.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()))
  const body = rows.map((r) => keys.map((k) => shortValue(r[k]).slice(0, 40).length ? shortValue(r[k]).slice(0, 40) : ''))
  autoTable(doc, {
    head: [head],
    body,
    startY: ar ? 20 : 26,
    styles: { font, fontSize: ar ? 6 : 8, cellPadding: 1.5 },
    headStyles: { fillColor: [198, 26, 36], textColor: 255, fontStyle: 'bold' },
  })
  doc.save(`redsun-${kind}-${ts()}.pdf`)
}

export async function exportInvoicePDF(inv, lang = 'en') {
  if (!inv) return
  await loadArabicFont()
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const ar = lang === 'ar'
  const W = 210
  if (ar) ensureFont(doc)
  const font = ar ? 'NotoAr' : 'helvetica'
  doc.setFont(font, 'bold')
  doc.setFontSize(18)
  doc.setTextColor(26, 18, 11)
  doc.text('INVOICE', 14, 18)
  doc.setFontSize(9).setFont(font, 'normal').setTextColor(120)
  doc.text(BRAND, 14, 25)
  doc.text('Umm Al Hassam, Bahrain', 14, 30)
  doc.text('+973 3935 0288', 14, 35)
  doc.setFont(font, 'bold').setFontSize(11).setTextColor(26, 18, 11)
  doc.text(inv.number, W - 14, 18, { align: 'right' })
  const rightMeta = [
    `Issued${inv.issuedAt ? ': ' + new Date(inv.issuedAt).toLocaleDateString() : ''}`,
    `Due${inv.dueAt ? ': ' + new Date(inv.dueAt).toLocaleDateString() : ''}`,
    `Status: ${(inv.status || '').toUpperCase()}`,
  ]
  doc.setFont(font, 'normal').setFontSize(9).setTextColor(120)
  rightMeta.forEach((l, i) => doc.text(l, W - 14, 25 + i * 5, { align: 'right' }))
  // seller/company divider
  doc.setDrawColor(198, 26, 36).setLineWidth(0.8)
  doc.line(14, 40, W - 14, 40)
  // bill to
  doc.setFont(font, 'bold').setFontSize(10).setTextColor(26, 18, 11)
  doc.text('Bill to', 14, 48)
  doc.setFont(font, 'normal').setFontSize(10)
  doc.text(inv.customer?.name || '', 14, 54)
  if (inv.customer?.phone) doc.text(inv.customer.phone, 14, 60)
  if (inv.customer?.email) doc.text(inv.customer.email, 14, 66)
  const paid = inv.status === 'paid'
  if (paid) {
    doc.setFillColor(31, 122, 61)
    doc.roundedRect(W - 46, 46, 32, 12, 3, 3, 'F')
    doc.setTextColor(255).setFont(font, 'bold').setFontSize(9)
    doc.text('PAID', W - 30, 54, { align: 'center' })
    doc.setTextColor(26, 18, 11)
  }
  // items table
  const rows = (inv.items || []).map((l) => [l.desc || '', String(l.qty ?? ''), l.unit || '', `${(Number(l.amount) || 0).toFixed(2)}`])
  autoTable(doc, {
    head: [['Description', 'Qty', 'Unit', 'Amount (BHD)']],
    body: rows,
    startY: 74,
    styles: { font, fontSize: 9, cellPadding: 2 },
    headStyles: { fillColor: [198, 26, 36], textColor: 255, fontStyle: 'bold' },
    columnStyles: { 1: { halign: 'right' }, 2: { halign: 'right' }, 3: { halign: 'right' } },
  })
  const after = doc.lastAutoTable.finalY + 6
  doc.setFont(font, 'normal').setFontSize(10)
  const totals = [
    ['Subtotal', `${(Number(inv.subtotal) || 0).toFixed(2)}`],
    [`VAT (${inv.vatPct ?? 10}%)`, `${(Number(inv.vatBhd) || 0).toFixed(2)}`],
    ['Total', `${(Number(inv.total) || 0).toFixed(2)}`],
  ]
  doc.setFont(font, 'bold')
  totals.forEach((t, i) => {
    const y = after + i * 8
    doc.setDrawColor(220)
    doc.setTextColor(26, 18, 11)
    doc.text(t[0], W - 70, y)
    doc.text(t[1], W - 14, y, { align: 'right' })
    if (i === 2) { doc.setDrawColor(198, 26, 36).setLineWidth(0.8); doc.line(W - 70, y + 2, W - 14, y + 2) }
  })
  doc.setFont(font, 'normal').setFontSize(8).setTextColor(120)
  doc.text('Red Sun Transport & Movers Packers · Bahrain CR: 47351-01 · VAT: 300173301000003', 14, 285)
  doc.save(`${inv.number || 'invoice'}-${ts()}.pdf`)
}