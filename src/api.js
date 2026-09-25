const TOKEN_KEY = 'rs_token'
const headers = { 'Content-Type': 'application/json' }
import { DEMO } from './demoData.js'

function demoOf(path) {
  const clean = path.split('?')[0]
  return DEMO[clean] || null
}

function useDemo(d) {
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('rs:demo'))
  return d?.clone ? d.clone() : structuredClone(d)
}

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY) || ''
  } catch {
    return ''
  }
}

export function setToken(tok) {
  try {
    if (tok) localStorage.setItem(TOKEN_KEY, tok)
    else localStorage.removeItem(TOKEN_KEY)
  } catch {
    /* ignore */
  }
}

async function request(path, options = {}) {
  const h = { ...headers, ...(options.headers || {}) }
  const t = getToken()
  if (t) h.Authorization = `Bearer ${t}`
  const method = (options.method || 'GET').toUpperCase()
  let res
  try {
    res = await fetch(path, { ...options, headers: h })
  } catch (e) {
    if (method === 'GET') {
      const d = demoOf(path)
      if (d) return useDemo(d)
    }
    throw e
  }
  if (res.status === 401) {
    if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('rs:unauthorized'))
    const err = await res.json().catch(() => ({ error: res.statusText }))
    throw new Error(err.error || 'Request failed')
  }
  if (!res.ok) {
    if (method === 'GET') {
      const d = demoOf(path)
      if (d) return useDemo(d)
    }
    const err = await res.json().catch(() => ({ error: res.statusText }))
    throw new Error(err.error || 'Request failed')
  }
  return res.json()
}

export const api = {
  health: () => request('/api/health'),
  dashboard: () => request('/api/dashboard'),
  vehicles: () => request('/api/vehicles'),
  createVehicle: (body) => request('/api/vehicles', { method: 'POST', body: JSON.stringify(body) }),
  patchVehicle: (id, body) => request(`/api/vehicles/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  parkVehicle: (id) => request(`/api/vehicles/${id}/park`, { method: 'POST', body: JSON.stringify({}) }),
  trackInfo: (code) => request(`/api/track/${encodeURIComponent(code)}`),
  trackUpdate: (code, body) => request(`/api/track/${encodeURIComponent(code)}`, { method: 'POST', body: JSON.stringify(body) }),
  drivers: () => request('/api/drivers'),
  createDriver: (body) => request('/api/drivers', { method: 'POST', body: JSON.stringify(body) }),
  patchDriver: (id, body) => request(`/api/drivers/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  trips: () => request('/api/trips'),
  createTrip: (body) => request('/api/trips', { method: 'POST', body: JSON.stringify(body) }),
  patchTrip: (id, body) => request(`/api/trips/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  maintenance: () => request('/api/maintenance'),
  createMaintenance: (body) => request('/api/maintenance', { method: 'POST', body: JSON.stringify(body) }),
  patchMaintenance: (id, body) => request(`/api/maintenance/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  fuel: () => request('/api/fuel'),
  createFuel: (body) => request('/api/fuel', { method: 'POST', body: JSON.stringify(body) }),
  incidents: () => request('/api/incidents'),
  createIncident: (body) => request('/api/incidents', { method: 'POST', body: JSON.stringify(body) }),
  patchIncident: (id, body) => request(`/api/incidents/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  quotes: () => request('/api/quotes'),
  createQuote: (body) => request('/api/quotes', { method: 'POST', body: JSON.stringify(body) }),
  patchQuote: (id, body) => request(`/api/quotes/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  patchFuel: (id, body) => request(`/api/fuel/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  remove: (kind, id) => request(`/api/${kind}/${id}`, { method: 'DELETE' }),
  importData: (body) => request('/api/import', { method: 'POST', body: JSON.stringify(body) }),
  exportSnapshot: async () => {
    const res = await fetch('/api/export')
    return res.ok ? res.json() : null
  },
  company: () => request('/api/company'),
  setParking: (body) => request('/api/settings/parking', { method: 'PATCH', body: JSON.stringify(body) }),
  aiChat: (body) => request('/api/ai/chat', { method: 'POST', body: JSON.stringify(body) }),
  aiInsight: (body) => request('/api/ai/insight', { method: 'POST', body: JSON.stringify(body) }),
  aiQuote: (body) => request('/api/ai/quote', { method: 'POST', body: JSON.stringify(body) }),
  gpsHistory: (vehicleId, limit = 100) => request(`/api/gps/history/${vehicleId}?limit=${limit}`),
  geofences: () => request('/api/gps/geofences'),
  geoScore: (body) => request('/api/geo/score', { method: 'POST', body: JSON.stringify(body) }),
  createGeofence: (body) => request('/api/gps/geofences', { method: 'POST', body: JSON.stringify(body) }),
  deleteGeofence: (id) => request(`/api/gps/geofences/${id}`, { method: 'DELETE' }),
  authStatus: () => request('/api/auth/status'),
  login: async (password) => {
    const res = await fetch('/api/auth/login', { method: 'POST', headers, body: JSON.stringify({ password }) })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(data.error || 'Login failed')
    if (data.token) setToken(data.token)
    return data
  },
  logout: () => {
    setToken('')
    return fetch('/api/auth/logout', { method: 'POST' }).catch(() => null)
  },
  getConfig: () => request('/api/config'),
  saveConfig: (body) => request('/api/config/ai', { method: 'POST', body: JSON.stringify(body) }),
  savePassword: (body) => request('/api/config/password', { method: 'POST', body: JSON.stringify(body) }),
  moving: () => request('/api/moving'),
  move: (id) => request(`/api/moving/${id}`),
  createMove: (body) => request('/api/moving', { method: 'POST', body: JSON.stringify(body) }),
  patchMove: (id, body) => request(`/api/moving/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  advanceMove: (id) => request(`/api/moving/${id}/advance`, { method: 'POST', body: JSON.stringify({}) }),
  estimateMove: (id) => request(`/api/moving/${id}/estimate`, { method: 'POST', body: JSON.stringify({}) }),
  staticEstimate: (body) => request('/api/moving/estimate', { method: 'POST', body: JSON.stringify(body) }),
  dispatchMove: (id) => request(`/api/moving/${id}/dispatch`, { method: 'POST', body: JSON.stringify({}) }),
  convertQuote: (id) => request(`/api/quotes/${id}/convert`, { method: 'POST', body: JSON.stringify({}) }),
  invoices: () => request('/api/invoices'),
  invoice: (id) => request(`/api/invoices/${id}`),
  createInvoice: (body) => request('/api/invoices', { method: 'POST', body: JSON.stringify(body) }),
  patchInvoice: (id, body) => request(`/api/invoices/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  invoiceFromTrip: (id) => request(`/api/trips/${id}/invoice`, { method: 'POST', body: JSON.stringify({}) }),
  invoiceFromMove: (id) => request(`/api/moving/${id}/invoice`, { method: 'POST', body: JSON.stringify({}) }),
  invoiceFromQuote: (id) => request(`/api/quotes/${id}/invoice`, { method: 'POST', body: JSON.stringify({}) }),
  documents: () => request('/api/documents'),
  createDocument: (body) => request('/api/documents', { method: 'POST', body: JSON.stringify(body) }),
  parseDocText: (text) => request('/api/documents/parse-text', { method: 'POST', body: JSON.stringify({ text }) }),
  reExtractDoc: (id) => request(`/api/documents/${id}/re-extract`, { method: 'POST', body: JSON.stringify({}) }),
  patchDocument: (id, body) => request(`/api/documents/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  notifyDoc: (id, body) => request(`/api/documents/${id}/notify`, { method: 'POST', body: JSON.stringify(body) }),
  seedDocuments: () => request('/api/documents/feature/seed', { method: 'POST', body: JSON.stringify({}) }),
  alertsSeed: () => request('/api/features/alerts-seed', { method: 'POST', body: JSON.stringify({}) }),
  documentFile: (id) => `/api/documents/${id}/file`,
  expenses: () => request('/api/expenses'),
  createExpense: (body) => request('/api/expenses', { method: 'POST', body: JSON.stringify(body) }),
  patchExpense: (id, body) => request(`/api/expenses/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  deleteExpense: (id) => request(`/api/expenses/${id}`, { method: 'DELETE' }),
  profitability: (period) => request(`/api/profitability?period=${period}`),
  financeSeed: () => request('/api/features/finance-seed', { method: 'POST', body: JSON.stringify({}) }),
  addExpenseCat: (name) => request('/api/expense-categories', { method: 'POST', body: JSON.stringify({ name }) }),
  renameExpenseCat: (oldName, name) => request(`/api/expense-categories/${encodeURIComponent(oldName)}`, { method: 'PATCH', body: JSON.stringify({ name }) }),
  deleteExpenseCat: (name) => request(`/api/expense-categories/${encodeURIComponent(name)}`, { method: 'DELETE' }),
  driverMediaFile: (id, mid) => `/api/drivers/${id}/media/${mid}`,
  vehicleMediaFile: (id, mid) => `/api/vehicles/${id}/media/${mid}`,
  uplDriverMedia: (id, body) => request(`/api/drivers/${id}/media`, { method: 'POST', body: JSON.stringify(body) }),
  delDriverMedia: (id, mid) => request(`/api/drivers/${id}/media/${mid}`, { method: 'DELETE' }),
  uplVehicleMedia: (id, body) => request(`/api/vehicles/${id}/media`, { method: 'POST', body: JSON.stringify(body) }),
  delVehicleMedia: (id, mid) => request(`/api/vehicles/${id}/media/${mid}`, { method: 'DELETE' }),
  patchSettings: (section, values) => request('/api/config/settings', { method: 'PATCH', body: JSON.stringify({ section, values }) }),
  blogLive: () => request('/api/blog'),
  blogPublishedSlugs: () => request('/api/blog/public-slugs'),
  saveFeatures: (features) => request('/api/config/features', { method: 'POST', body: JSON.stringify(features) }),
  testSmtp: (cfg) => request('/api/config/smtp/test', { method: 'POST', body: JSON.stringify(cfg) }),
  sendTestEmail: (body) => request('/api/config/email', { method: 'POST', body: JSON.stringify(body) }),
  sendTestWhatsapp: (body) => request('/api/config/whatsapp/send', { method: 'POST', body: JSON.stringify(body) }),
  sendTestSms: (body) => request('/api/config/sms/send', { method: 'POST', body: JSON.stringify(body) }),
}
