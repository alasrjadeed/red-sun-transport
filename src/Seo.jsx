import { useEffect } from 'react'
import { FAQ, NEWS } from './i18n.js'
import { useSite } from './SiteContext.jsx'

const BASE = 'https://redsuntransport.bh'
const PHONE = '+973-3935-0288'
const NAP = {
  name: 'Red Sun Transport & Movers Packers',
  nameAr: 'رد صن نقليات ونقل عفش',
  street: 'Umm Al Hassam',
  city: 'Manama',
  region: 'Capital Governorate',
  country: 'BH',
  lat: 26.2075,
  lng: 50.5906,
}

const PAGE_URL = { home: '/', blog: '/?p=blog', faq: '/?p=faq', map: '/?p=map' }
const GBP_PLACEHOLDER = 'https://business.google.com/red-sun-transport'
const PAGE_META = {
  home: {
    en: {
      title: 'Movers and Packers Bahrain | Red Sun Transport Umm Al Hassam',
      desc: 'Best movers packers in Bahrain. 15+ years villa, office, piano and GCC cargo shifting from Umm Al Hassam. 24/7 house moving Manama, Juffair, Seef, Riffa. Call +973 3935 0288. Zero hidden charges.',
      keys: 'movers packers Bahrain, house shifting Bahrain, villa movers Manama, office movers Seef, piano movers Bahrain, GCC cargo Bahrain, luxury bus hire Bahrain, packers Umm Al Hassam, international relocation Bahrain, King Fahd Causeway cargo, movers Qatar Kuwait Oman UAE Saudi, 24/7 shifting Bahrain',
    },
    ar: {
      title: 'شركات نقل عفش البحرين | رد صن أم الحصم',
      desc: 'أفضل نقل عفش في البحرين. أكثر من 15 سنة نقل فلل ومكاتب وبيانو وشحن خليجي من أم الحصم. نقل 24 ساعة المنامة الجفير السيف الرفاع. 39350288 بدون رسوم مخفية.',
      keys: 'نقل عفش البحرين, شركات نقل البحرين, نقل فلل المنامة, نقل مكاتب السيف, نقل بيانو البحرين, شحن خليجي, تأجير باص البحرين, نقل أم الحصم, نقل دولي البحرين',
    },
  },
  blog: {
    en: { title: 'Moving News Bahrain | Packing Tips & GCC Cargo | Red Sun', desc: 'News and guides from Red Sun Transport: villa checklists, Causeway cargo, office moves, piano crating and luxury bus hire in Bahrain.', keys: 'moving tips Bahrain, GCC shipping news, packers guide Manama' },
    ar: { title: 'أخبار النقل في البحرين | رد صن', desc: 'نصائح نقل الفلل، شحن الجسر، نقل المكاتب وتأجير الباصات من رد صن.', keys: 'نصائح نقل البحرين, أخبار الشحن الخليجي' },
  },
  faq: {
    en: { title: 'FAQ Movers Packers Bahrain | Pricing, Piano, GCC | Red Sun', desc: 'Answers on 24/7 house shifting, hidden charges, piano moves, bus hire and GCC cargo from Red Sun Transport Bahrain.', keys: 'movers Bahrain FAQ, house shifting cost Bahrain, piano movers questions' },
    ar: { title: 'أسئلة نقل العفش البحرين | رد صن', desc: 'أسئلة عن النقل 24 ساعة، الرسوم، البيانو، الباصات والشحن الخليجي.', keys: 'أسئلة نقل عفش البحرين' },
  },
  map: {
    en: { title: 'Red Sun Location Umm Al Hassam | Google Map Movers Bahrain', desc: 'Interactive GCC map and Google Maps for Red Sun Transport HQ in Umm Al Hassam, Manama. Call, WhatsApp, email and directions.', keys: 'Red Sun Umm Al Hassam map, movers Manama location, Bahrain movers address' },
    ar: { title: 'موقع رد صن أم الحصم | خريطة قوقل', desc: 'خريطة الخليج وقوقل مابس لمقر رد صن في أم الحصم مع اتصال وواتساب واتجاهات.', keys: 'موقع رد صن أم الحصم, عنوان نقل عفش المنامة' },
  },
}

function schemaGraph(lang) {
  const isAr = lang === 'ar'
  const faqs = FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q[lang],
    acceptedAnswer: { '@type': 'Answer', text: f.a[lang] },
  }))
  const posts = NEWS.map((n) => ({
    '@type': 'BlogPosting',
    headline: n.title[lang],
    datePublished: n.date,
    description: n.excerpt[lang],
    inLanguage: isAr ? 'ar-BH' : 'en-BH',
    author: { '@type': 'Organization', name: NAP.name },
  }))
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MovingCompany', 'LocalBusiness', 'Organization'],
        '@id': `${BASE}/#business`,
        name: isAr ? NAP.nameAr : NAP.name,
        alternateName: ['Red Sun Transport', 'رد صن نقليات', 'Safe & Perfect Movers Bahrain'],
        url: BASE,
        telephone: PHONE,
        email: 'dispatch@redsuntransport.bh',
        image: `${BASE}/logo-lockup.png`,
        logo: `${BASE}/logo-mark.png`,
        priceRange: '$$',
        currenciesAccepted: 'BHD',
        openingHours: 'Mo-Su 00:00-23:59',
        areaServed: [
          { '@type': 'Country', name: 'Bahrain' },
          { '@type': 'Country', name: 'Saudi Arabia' },
          { '@type': 'Country', name: 'Qatar' },
          { '@type': 'Country', name: 'Kuwait' },
          { '@type': 'Country', name: 'Oman' },
          { '@type': 'Country', name: 'United Arab Emirates' },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: NAP.street,
          addressLocality: NAP.city,
          addressRegion: NAP.region,
          addressCountry: NAP.country,
        },
        geo: { '@type': 'GeoCoordinates', latitude: NAP.lat, longitude: NAP.lng },
        hasMap: 'https://www.google.com/maps/search/?api=1&query=Umm+Al+Hassam+Manama+Bahrain',
        sameAs: [
          'https://wa.me/97339350288',
          'https://www.google.com/maps/search/?api=1&query=Umm+Al+Hassam+Manama+Bahrain',
          'https://www.google.com/maps?cid=0',
          GBP_PLACEHOLDER,
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          bestRating: '5',
          ratingCount: '187',
          reviewCount: '187',
        },
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Hala A.' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Fast, careful crew — everything wrapped and on time. Best movers in Manama.',
            datePublished: '2025-01-12',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'James Whitfield' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Moved our piano from Seef to Amwaj without a scratch. Zero hidden charges.',
            datePublished: '2025-03-02',
          },
        ],
        knowsLanguage: ['en-BH', 'ar-BH'],
        slogan: isAr ? 'نقلة فاخرة، شغل مرتب' : 'Luxury moving with expert care and precision',
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE}/#website`,
        url: BASE,
        name: NAP.name,
        inLanguage: ['en-BH', 'ar-BH'],
        potentialAction: {
          '@type': 'SearchAction',
          target: `${BASE}/#blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      { '@type': 'FAQPage', mainEntity: faqs, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.faq-item p', '.faq-item button span'] } },
      {
        '@type': 'Person',
        '@id': 'https://alasarjadeed.com/#author',
        name: 'AL ASAR JADEED',
        url: 'https://alasarjadeed.com',
        email: 'mailto:info@alasarjadeed.com',
        sameAs: ['https://alasarjadeed.com'],
        knowsAbout: ['Bahrain moving', 'GCC relocation', 'Movers & packers'],
        authorOf: { '@id': `${BASE}/#business` },
      },
      { '@type': 'Blog', blogPost: posts },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: `${BASE}/#home` },
          { '@type': 'ListItem', position: 2, name: isAr ? 'الأخبار' : 'News', item: `${BASE}/#blog` },
          { '@type': 'ListItem', position: 3, name: isAr ? 'أسئلة' : 'FAQ', item: `${BASE}/#faq` },
          { '@type': 'ListItem', position: 4, name: isAr ? 'الخريطة' : 'Map', item: `${BASE}/#map` },
        ],
      },
    ],
  }
}

export default function Seo() {
  const { page, lang } = useSite()
  useEffect(() => {
    const key = ['blog', 'faq', 'map'].includes(page) ? page : 'home'
    const meta = PAGE_META[key][lang]
    document.title = meta.title
    const set = (name, content, prop) => {
      const attr = prop ? 'property' : 'name'
      let el = document.head.querySelector(`meta[${attr}="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }
    set('description', meta.desc)
    set('keywords', meta.keys)
    set('robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1')
    set('googlebot', 'index,follow')
    set('author', 'AL ASAR JADEED')
    set('geo.region', 'BH-13')
    set('geo.placename', 'Umm Al Hassam, Manama, Bahrain')
    set('geo.position', '26.2075;50.5906')
    set('ICBM', '26.2075, 50.5906')
    set('og:title', meta.title, true)
    set('og:description', meta.desc, true)
    set('og:type', 'website', true)
    set('og:locale', lang === 'ar' ? 'ar_BH' : 'en_BH', true)
    set('og:url', `${BASE}${PAGE_URL[key]}`, true)
    set('og:image', `${BASE}/logo-lockup.png`, true)
    set('twitter:card', 'summary_large_image')
    set('twitter:title', meta.title)
    set('twitter:description', meta.desc)
    document.documentElement.lang = lang === 'ar' ? 'ar-BH' : 'en-BH'

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = `${BASE}${PAGE_URL[key]}`

    const hrefs = [
      ['en-BH', `${BASE}${PAGE_URL[key]}`],
      ['ar-BH', `${BASE}${PAGE_URL[key]}`],
      ['x-default', `${BASE}${PAGE_URL[key]}`],
    ]
    document.querySelectorAll('link[data-hreflang]').forEach((n) => n.remove())
    hrefs.forEach(([code, href]) => {
      const l = document.createElement('link')
      l.rel = 'alternate'
      l.hreflang = code
      l.href = href
      l.dataset.hreflang = '1'
      document.head.appendChild(l)
    })

    let json = document.getElementById('rs-jsonld')
    if (!json) { json = document.createElement('script'); json.type = 'application/ld+json'; json.id = 'rs-jsonld'; document.head.appendChild(json) }
    json.textContent = JSON.stringify(schemaGraph(lang))
  }, [page, lang])
  return null
}
