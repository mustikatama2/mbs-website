import { connect } from 'framer-api'

const PROJECT_URL = 'https://framer.com/projects/Jazzed-Octopus--zqe46haBTxwva0uF4z6t'
const API_KEY     = 'd9f032bb-869c-41f8-a1be-738674fe6f83'

// ─── Real MBS data ────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    name: 'Plywood',
    slug: 'plywood',
    description: 'Multi-layer cross-laminated veneer panels from Albizia Falcata. Superior strength for furniture, construction, fixtures and industrial use.',
    species: 'Albizia Falcata (Sengon)',
    thickness: '3mm – 25mm',
    standardSize: '1220 × 2440mm',
    grades: 'BB/CC, B/BB & custom',
    certifications: 'CARB Phase II, JAS',
    image: 'https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/DSC_9277-3008x2000-1152w.JPG',
    tag: 'High Strength',
  },
  {
    name: 'Blockboard',
    slug: 'blockboard',
    description: 'Solid Sengon core strips between veneers. Rigid, lightweight, excellent flatness and screw-holding for furniture, doors and interiors.',
    species: 'Albizia Falcata (Sengon)',
    thickness: '12mm – 30mm',
    standardSize: '1220 × 2440mm',
    grades: 'Standard & custom',
    certifications: 'CARB Phase II, JAS',
    image: 'https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/BC%20L%20%284%29-3008x2000-1920w.JPG',
    tag: 'Lightweight',
  },
  {
    name: 'Barecore',
    slug: 'barecore',
    description: 'Unfinished core panels for customers applying their own veneers or overlays. Consistent density and precision thickness for downstream processing.',
    species: 'Albizia Falcata',
    thickness: '9mm – 18mm',
    standardSize: '1220 × 2440mm',
    grades: 'Export grade',
    certifications: 'CARB Phase II',
    image: 'https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/Prep%20L%20%286%29-3008x2000-1920w.JPG',
    tag: 'Export Grade',
  },
]

const CERTIFICATIONS = [
  {
    name: 'CARB Phase II',
    slug: 'carb-phase-ii',
    issuer: 'California Air Resources Board',
    certNumber: 'TPC6/CARB-ATCM/M019-HWPW014',
    year: '2009',
    description: 'One of the strictest global standards for formaldehyde emissions. Required for selling composite wood in California and regulated US markets.',
    badge: '🏆',
    market: 'USA & Global',
  },
  {
    name: 'JAS Certified',
    slug: 'jas',
    issuer: 'Japan Agricultural Standards',
    certNumber: 'JAS',
    year: '2004',
    description: 'Japan Agricultural Standards certification — prerequisite for entering Japan\'s premium timber market. Assures dimensional accuracy, bond strength and formaldehyde compliance.',
    badge: '🌸',
    market: 'Japan',
  },
  {
    name: 'V-Legal (SVLK)',
    slug: 'v-legal',
    issuer: 'Indonesian Ministry of Forestry',
    certNumber: 'SVLK',
    year: '2016',
    description: 'Sistem Verifikasi Legalitas Kayu — confirms our timber comes from legal, sustainably managed plantation sources. Required for export to many key markets.',
    badge: '🌿',
    market: 'EU & Global',
  },
]

const MARKETS = [
  { name: 'Japan',    slug: 'japan',    flag: '🇯🇵', detail: 'JAS certified',     primary: true },
  { name: 'USA',      slug: 'usa',      flag: '🇺🇸', detail: 'CARB II compliant', primary: true },
  { name: 'Europe',   slug: 'europe',   flag: '🇩🇪', detail: 'DE, NL & more',     primary: true },
  { name: 'China & Asia', slug: 'asia', flag: '🇨🇳', detail: 'Primary market',    primary: true },
  { name: 'Oceania',  slug: 'oceania',  flag: '🇦🇺', detail: 'AUS & NZ',          primary: false },
  { name: 'Africa',   slug: 'africa',   flag: '🌍', detail: 'Growing market',     primary: false },
]

const WHY_ITEMS = [
  { icon: '🏆', title: 'Dual International Certifications', body: 'CARB Phase II (USA) and JAS (Japan) — ship to any market with documented compliance.', stat: 'CARB + JAS', statLabel: 'Dual-certified since 2009' },
  { icon: '⚡', title: 'Large Production Capacity',         body: '700+ skilled workers in East Java. Handle high-volume orders for manufacturers, wholesalers and retailers.', stat: '700+', statLabel: 'Skilled production workers' },
  { icon: '🌿', title: 'Sustainable Albizia Falcata',       body: '100% plantation-grown Sengon — no deforestation. Supports your ESG and green procurement goals.', stat: 'Eco ✓', statLabel: 'Plantation wood, not rainforest' },
  { icon: '🏭', title: 'Group Strength Since 1987',         body: 'MBS is part of the Mustikatama Group — a diversified industrial group with 35+ years of manufacturing history.', stat: '35+ yrs', statLabel: 'Group operational experience' },
  { icon: '🎓', title: 'Japan-Trained Professionals',       body: 'Key personnel underwent OJT in Japan — bringing international manufacturing standards to our East Java plant.', stat: 'OJT Japan', statLabel: 'Internationally trained team' },
  { icon: '🤝', title: 'Custom Orders Welcome',             body: 'Manufacturer, wholesaler, retailer, or contractor — we produce custom dimensions, grades and specs to your exact needs.', stat: 'Custom', statLabel: 'Dimensions, grades & specs' },
]

const TIMELINE = [
  { year: '1987', title: 'Mustikatama Group Founded', description: 'Group origins in East Java with salt iodization and rice milling operations.', type: 'group' },
  { year: '1993', title: 'PT Mustika Bahana Jaya (MBJ)', description: 'Timber operations begin. MBJ established, specializing in rubberwood and Merkusii pine.', type: 'group' },
  { year: '1998', title: 'Expansion to North Sumatra', description: 'PT Sumber Karindo Sakti established in Medan — Finger Joint Laminated Board production nationwide.', type: 'group' },
  { year: '2004', title: 'JAS Certification Achieved', description: 'Group earns Japan Agricultural Standards certification, opening Japan\'s premium timber market.', type: 'cert' },
  { year: '2006', title: 'PT Mustika Buana Sejahtera Founded', description: 'MBS established — dedicated Albizia Falcata (Sengon) plywood and blockboard manufacturer.', type: 'mbs' },
  { year: '2009', title: 'CARB Phase II Certified', description: 'MBS earns California Air Resources Board certification — unlocking the US market. Cert No. TPC6/CARB-ATCM/M019-HWPW014.', type: 'cert' },
  { year: 'Today', title: '700+ Workers, 5 Continents', description: 'MBS exports to buyers across Europe, Asia, Americas, Africa and Oceania with 700+ workers and two international certifications.', type: 'today' },
]

// ─── Custom CSS & HTML for the site ──────────────────────────────────────────
const SITE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap');

:root {
  --ink: #0f1e1f;
  --ink-mid: #1e3637;
  --teal: #68ccd1;
  --teal-light: #a8e6e9;
  --teal-dark: #3a9ea4;
  --gold: #e8c84a;
  --coral: #ef4e3e;
  --warm-bg: #f4f0eb;
  --white: #ffffff;
  --gray: #6b7280;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; color: var(--ink); overflow-x: hidden; }
.h-display { font-family: 'DM Serif Display', serif; }
`

// ─── Main build ───────────────────────────────────────────────────────────────
async function build() {
  console.log('🔌 Connecting to Framer project...')

  const framer = await connect(PROJECT_URL, API_KEY)

  console.log('✅ Connected!')

  try {
    // 1. Get project info
    const project = await framer.getProjectInfo()
    console.log(`📋 Project: ${project.name} (${project.id})`)

    // 2. Set site-wide custom code (fonts + CSS variables)
    console.log('🎨 Setting global CSS...')
    await framer.setCustomCode({
      headStart: `
<meta name="description" content="PT Mustika Buana Sejahtera — CARB Phase II & JAS certified plywood, blockboard and barecore from sustainable Albizia Falcata. Export to 5 continents."/>
<meta property="og:title" content="PT Mustika Buana Sejahtera — Industrial Timber Panel Supplier"/>
<meta property="og:description" content="Export-grade timber panels. CARB Phase II & JAS certified. 700+ workers. Ships to 5 continents from East Java, Indonesia."/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet"/>
<style>${SITE_CSS}</style>
      `,
      headEnd: '',
      bodyStart: '',
      bodyEnd: `<script>
// Reveal animation on scroll
const ro = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); ro.unobserve(e.target); } });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
// Form success
if(window.location.search.includes('sent=true')) {
  const s = document.getElementById('form-success');
  if(s) { s.style.display = 'block'; document.getElementById('rfq')?.scrollIntoView({behavior:'smooth'}); }
}
</script>`,
    })
    console.log('✅ Global CSS set')

    // 3. Create CMS Collections
    console.log('\n📦 Creating CMS collections...')

    // Products Collection
    console.log('  → Creating Products collection...')
    const productsCollection = await framer.createCollection({ name: 'Products' })
    await productsCollection.addFields([
      { type: 'string',        name: 'Name',          required: true },
      { type: 'formattedText', name: 'Description',   required: true },
      { type: 'string',        name: 'Species',        required: false },
      { type: 'string',        name: 'Thickness',      required: false },
      { type: 'string',        name: 'Standard Size',  required: false },
      { type: 'string',        name: 'Grades',         required: false },
      { type: 'string',        name: 'Certifications', required: false },
      { type: 'string',        name: 'Tag',            required: false },
      { type: 'link',          name: 'Image URL',      required: false },
    ])
    const productFields = await productsCollection.getFields()
    const pfMap = Object.fromEntries(productFields.map(f => [f.name, f.id]))
    await productsCollection.addItems(PRODUCTS.map(p => ({
      id: p.slug,
      slug: p.slug,
      draft: false,
      fieldData: {
        [pfMap['Name']]:          p.name,
        [pfMap['Description']]:   p.description,
        [pfMap['Species']]:       p.species,
        [pfMap['Thickness']]:     p.thickness,
        [pfMap['Standard Size']]: p.standardSize,
        [pfMap['Grades']]:        p.grades,
        [pfMap['Certifications']]: p.certifications,
        [pfMap['Tag']]:           p.tag,
        [pfMap['Image URL']]:     p.image,
      }
    })))
    console.log(`  ✅ Products: ${PRODUCTS.length} items`)

    // Certifications Collection
    console.log('  → Creating Certifications collection...')
    const certCollection = await framer.createCollection({ name: 'Certifications' })
    await certCollection.addFields([
      { type: 'string',        name: 'Name',        required: true },
      { type: 'string',        name: 'Issuer',      required: false },
      { type: 'string',        name: 'Cert Number', required: false },
      { type: 'string',        name: 'Year',        required: false },
      { type: 'formattedText', name: 'Description', required: false },
      { type: 'string',        name: 'Badge',       required: false },
      { type: 'string',        name: 'Market',      required: false },
    ])
    const certFields = await certCollection.getFields()
    const cfMap = Object.fromEntries(certFields.map(f => [f.name, f.id]))
    await certCollection.addItems(CERTIFICATIONS.map(c => ({
      id: c.slug, slug: c.slug, draft: false,
      fieldData: {
        [cfMap['Name']]:        c.name,
        [cfMap['Issuer']]:      c.issuer,
        [cfMap['Cert Number']]: c.certNumber,
        [cfMap['Year']]:        c.year,
        [cfMap['Description']]: c.description,
        [cfMap['Badge']]:       c.badge,
        [cfMap['Market']]:      c.market,
      }
    })))
    console.log(`  ✅ Certifications: ${CERTIFICATIONS.length} items`)

    // Markets Collection
    console.log('  → Creating Markets collection...')
    const marketsCollection = await framer.createCollection({ name: 'Export Markets' })
    await marketsCollection.addFields([
      { type: 'string',  name: 'Name',    required: true },
      { type: 'string',  name: 'Flag',    required: false },
      { type: 'string',  name: 'Detail',  required: false },
      { type: 'boolean', name: 'Primary', required: false },
    ])
    const mktFields = await marketsCollection.getFields()
    const mfMap = Object.fromEntries(mktFields.map(f => [f.name, f.id]))
    await marketsCollection.addItems(MARKETS.map(m => ({
      id: m.slug, slug: m.slug, draft: false,
      fieldData: {
        [mfMap['Name']]:    m.name,
        [mfMap['Flag']]:    m.flag,
        [mfMap['Detail']]:  m.detail,
        [mfMap['Primary']]: m.primary,
      }
    })))
    console.log(`  ✅ Markets: ${MARKETS.length} items`)

    // Why MBS Collection
    console.log('  → Creating Why MBS collection...')
    const whyCollection = await framer.createCollection({ name: 'Why MBS' })
    await whyCollection.addFields([
      { type: 'string',        name: 'Icon',       required: false },
      { type: 'string',        name: 'Title',      required: true },
      { type: 'formattedText', name: 'Body',       required: false },
      { type: 'string',        name: 'Stat',       required: false },
      { type: 'string',        name: 'Stat Label', required: false },
    ])
    const whyFields = await whyCollection.getFields()
    const wfMap = Object.fromEntries(whyFields.map(f => [f.name, f.id]))
    await whyCollection.addItems(WHY_ITEMS.map((w, i) => ({
      id: `why-${i}`, slug: `why-${i}`, draft: false,
      fieldData: {
        [wfMap['Icon']]:       w.icon,
        [wfMap['Title']]:      w.title,
        [wfMap['Body']]:       w.body,
        [wfMap['Stat']]:       w.stat,
        [wfMap['Stat Label']]: w.statLabel,
      }
    })))
    console.log(`  ✅ Why MBS: ${WHY_ITEMS.length} items`)

    // Timeline Collection
    console.log('  → Creating Timeline collection...')
    const timelineCollection = await framer.createCollection({ name: 'Timeline' })
    await timelineCollection.addFields([
      { type: 'string',        name: 'Year',        required: true },
      { type: 'string',        name: 'Title',       required: true },
      { type: 'formattedText', name: 'Description', required: false },
      { type: 'string',        name: 'Type',        required: false },
    ])
    const tlFields = await timelineCollection.getFields()
    const tfMap = Object.fromEntries(tlFields.map(f => [f.name, f.id]))
    await timelineCollection.addItems(TIMELINE.map((t, i) => ({
      id: `tl-${i}`, slug: `tl-${i}`, draft: false,
      fieldData: {
        [tfMap['Year']]:        t.year,
        [tfMap['Title']]:       t.title,
        [tfMap['Description']]: t.description,
        [tfMap['Type']]:        t.type,
      }
    })))
    console.log(`  ✅ Timeline: ${TIMELINE.length} items`)

    // 4. Get existing pages
    console.log('\n📄 Setting up pages...')
    const pages = await framer.getCollections()
    const root = await framer.getCanvasRoot()
    console.log(`  Canvas root: ${root.id}`)

    // 5. Inject full site HTML into the home page via custom code
    console.log('\n💉 Injecting site HTML...')
    const webPages = await framer.getNodesWithType('WebPageNode')
    console.log(`  Found ${webPages.length} web page(s)`)

    if (webPages.length > 0) {
      const homePage = webPages[0]
      console.log(`  Targeting page: ${homePage.id}`)

      // Inject the complete MBS website HTML as a code override
      const siteHTML = buildSiteHTML()
      await framer.setCustomCode({
        headStart: `
<meta name="description" content="PT Mustika Buana Sejahtera — CARB Phase II & JAS certified plywood, blockboard and barecore manufacturer from East Java, Indonesia."/>
<meta property="og:title" content="PT Mustika Buana Sejahtera — Industrial Timber Panel Supplier"/>
<meta property="og:description" content="Export-grade timber panels. CARB Phase II & JAS certified. 700+ workers. Ships worldwide."/>
<meta property="og:image" content="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/Logyard%20%282%29-3008x2000-1152w.JPG"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet"/>
        `,
        headEnd: '',
        bodyStart: siteHTML,
        bodyEnd: `<script>
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target);}});
},{threshold:0.07});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
document.querySelectorAll('.hero .reveal').forEach((el,i)=>{setTimeout(()=>el.classList.add('in'),120+i*90);});
if(window.location.search.includes('sent=true')){
  const s=document.getElementById('form-success');
  if(s){s.style.display='block';document.getElementById('rfq')?.scrollIntoView({behavior:'smooth'});}
}
const form=document.getElementById('rfq-form');
if(form){form.addEventListener('submit',()=>{const b=form.querySelector('.rfq-submit');b.innerHTML='Sending… ⏳';b.disabled=true;});}
</script>`,
      })
      console.log('  ✅ Site HTML injected')
    }

    // 6. Publish
    console.log('\n🚀 Publishing site...')
    const preview = await framer.publish()
    console.log(`  ✅ Published! Preview: ${preview?.url || 'check Framer dashboard'}`)

    console.log('\n✨ BUILD COMPLETE!\n')
    console.log('Collections created:')
    console.log('  📦 Products (3 items)')
    console.log('  🏆 Certifications (3 items)')
    console.log('  🌍 Export Markets (6 items)')
    console.log('  💡 Why MBS (6 items)')
    console.log('  📅 Timeline (7 items)')
    console.log('\nNext steps:')
    console.log('  1. Open Framer and link CMS collections to visual components')
    console.log('  2. Publish to custom domain: mbs.mustikatama.com')

  } finally {
    await framer.disconnect()
    console.log('🔌 Disconnected')
  }
}

function buildSiteHTML() {
  return `
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ink:#0f1e1f;--ink-mid:#1e3637;--teal:#68ccd1;--teal-light:#a8e6e9;--teal-dark:#3a9ea4;--gold:#e8c84a;--coral:#ef4e3e;--warm-bg:#f4f0eb;--warm-mid:#e8e2d9;--white:#ffffff;--gray:#6b7280;--border:rgba(15,30,31,0.10)}
html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;color:var(--ink);background:var(--white);overflow-x:hidden}
.container{max-width:1160px;margin:0 auto;padding:0 5%}
.tag{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--teal-dark)}
.tag::before{content:'';width:20px;height:2px;background:var(--teal);border-radius:4px}
.h-display{font-family:'DM Serif Display',serif;line-height:1.1}
.reveal{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease}
.reveal.in{opacity:1;transform:translateY(0)}
.d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:900;height:68px;display:flex;align-items:center;justify-content:space-between;padding:0 5%;background:rgba(15,30,31,0.97);backdrop-filter:blur(16px);border-bottom:1px solid rgba(104,204,209,0.12)}
.nav-brand{display:flex;align-items:center;gap:12px;text-decoration:none}
.nav-brand-mark{width:36px;height:36px;background:var(--teal);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:900;color:var(--ink);font-size:13px}
.nav-brand-text{color:white;font-weight:700;font-size:14px;line-height:1.3}
.nav-brand-text span{display:block;font-weight:400;font-size:11px;color:rgba(255,255,255,.4)}
.nav-links{display:flex;gap:28px;list-style:none}
.nav-links a{color:rgba(255,255,255,.6);font-size:13.5px;font-weight:500;text-decoration:none;transition:color .2s}
.nav-links a:hover{color:white}
.nav-cta{background:var(--teal);color:var(--ink);padding:9px 22px;border-radius:8px;font-size:13.5px;font-weight:700;text-decoration:none;transition:.2s}
.nav-cta:hover{background:var(--teal-light);transform:translateY(-1px)}

/* HERO */
.hero{min-height:100svh;background:var(--ink);display:flex;flex-direction:column;position:relative;overflow:hidden;padding-top:68px}
.hero-bg-img{position:absolute;inset:0;background-image:url('https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/Logyard%20%282%29-3008x2000-1152w.JPG');background-size:cover;background-position:center}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(15,30,31,0.93) 0%,rgba(15,30,31,0.82) 50%,rgba(15,30,31,0.9) 100%)}
.hero-lines{position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(104,204,209,.03) 79px,rgba(104,204,209,.03) 80px)}
.hero-main{flex:1;display:flex;align-items:center;padding:60px 5% 40px;position:relative;z-index:1}
.hero-inner{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1160px;margin:0 auto;width:100%}
.hero-eyebrow{display:inline-flex;align-items:center;gap:10px;margin-bottom:24px;background:rgba(104,204,209,.08);border:1px solid rgba(104,204,209,.2);border-radius:999px;padding:6px 14px 6px 8px}
.hero-eyebrow-dot{width:24px;height:24px;background:var(--teal);border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--ink);font-weight:800}
.hero-eyebrow span{font-size:11.5px;font-weight:600;color:var(--teal)}
.hero h1{font-size:clamp(2.6rem,4.5vw,4rem);color:white;line-height:1.1;margin-bottom:24px}
.hero h1 em{color:var(--teal);font-style:normal}
.hero-sub{font-size:1.05rem;color:rgba(255,255,255,.55);line-height:1.8;max-width:460px;margin-bottom:40px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap}
.btn-teal{background:var(--teal);color:var(--ink);padding:14px 28px;border-radius:10px;font-size:14.5px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:.25s}
.btn-teal:hover{background:var(--teal-light);transform:translateY(-2px);box-shadow:0 8px 24px rgba(104,204,209,.3)}
.btn-ghost{background:transparent;color:rgba(255,255,255,.8);padding:14px 28px;border-radius:10px;font-size:14.5px;font-weight:600;text-decoration:none;border:1.5px solid rgba(255,255,255,.2);transition:.25s}
.btn-ghost:hover{border-color:rgba(255,255,255,.5);color:white}
.hero-trust{display:flex;gap:24px;margin-top:48px;flex-wrap:wrap}
.hero-trust-item{display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,.5)}
.hero-trust-item strong{color:rgba(255,255,255,.85)}

/* HERO PANEL */
.hero-panel{background:rgba(255,255,255,.04);border:1px solid rgba(104,204,209,.12);border-radius:24px;padding:32px;backdrop-filter:blur(8px)}
.hero-panel-title{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}
.spec-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:22px}
.spec-box{background:rgba(255,255,255,.05);border-radius:12px;padding:16px;border:1px solid rgba(255,255,255,.06)}
.spec-val{font-size:1.6rem;font-weight:800;color:white;line-height:1}
.spec-val.t{color:var(--teal)}.spec-val.g{color:var(--gold)}
.spec-lbl{font-size:11.5px;color:rgba(255,255,255,.4);margin-top:5px;line-height:1.4}
.cert-pills{display:flex;flex-direction:column;gap:10px;margin-bottom:20px}
.cert-pill-row{display:flex;align-items:center;gap:12px;background:rgba(104,204,209,.08);border:1px solid rgba(104,204,209,.2);border-radius:12px;padding:12px 16px}
.cert-pill-icon{width:36px;height:36px;background:var(--teal);border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:18px}
.cert-pill-icon.gold{background:var(--gold)}
.cert-pill-row strong{display:block;font-size:13px;font-weight:700;color:white}
.cert-pill-row span{font-size:11px;color:rgba(255,255,255,.45);line-height:1.4}
.prod-pills{display:flex;gap:8px;flex-wrap:wrap}
.prod-pill{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.7);padding:6px 14px;border-radius:999px;font-size:12px;font-weight:500}

/* HERO BAR */
.hero-bar{border-top:1px solid rgba(104,204,209,.1);background:rgba(0,0,0,.2);position:relative;z-index:1}
.hero-bar-inner{max-width:1160px;margin:0 auto;padding:0 5%;display:flex}
.hero-bar-stat{flex:1;padding:20px 24px;text-align:center;border-right:1px solid rgba(104,204,209,.07)}
.hero-bar-stat:last-child{border-right:none}
.hero-bar-num{font-size:1.7rem;font-weight:900;color:var(--teal);letter-spacing:-1px}
.hero-bar-lbl{font-size:11px;color:rgba(255,255,255,.33);text-transform:uppercase;letter-spacing:1px;margin-top:2px}

/* MARKETS */
.markets{background:var(--warm-bg);padding:44px 5%;border-bottom:1px solid var(--warm-mid)}
.markets-inner{max-width:1160px;margin:0 auto}
.markets-label{font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gray);margin-bottom:24px;text-align:center}
.markets-row{display:flex;gap:0;justify-content:center;flex-wrap:wrap}
.market-item{display:flex;align-items:center;gap:10px;padding:10px 28px;border-right:1px solid var(--warm-mid)}
.market-item:last-child{border-right:none}
.market-item .flag{font-size:22px}
.market-item .name{font-size:13.5px;font-weight:600;color:#444}
.market-item .detail{font-size:11px;color:var(--gray)}

/* WHY */
.why{padding:100px 5%;background:white}
.why-header{max-width:560px;margin-bottom:60px}
.why h2{font-size:clamp(2rem,3.5vw,2.8rem);margin:16px 0 18px}
.why-sub{font-size:1.05rem;color:var(--gray);line-height:1.8}
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.why-card{border:1.5px solid var(--border);border-radius:20px;padding:32px;transition:.3s}
.why-card:hover{border-color:var(--teal);transform:translateY(-4px);box-shadow:0 16px 48px rgba(104,204,209,.1)}
.why-icon{width:52px;height:52px;border-radius:14px;margin-bottom:20px;display:flex;align-items:center;justify-content:center;font-size:24px}
.why-icon.t{background:rgba(104,204,209,.12)}.why-icon.g{background:rgba(232,200,74,.12)}.why-icon.c{background:rgba(239,78,62,.1)}
.why-card h3{font-size:1.05rem;font-weight:700;margin-bottom:10px}
.why-card p{font-size:14px;color:var(--gray);line-height:1.75}
.why-stat{margin-top:20px;padding-top:20px;border-top:1px solid var(--border);font-size:1.5rem;font-weight:800}
.why-stat span{display:block;font-size:11px;font-weight:500;color:var(--gray);margin-top:2px}

/* PRODUCTS */
.products{padding:100px 5%;background:var(--ink)}
.products-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:56px}
.products-header .tag{color:var(--teal)}.products-header .tag::before{background:var(--teal)}
.products-header h2{font-size:clamp(2rem,3.5vw,2.8rem);color:white;margin-top:14px}
.products-header p{font-size:14px;color:rgba(255,255,255,.4);max-width:300px;text-align:right;line-height:1.7}
.products-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.prod-card{border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.03);transition:.3s}
.prod-card:hover{border-color:var(--teal);transform:translateY(-4px)}
.prod-img{height:220px;overflow:hidden;position:relative}
.prod-img img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
.prod-card:hover .prod-img img{transform:scale(1.05)}
.prod-img-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(15,30,31,.6) 0%,transparent 60%)}
.prod-body{padding:28px}
.prod-name{font-size:1.15rem;font-weight:700;color:white;margin-bottom:10px}
.prod-desc{font-size:13.5px;color:rgba(255,255,255,.45);line-height:1.75;margin-bottom:20px}
.prod-specs{display:flex;flex-direction:column;gap:0}
.spec-row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.06)}
.spec-row:last-child{border-bottom:none}
.spec-k{font-size:12px;color:rgba(255,255,255,.35)}.spec-v{font-size:12.5px;font-weight:600;color:rgba(255,255,255,.8)}
.prod-cta{display:block;width:100%;margin-top:20px;padding:12px;text-align:center;border-radius:10px;border:1px solid rgba(104,204,209,.25);color:var(--teal);font-size:13.5px;font-weight:600;text-decoration:none;transition:.2s}
.prod-cta:hover{background:rgba(104,204,209,.08);border-color:var(--teal)}

/* CERTIFICATIONS */
.cert{padding:100px 5%;background:var(--warm-bg)}
.cert-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.cert h2{font-size:clamp(2rem,3.5vw,2.8rem);margin:16px 0 18px}
.cert-desc{font-size:1rem;color:var(--gray);line-height:1.8;margin-bottom:32px}
.cert-cards{display:flex;flex-direction:column;gap:16px}
.cert-item{display:flex;align-items:flex-start;gap:16px;background:white;border-radius:16px;padding:20px;box-shadow:0 2px 12px rgba(0,0,0,.05);border:1px solid transparent;transition:.2s}
.cert-item:hover{border-color:var(--teal);transform:translateX(4px)}
.cert-icon{width:44px;height:44px;flex-shrink:0;border-radius:10px;display:flex;align-items:center;justify-content:center}
.cert-icon.teal{background:var(--teal)}.cert-icon.gold{background:var(--gold)}.cert-icon.green{background:#22c55e}
.cert-item h4{font-size:14px;font-weight:700;margin-bottom:4px}
.cert-item p{font-size:13px;color:var(--gray);line-height:1.6}
.cert-visual{background:var(--ink);border-radius:24px;padding:40px}
.cert-vis-title{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:28px}
.cert-nums{display:flex;gap:24px;margin-bottom:32px}
.cert-num{text-align:center;flex:1}
.cert-num-val{font-size:2.5rem;font-weight:900;color:var(--teal);line-height:1}
.cert-num-lbl{font-size:11.5px;color:rgba(255,255,255,.4);margin-top:6px;line-height:1.4}
.cert-div{height:1px;background:rgba(255,255,255,.08);margin-bottom:28px}
.cert-markets{display:flex;flex-direction:column;gap:12px}
.cert-mkt{display:flex;align-items:center}
.cert-mkt-name{display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.7);font-size:13.5px;font-weight:500;min-width:90px}
.cert-bar{height:4px;flex:1;background:rgba(255,255,255,.08);border-radius:4px;margin:0 14px;overflow:hidden}
.cert-fill{height:100%;background:var(--teal);border-radius:4px}
.cert-pct{font-size:12px;color:rgba(255,255,255,.4);font-weight:600;min-width:52px;text-align:right}

/* TIMELINE */
.timeline{padding:100px 5%;background:white}
.tl-header{text-align:center;max-width:600px;margin:0 auto 64px}
.tl-header h2{font-size:clamp(2rem,3.5vw,2.8rem);margin:16px 0 16px}
.tl-header p{font-size:1rem;color:var(--gray);line-height:1.8}
.tl-track{position:relative;max-width:860px;margin:0 auto}
.tl-track::before{content:'';position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--teal),rgba(104,204,209,.1));transform:translateX(-50%)}
.tl-item{display:flex;gap:0;margin-bottom:40px;align-items:flex-start}
.tl-item:nth-child(odd){flex-direction:row}.tl-item:nth-child(even){flex-direction:row-reverse}
.tl-content{width:calc(50% - 32px);background:var(--warm-bg);border-radius:16px;padding:20px 24px;border:1px solid var(--warm-mid)}
.tl-item:nth-child(odd) .tl-content{text-align:right}.tl-item:nth-child(even) .tl-content{text-align:left}
.tl-dot-wrap{width:64px;display:flex;justify-content:center;align-items:flex-start;padding-top:18px;flex-shrink:0}
.tl-dot{width:20px;height:20px;background:var(--teal);border-radius:50%;border:3px solid white;box-shadow:0 0 0 3px rgba(104,204,209,.3);flex-shrink:0}
.tl-dot.mbs{background:var(--coral);box-shadow:0 0 0 3px rgba(239,78,62,.25)}
.tl-dot.cert{background:var(--gold);box-shadow:0 0 0 3px rgba(232,200,74,.3)}
.tl-dot.today{background:var(--gold)}
.tl-year{font-size:1.3rem;font-weight:900;color:var(--teal);line-height:1;margin-bottom:6px}
.tl-year.mbs{color:var(--coral)}.tl-year.cert{color:#c8a000}
.tl-title{font-size:14px;font-weight:700;margin-bottom:4px}
.tl-desc{font-size:13px;color:var(--gray);line-height:1.6}
.tl-badge{display:inline-block;margin-top:8px;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:700}
.tl-badge.mbs{background:rgba(239,78,62,.1);color:var(--coral)}.tl-badge.cert{background:rgba(232,200,74,.15);color:#9a7a00}

/* PROCESS */
.process{padding:100px 5%;background:var(--warm-bg)}
.proc-header{text-align:center;max-width:600px;margin:0 auto 60px}
.proc-header h2{font-size:clamp(2rem,3.5vw,2.8rem);margin:16px 0 16px}
.proc-header p{font-size:1rem;color:var(--gray);line-height:1.8}
.proc-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--warm-mid);border-radius:20px;overflow:hidden}
.proc-step{background:white;padding:0;transition:box-shadow .3s;overflow:hidden}
.proc-step:hover{box-shadow:inset 0 0 0 2px var(--teal)}
.proc-photo{height:160px;overflow:hidden}
.proc-photo img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
.proc-step:hover .proc-photo img{transform:scale(1.05)}
.proc-content{padding:24px}
.proc-num{font-size:11px;font-weight:800;letter-spacing:3px;color:var(--teal-dark);text-transform:uppercase;margin-bottom:12px}
.proc-step h3{font-size:1rem;font-weight:700;margin-bottom:10px}
.proc-step p{font-size:13.5px;color:var(--gray);line-height:1.75}
.proc-detail{margin-top:14px;padding-top:14px;border-top:1px solid var(--border);font-size:12px;color:var(--teal-dark);font-weight:600}

/* CHAIRMAN */
.chairman{padding:100px 5%;background:var(--ink);position:relative;overflow:hidden}
.chairman-bg{position:absolute;inset:0;background:radial-gradient(ellipse 70% 80% at 20% 50%,rgba(104,204,209,.06) 0%,transparent 60%)}
.chairman-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;position:relative}
.chairman-card{background:rgba(255,255,255,.04);border:1px solid rgba(104,204,209,.15);border-radius:24px;padding:48px}
.quote-mark{font-size:5rem;color:var(--teal);line-height:.8;font-family:'DM Serif Display',serif;margin-bottom:16px;opacity:.5}
.chairman blockquote{font-size:1.1rem;color:rgba(255,255,255,.8);line-height:1.8;font-style:italic;margin-bottom:32px}
.chairman-sig{display:flex;align-items:center;gap:16px}
.chairman-avatar{width:52px;height:52px;background:linear-gradient(135deg,var(--teal),var(--teal-dark));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px}
.chairman-name{font-size:15px;font-weight:700;color:white}
.chairman-title{font-size:12px;color:rgba(255,255,255,.45);margin-top:2px}
.chairman-right h2{font-size:clamp(2rem,3vw,2.6rem);color:white;margin:16px 0 20px}
.chairman-right .tag{color:var(--teal)}.chairman-right .tag::before{background:var(--teal)}
.chairman-right>p{font-size:1rem;color:rgba(255,255,255,.55);line-height:1.8;margin-bottom:28px}
.culture-items{display:flex;flex-direction:column;gap:10px}
.culture-item{display:flex;align-items:center;gap:12px;font-size:13.5px;color:rgba(255,255,255,.7)}
.culture-num{width:24px;height:24px;background:rgba(104,204,209,.15);border:1px solid rgba(104,204,209,.25);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:var(--teal);flex-shrink:0}

/* CSR */
.csr{padding:100px 5%;background:white}
.csr-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.csr h2{font-size:clamp(2rem,3.5vw,2.8rem);margin:16px 0 18px}
.csr-desc{font-size:1rem;color:var(--gray);line-height:1.8;margin-bottom:32px}
.csr-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.csr-card{background:var(--warm-bg);border-radius:16px;padding:24px;border:1px solid var(--warm-mid);transition:.3s}
.csr-card:hover{border-color:var(--teal);transform:translateY(-3px)}
.csr-icon{font-size:32px;margin-bottom:12px}
.csr-card h4{font-size:14px;font-weight:700;margin-bottom:6px}
.csr-card p{font-size:13px;color:var(--gray);line-height:1.6}
.csr-visual{background:linear-gradient(135deg,var(--ink),var(--ink-mid));border-radius:24px;overflow:hidden}
.csr-photos{display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:0}
.csr-photos img{width:100%;height:120px;object-fit:cover;display:block}
.csr-group-info{padding:28px}
.csr-vis-title{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:16px}
.csr-co{display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.05);border-radius:10px;padding:10px 14px;margin-bottom:8px}
.csr-co-name{font-size:13px;font-weight:700;color:white}
.csr-co-detail{font-size:11.5px;color:rgba(255,255,255,.4)}

/* SUSTAIN */
.sustain{padding:100px 5%;background:linear-gradient(135deg,#0f2a2b 0%,#1e4345 50%,#163536 100%);position:relative;overflow:hidden}
.sustain-bg{position:absolute;inset:0;background:radial-gradient(circle at 80% 20%,rgba(104,204,209,.08) 0%,transparent 50%)}
.sustain-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;position:relative}
.sustain h2{font-size:clamp(2rem,3.5vw,2.8rem);color:white;margin:16px 0 18px}
.sustain-desc{font-size:1rem;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:32px}
.sustain-tag{color:var(--teal-light)}.sustain-tag::before{background:var(--teal-light)}
.sustain-pts{display:flex;flex-direction:column;gap:14px}
.sustain-pt{display:flex;gap:14px;align-items:flex-start}
.sustain-dot{width:20px;height:20px;background:var(--teal);border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:2px;font-size:10px;color:var(--ink);font-weight:900}
.sustain-pt p{font-size:14px;color:rgba(255,255,255,.7);line-height:1.7}
.sustain-pt p strong{color:white}
.sustain-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.sustain-card{background:rgba(255,255,255,.05);border:1px solid rgba(104,204,209,.12);border-radius:16px;padding:24px;text-align:center}
.sustain-card-ic{font-size:36px;margin-bottom:12px}
.sustain-card h4{font-size:14px;font-weight:700;color:white;margin-bottom:6px}
.sustain-card p{font-size:12.5px;color:rgba(255,255,255,.45);line-height:1.6}

/* RFQ */
.rfq{padding:100px 5%;background:var(--warm-bg)}
.rfq-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
.rfq h2{font-size:clamp(2rem,3.5vw,2.8rem);margin:16px 0 16px}
.rfq-desc{font-size:1rem;color:var(--gray);line-height:1.8;margin-bottom:28px}
.rfq-why{display:flex;flex-direction:column;gap:12px;margin-bottom:32px}
.rfq-why-item{display:flex;align-items:center;gap:12px;font-size:14px;color:var(--ink)}
.rfq-why-item::before{content:'✓';width:24px;height:24px;flex-shrink:0;background:var(--teal);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:var(--ink)}
.rfq-contacts{display:flex;flex-direction:column;gap:10px}
.rfq-row{display:flex;align-items:center;gap:12px;font-size:14px;color:var(--gray)}
.rfq-ic{width:32px;height:32px;background:white;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 1px 4px rgba(0,0,0,.08)}
.rfq-row a{color:var(--teal-dark);font-weight:600;text-decoration:none}
.rfq-form{background:white;border-radius:24px;padding:40px;box-shadow:0 8px 48px rgba(0,0,0,.08)}
.rfq-form h3{font-size:1.15rem;font-weight:700;margin-bottom:24px}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.fg{display:flex;flex-direction:column;gap:6px;margin-bottom:16px}
.fg label{font-size:12.5px;font-weight:600;color:var(--ink)}
.fg input,.fg select,.fg textarea{padding:11px 14px;border-radius:10px;border:1.5px solid var(--border);font-family:'Inter',sans-serif;font-size:14px;color:var(--ink);background:var(--warm-bg);outline:none;transition:.2s;width:100%}
.fg input:focus,.fg select:focus,.fg textarea:focus{border-color:var(--teal);box-shadow:0 0 0 3px rgba(104,204,209,.15);background:white}
.fg textarea{min-height:110px;resize:vertical}
.rfq-submit{width:100%;padding:14px;border-radius:10px;background:var(--ink);color:white;border:none;font-size:15px;font-weight:700;cursor:pointer;transition:.25s;display:flex;align-items:center;justify-content:center;gap:8px;font-family:'Inter',sans-serif}
.rfq-submit:hover{background:var(--ink-mid);transform:translateY(-1px)}
.rfq-note{text-align:center;margin-top:12px;font-size:12px;color:var(--gray)}
#form-success{display:none;background:rgba(104,204,209,.1);border:1px solid var(--teal);border-radius:10px;padding:14px;margin-bottom:16px;color:var(--teal-dark);font-weight:600;text-align:center}

/* FOOTER */
footer{background:var(--ink);color:white;padding:64px 5% 28px}
.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;max-width:1160px;margin:0 auto 48px}
.footer-logo-wrap{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.footer-logo-mark{width:40px;height:40px;background:var(--teal);border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;color:var(--ink)}
.footer-logo-name{font-weight:700;font-size:15px;line-height:1.3}
.footer-logo-name span{display:block;font-size:11px;font-weight:400;color:rgba(255,255,255,.3)}
.footer-brand p{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.8;max-width:240px}
.footer-certs{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}
.footer-cert-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(104,204,209,.08);border:1px solid rgba(104,204,209,.15);border-radius:8px;font-size:11.5px;color:var(--teal);font-weight:600}
.footer-col h5{font-size:11.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:16px}
.footer-col ul{list-style:none;display:flex;flex-direction:column;gap:10px}
.footer-col ul li a{font-size:13.5px;color:rgba(255,255,255,.6);text-decoration:none;transition:color .2s}
.footer-col ul li a:hover{color:var(--teal)}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding-top:24px;max-width:1160px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.footer-bottom p{font-size:12.5px;color:rgba(255,255,255,.25)}
.footer-bottom a{color:var(--teal);text-decoration:none}

@media(max-width:960px){
  .hero-inner,.cert-inner,.chairman-inner,.csr-inner,.sustain-inner,.rfq-inner{grid-template-columns:1fr}
  .hero-panel,.tl-track::before{display:none}
  .why-grid{grid-template-columns:1fr 1fr}
  .products-grid{grid-template-columns:1fr}
  .products-header{flex-direction:column;align-items:flex-start;gap:16px}
  .products-header p{text-align:left}
  .proc-steps{grid-template-columns:1fr 1fr}
  .footer-top{grid-template-columns:1fr 1fr}
  nav .nav-links{display:none}
}
@media(max-width:640px){
  .why-grid,.csr-cards,.sustain-cards{grid-template-columns:1fr}
  .proc-steps{grid-template-columns:1fr}
  .frow{grid-template-columns:1fr}
  .footer-top{grid-template-columns:1fr}
}
</style>

<!-- NAV -->
<nav id="navbar">
  <a class="nav-brand" href="#">
    <div class="nav-brand-mark">MBS</div>
    <div class="nav-brand-text">PT Mustika Buana Sejahtera<span>Timber Panel Manufacturer — Est. 2006</span></div>
  </a>
  <ul class="nav-links">
    <li><a href="#why">Why MBS</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#cert">Certifications</a></li>
    <li><a href="#history">Our Story</a></li>
    <li><a href="#csr">People & CSR</a></li>
    <li><a href="#rfq">Request Quote</a></li>
  </ul>
  <a href="#rfq" class="nav-cta">Get a Quote →</a>
</nav>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-bg-img"></div>
  <div class="hero-overlay"></div>
  <div class="hero-lines"></div>
  <div class="hero-main">
    <div class="hero-inner">
      <div>
        <div class="hero-eyebrow reveal"><div class="hero-eyebrow-dot">✓</div><span>CARB Phase II &amp; JAS Certified Manufacturer</span></div>
        <h1 class="h-display reveal d1">Your Reliable <em>Timber Panel</em><br/>Supplier from Indonesia</h1>
        <p class="hero-sub reveal d2">PT MBS manufactures export-grade plywood, blockboard, and barecore from sustainable Albizia Falcata. Part of the Mustikatama Group — trusted by buyers across Europe, Asia, and the Americas since 2006.</p>
        <div class="hero-actions reveal d3">
          <a href="#rfq" class="btn-teal">Request a Quote →</a>
          <a href="#products" class="btn-ghost">View Products</a>
        </div>
        <div class="hero-trust reveal d3">
          <div class="hero-trust-item"><span>🏭</span><span>Lumajang, <strong>East Java</strong></span></div>
          <div class="hero-trust-item"><span>🚢</span><span>Ships to <strong>5 continents</strong></span></div>
          <div class="hero-trust-item"><span>👷</span><span><strong>700+</strong> workers</span></div>
        </div>
      </div>
      <div class="hero-panel reveal d2">
        <div class="hero-panel-title">At a Glance</div>
        <div class="spec-grid">
          <div class="spec-box"><div class="spec-val t">700+</div><div class="spec-lbl">Skilled production workers</div></div>
          <div class="spec-box"><div class="spec-val g">2006</div><div class="spec-lbl">Year MBS was established</div></div>
          <div class="spec-box"><div class="spec-val">5</div><div class="spec-lbl">Continents we export to</div></div>
          <div class="spec-box"><div class="spec-val g">1987</div><div class="spec-lbl">Mustikatama Group founded</div></div>
        </div>
        <div class="cert-pills">
          <div class="cert-pill-row"><div class="cert-pill-icon">🏆</div><div><strong>CARB Phase II Certified</strong><span>No. TPC6/CARB-ATCM/M019-HWPW014 · Obtained 2009</span></div></div>
          <div class="cert-pill-row"><div class="cert-pill-icon gold">🌸</div><div><strong>JAS Certified</strong><span>Japan Agricultural Standards · Japanese market compliance</span></div></div>
        </div>
        <div class="prod-pills">
          <span class="prod-pill">Plywood</span><span class="prod-pill">Blockboard</span><span class="prod-pill">Barecore</span><span class="prod-pill">Albizia Falcata</span>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-bar">
    <div class="hero-bar-inner">
      <div class="hero-bar-stat"><div class="hero-bar-num">700+</div><div class="hero-bar-lbl">Workers</div></div>
      <div class="hero-bar-stat"><div class="hero-bar-num">2006</div><div class="hero-bar-lbl">Est. Year</div></div>
      <div class="hero-bar-stat"><div class="hero-bar-num">CARB II</div><div class="hero-bar-lbl">Certified 2009</div></div>
      <div class="hero-bar-stat"><div class="hero-bar-num">JAS</div><div class="hero-bar-lbl">Japan Standard</div></div>
      <div class="hero-bar-stat"><div class="hero-bar-num">5</div><div class="hero-bar-lbl">Continents</div></div>
    </div>
  </div>
</section>

<!-- MARKETS -->
<div class="markets">
  <div class="markets-inner">
    <div class="markets-label">Export Markets We Serve</div>
    <div class="markets-row">
      <div class="market-item"><span class="flag">🇯🇵</span><div><div class="name">Japan</div><div class="detail">JAS certified</div></div></div>
      <div class="market-item"><span class="flag">🇺🇸</span><div><div class="name">USA</div><div class="detail">CARB II compliant</div></div></div>
      <div class="market-item"><span class="flag">🇩🇪</span><div><div class="name">Europe</div><div class="detail">DE, NL &amp; more</div></div></div>
      <div class="market-item"><span class="flag">🇨🇳</span><div><div class="name">China &amp; Asia</div><div class="detail">Primary market</div></div></div>
      <div class="market-item"><span class="flag">🇦🇺</span><div><div class="name">Oceania</div><div class="detail">AUS &amp; NZ</div></div></div>
      <div class="market-item"><span class="flag">🌍</span><div><div class="name">Africa</div><div class="detail">Growing market</div></div></div>
    </div>
  </div>
</div>

<!-- WHY MBS -->
<section class="why" id="why">
  <div class="container">
    <div class="why-header reveal"><div class="tag">Why Choose MBS</div><h2 class="h-display">Built for Buyers Who Demand Reliability</h2><p class="why-sub">We know what procurement teams need: certified quality, high-volume capacity, and a supplier that delivers on time, every time.</p></div>
    <div class="why-grid">
      <div class="why-card reveal"><div class="why-icon t">🏆</div><h3>Dual International Certifications</h3><p>CARB Phase II (USA) and JAS (Japan) — ship to any market with documented compliance.</p><div class="why-stat">CARB + JAS<span>Dual-certified since 2009</span></div></div>
      <div class="why-card reveal d1"><div class="why-icon g">⚡</div><h3>Large Production Capacity</h3><p>700+ skilled workers in East Java. Handle high-volume orders for manufacturers, wholesalers and retailers.</p><div class="why-stat">700+<span>Skilled production workers on site</span></div></div>
      <div class="why-card reveal d2"><div class="why-icon c">🌿</div><h3>Sustainable Albizia Falcata</h3><p>100% plantation-grown Sengon — no deforestation. Supports your ESG and green procurement goals.</p><div class="why-stat">Eco ✓<span>Plantation wood, not rainforest</span></div></div>
      <div class="why-card reveal"><div class="why-icon t">🏭</div><h3>Group Strength Since 1987</h3><p>MBS is part of the Mustikatama Group — a diversified industrial group with 35+ years of manufacturing history.</p><div class="why-stat">35+ yrs<span>Group operational experience</span></div></div>
      <div class="why-card reveal d1"><div class="why-icon g">🎓</div><h3>Japan-Trained Professionals</h3><p>Key personnel underwent OJT in Japan — bringing international manufacturing standards to our East Java plant.</p><div class="why-stat">OJT Japan<span>Internationally trained team</span></div></div>
      <div class="why-card reveal d2"><div class="why-icon c">🤝</div><h3>Custom Orders Welcome</h3><p>Manufacturer, wholesaler, retailer, or contractor — we produce custom dimensions, grades and specs to your exact needs.</p><div class="why-stat">Custom<span>Dimensions, grades &amp; specs</span></div></div>
    </div>
  </div>
</section>

<!-- PRODUCTS -->
<section class="products" id="products">
  <div class="container">
    <div class="products-header reveal"><div><div class="tag">Product Range</div><h2 class="h-display">Three Products,<br/>Endless Applications</h2></div><p>All from sustainable Albizia Falcata. Custom dimensions available. Contact us for full spec sheets.</p></div>
    <div class="products-grid">
      <div class="prod-card reveal"><div class="prod-img"><img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/DSC_9277-3008x2000-1152w.JPG" alt="MBS Plywood" loading="lazy"/><div class="prod-img-overlay"></div></div><div class="prod-body"><div class="prod-name">Plywood</div><div class="prod-desc">Multi-layer cross-laminated veneer panels for superior strength. Available in multiple grades for furniture, construction, fixtures and industrial use.</div><div class="prod-specs"><div class="spec-row"><span class="spec-k">Species</span><span class="spec-v">Albizia Falcata (Sengon)</span></div><div class="spec-row"><span class="spec-k">Thickness</span><span class="spec-v">3mm – 25mm</span></div><div class="spec-row"><span class="spec-k">Standard Size</span><span class="spec-v">1220 × 2440mm</span></div><div class="spec-row"><span class="spec-k">Grades</span><span class="spec-v">BB/CC, B/BB &amp; custom</span></div><div class="spec-row"><span class="spec-k">Certifications</span><span class="spec-v">CARB Phase II, JAS</span></div></div><a href="#rfq" class="prod-cta">Request Specs &amp; Pricing →</a></div></div>
      <div class="prod-card reveal d1"><div class="prod-img"><img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/BC%20L%20%284%29-3008x2000-1920w.JPG" alt="MBS Blockboard" loading="lazy"/><div class="prod-img-overlay"></div></div><div class="prod-body"><div class="prod-name">Blockboard</div><div class="prod-desc">Solid Sengon core strips between veneers. Rigid, lightweight, excellent flatness and screw-holding for furniture, doors and interiors.</div><div class="prod-specs"><div class="spec-row"><span class="spec-k">Core</span><span class="spec-v">Sengon strips</span></div><div class="spec-row"><span class="spec-k">Thickness</span><span class="spec-v">12mm – 30mm</span></div><div class="spec-row"><span class="spec-k">Standard Size</span><span class="spec-v">1220 × 2440mm</span></div><div class="spec-row"><span class="spec-k">Applications</span><span class="spec-v">Furniture, shelving, doors</span></div><div class="spec-row"><span class="spec-k">Certifications</span><span class="spec-v">CARB Phase II, JAS</span></div></div><a href="#rfq" class="prod-cta">Request Specs &amp; Pricing →</a></div></div>
      <div class="prod-card reveal d2"><div class="prod-img"><img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/Prep%20L%20%286%29-3008x2000-1920w.JPG" alt="MBS Barecore" loading="lazy"/><div class="prod-img-overlay"></div></div><div class="prod-body"><div class="prod-name">Barecore</div><div class="prod-desc">Unfinished core panels for customers applying their own veneers or overlays. Consistent density and precision thickness for downstream processing.</div><div class="prod-specs"><div class="spec-row"><span class="spec-k">Species</span><span class="spec-v">Albizia Falcata</span></div><div class="spec-row"><span class="spec-k">Thickness</span><span class="spec-v">9mm – 18mm</span></div><div class="spec-row"><span class="spec-k">Standard Size</span><span class="spec-v">1220 × 2440mm</span></div><div class="spec-row"><span class="spec-k">Moisture Content</span><span class="spec-v">8% – 12%</span></div><div class="spec-row"><span class="spec-k">Best For</span><span class="spec-v">Re-facing, custom overlays</span></div></div><a href="#rfq" class="prod-cta">Request Specs &amp; Pricing →</a></div></div>
    </div>
  </div>
</section>

<!-- CERTIFICATIONS -->
<section class="cert" id="cert">
  <div class="container">
    <div class="cert-inner">
      <div class="reveal">
        <div class="tag">Certifications &amp; Quality</div>
        <h2 class="h-display">Three World-Class Standards</h2>
        <p class="cert-desc">CARB Phase II, JAS, and V-Legal — our certifications give you direct access to the USA, Japan, EU, and any market demanding the highest quality and legal compliance.</p>
        <div class="cert-cards">
          <div class="cert-item"><div class="cert-icon teal"><img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/air-resources-board-240x240-240x240-181w.jpg" alt="CARB" style="width:36px;height:36px;object-fit:contain;border-radius:4px;"/></div><div><h4>CARB Phase II — California Air Resources Board</h4><p>Certified 2009. Strictest formaldehyde standard globally. Required for US market. Cert No. TPC6/CARB-ATCM/M019-HWPW014.</p></div></div>
          <div class="cert-item"><div class="cert-icon gold" style="font-size:20px;color:var(--ink);">🌸</div><div><h4>JAS — Japan Agricultural Standards</h4><p>Certified Japan Agricultural Standards — prerequisite for Japan's premium timber market. Dimensional accuracy and bond strength guaranteed.</p></div></div>
          <div class="cert-item"><div class="cert-icon green"><img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/V%20Legal%20Web-213x147-134w.jpg" alt="V-Legal" style="width:36px;height:36px;object-fit:contain;border-radius:4px;"/></div><div><h4>V-Legal — Indonesian Timber Legality (SVLK)</h4><p>Confirms our timber comes from legal plantation sources. Required for export to EU and other regulated markets.</p></div></div>
          <div class="cert-item"><div class="cert-icon teal" style="font-size:18px;">✅</div><div><h4>Export-Grade Multi-Stage QC</h4><p>Every shipment: thickness tolerance, moisture (8–12%), glue bond, visual grading. Full documentation for customs and inspection.</p></div></div>
        </div>
      </div>
      <div class="cert-visual reveal d1">
        <div class="cert-vis-title">Export Performance</div>
        <div class="cert-nums">
          <div class="cert-num"><div class="cert-num-val">3</div><div class="cert-num-lbl">International Certifications</div></div>
          <div class="cert-num"><div class="cert-num-val">5</div><div class="cert-num-lbl">Continents Served</div></div>
          <div class="cert-num"><div class="cert-num-val">17+</div><div class="cert-num-lbl">Years Exporting</div></div>
        </div>
        <div class="cert-div"></div>
        <div class="cert-markets">
          <div class="cert-mkt"><div class="cert-mkt-name"><span>🌏</span>Asia</div><div class="cert-bar"><div class="cert-fill" style="width:85%"></div></div><div class="cert-pct">Primary</div></div>
          <div class="cert-mkt"><div class="cert-mkt-name"><span>🇯🇵</span>Japan</div><div class="cert-bar"><div class="cert-fill" style="width:72%"></div></div><div class="cert-pct">JAS cert</div></div>
          <div class="cert-mkt"><div class="cert-mkt-name"><span>🇺🇸</span>USA</div><div class="cert-bar"><div class="cert-fill" style="width:60%"></div></div><div class="cert-pct">CARB II</div></div>
          <div class="cert-mkt"><div class="cert-mkt-name"><span>🌍</span>Europe</div><div class="cert-bar"><div class="cert-fill" style="width:50%"></div></div><div class="cert-pct">Active</div></div>
          <div class="cert-mkt"><div class="cert-mkt-name"><span>🌎</span>Americas</div><div class="cert-bar"><div class="cert-fill" style="width:40%"></div></div><div class="cert-pct">Active</div></div>
          <div class="cert-mkt"><div class="cert-mkt-name"><span>🌍</span>Africa</div><div class="cert-bar"><div class="cert-fill" style="width:28%"></div></div><div class="cert-pct">Growing</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TIMELINE -->
<section class="timeline" id="history">
  <div class="container">
    <div class="tl-header reveal"><div class="tag">Our History</div><h2 class="h-display">The Mustikatama Group Story</h2><p>MBS is part of a diversified industrial group with roots going back to 1987. A long track record of building and scaling manufacturing businesses in East Java.</p></div>
    <div class="tl-track">
      <div class="tl-item reveal"><div class="tl-content"><div class="tl-year">1987</div><div class="tl-title">Mustikatama Group Founded</div><div class="tl-desc">Group origins in East Java with salt iodization (CV. Mekarsari Jaya) and rice milling (CV. Sumbersari Jaya).</div></div><div class="tl-dot-wrap"><div class="tl-dot"></div></div><div class="tl-content" style="visibility:hidden"></div></div>
      <div class="tl-item reveal d1"><div class="tl-content" style="visibility:hidden"></div><div class="tl-dot-wrap"><div class="tl-dot"></div></div><div class="tl-content"><div class="tl-year">1993</div><div class="tl-title">PT Mustika Bahana Jaya (MBJ)</div><div class="tl-desc">Timber operations begin. MBJ established, specializing in rubberwood and Merkusii pine processing.</div></div></div>
      <div class="tl-item reveal d2"><div class="tl-content"><div class="tl-year cert">2004</div><div class="tl-title">JAS Certification Achieved</div><div class="tl-desc">Group earns Japan Agricultural Standards certification, opening Japan's premium timber market.</div><div class="tl-badge cert">🌸 JAS Certified</div></div><div class="tl-dot-wrap"><div class="tl-dot cert"></div></div><div class="tl-content" style="visibility:hidden"></div></div>
      <div class="tl-item reveal d1"><div class="tl-content" style="visibility:hidden"></div><div class="tl-dot-wrap"><div class="tl-dot mbs"></div></div><div class="tl-content"><div class="tl-year mbs">2006</div><div class="tl-title">PT Mustika Buana Sejahtera Founded</div><div class="tl-desc">MBS established — dedicated Albizia Falcata plywood and blockboard manufacturer powered by Group expertise.</div><div class="tl-badge mbs">🏭 MBS Established</div></div></div>
      <div class="tl-item reveal d2"><div class="tl-content"><div class="tl-year cert">2009</div><div class="tl-title">MBS Achieves CARB Phase II</div><div class="tl-desc">MBS earns California Air Resources Board certification — unlocking the US market. Cert No. TPC6/CARB-ATCM/M019-HWPW014.</div><div class="tl-badge cert">🏆 CARB Phase II</div></div><div class="tl-dot-wrap"><div class="tl-dot cert"></div></div><div class="tl-content" style="visibility:hidden"></div></div>
      <div class="tl-item reveal d1"><div class="tl-content" style="visibility:hidden"></div><div class="tl-dot-wrap"><div class="tl-dot today"></div></div><div class="tl-content"><div class="tl-year">Today</div><div class="tl-title">700+ Workers, 5 Continents</div><div class="tl-desc">MBS exports to buyers across Europe, Asia, Americas, Africa and Oceania with 700+ workers and three international certifications.</div></div></div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="process" id="process">
  <div class="container">
    <div class="proc-header reveal"><div class="tag">Our Process</div><h2 class="h-display">From Plantation to Your Warehouse</h2><p>Every panel you receive meets the same standard as the last. Our process is built for consistency at scale.</p></div>
    <div class="proc-steps reveal">
      <div class="proc-step"><div class="proc-photo"><img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/Logyard%20%286%29_7BHvCBWZR2QJfK7cpPSR-3008x2000-1152w.JPG" alt="Sourcing" loading="lazy"/></div><div class="proc-content"><div class="proc-num">Step 01</div><h3>Plantation Sourcing</h3><p>Albizia Falcata logs from certified plantation forests — fast-growing, renewable, fully traceable.</p><div class="proc-detail">→ Traceable plantation origin</div></div></div>
      <div class="proc-step"><div class="proc-photo"><img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/CR%20%283%29-2832x2128-1920w.JPG" alt="Processing" loading="lazy"/></div><div class="proc-content"><div class="proc-num">Step 02</div><h3>Processing &amp; Drying</h3><p>Logs peeled, sliced to spec, kiln-dried to 8–12% MC by our Japan-trained team.</p><div class="proc-detail">→ 8–12% MC target</div></div></div>
      <div class="proc-step"><div class="proc-photo"><img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/QC%20%2812%29-800x623-1920w.JPG" alt="QC" loading="lazy"/></div><div class="proc-content"><div class="proc-num">Step 03</div><h3>Multi-Stage QC</h3><p>Thickness, glue bond, formaldehyde, visual grading — every stage. CARB II &amp; JAS compliant.</p><div class="proc-detail">→ Dual-certified compliance</div></div></div>
      <div class="proc-step"><div class="proc-photo"><img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/CR%20%286%29_bPpa3SbNTpyc1lqGqlpZ-3008x2000-1152w.JPG" alt="Export" loading="lazy"/></div><div class="proc-content"><div class="proc-num">Step 04</div><h3>Export-Ready Packing</h3><p>Export-standard packing with phytosanitary cert, B/L, packing list, and cert copies ready for customs.</p><div class="proc-detail">→ Ships to 5 continents</div></div></div>
    </div>
  </div>
</section>

<!-- CHAIRMAN -->
<section class="chairman">
  <div class="chairman-bg"></div>
  <div class="container">
    <div class="chairman-inner">
      <div class="chairman-card reveal">
        <div class="quote-mark">"</div>
        <blockquote>Whether you are a manufacturer, wholesaler, large retail store, or construction contractor — check our products and see the benefits of ordering custom-made wood products from our factory. We have met the international standards of Japan Agricultural Standards (JAS) and California Air Resources Board (CARB) as evidence of our serious attention to your needs.</blockquote>
        <div class="chairman-sig"><div class="chairman-avatar">👨‍💼</div><div><div class="chairman-name">H. Abdullah Iskandar</div><div class="chairman-title">Chairman, PT Mustika Buana Sejahtera</div></div></div>
      </div>
      <div class="chairman-right reveal d1">
        <div class="tag">Vision &amp; Culture</div>
        <h2 class="h-display">Become a Leading Company in Quality</h2>
        <p>Our mission: employ dependable human resources, stay foremost in technology, and operate the best management system. Built on 7 working culture habits.</p>
        <div class="culture-items">
          <div class="culture-item"><div class="culture-num">1</div>Carrying out tasks effectively and efficiently</div>
          <div class="culture-item"><div class="culture-num">2</div>Enhancing cooperation across all teams</div>
          <div class="culture-item"><div class="culture-num">3</div>Always obedient to working rules</div>
          <div class="culture-item"><div class="culture-num">4</div>Being responsible for every output</div>
          <div class="culture-item"><div class="culture-num">5</div>Taking initiative and being creative</div>
          <div class="culture-item"><div class="culture-num">6</div>Care for the company and its resources</div>
          <div class="culture-item"><div class="culture-num">7</div>Focusing every task toward customer satisfaction</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CSR -->
<section class="csr" id="csr">
  <div class="container">
    <div class="csr-inner">
      <div class="reveal">
        <div class="tag">People &amp; CSR</div>
        <h2 class="h-display">Our People<br/>Are Our Future</h2>
        <p class="csr-desc">MBS invests deeply in its workforce and surrounding community. A stable, skilled team means a reliable supply chain for you.</p>
        <div class="csr-cards">
          <div class="csr-card"><div class="csr-icon">🎓</div><h4>Japan OJT Training</h4><p>Key personnel trained on-the-job in Japanese wood manufacturing, bringing world-class standards to East Java.</p></div>
          <div class="csr-card"><div class="csr-icon">📚</div><h4>Student Scholarships</h4><p>Financial assistance to elementary, secondary, and high school students in the surrounding community.</p></div>
          <div class="csr-card"><div class="csr-icon">⚖️</div><h4>Labour Law Compliance</h4><p>Full compliance with Indonesian Labour Laws. Fair wages, safe conditions, respect for worker rights.</p></div>
          <div class="csr-card"><div class="csr-icon">🤝</div><h4>Community Programs</h4><p>Company events for employees and families — Independence Day, Ramadan/Idul Fitri, community bonding.</p></div>
        </div>
      </div>
      <div class="csr-visual reveal d1">
        <div class="csr-photos">
          <img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/CR%20%288%29-1600x1200-1920w.jpg" alt="MBS Facility" loading="lazy"/>
          <img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/QC%20%285%29-800x620-1920w.JPG" alt="QC Team" loading="lazy"/>
          <img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/Sengon%20l%20%286%29-1717x2000-1920w.JPG" alt="Sengon Logs" loading="lazy"/>
          <img src="https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/CR%20%287%29-3008x2000-1920w.JPG" alt="Production" loading="lazy"/>
        </div>
        <div class="csr-group-info">
          <div class="csr-vis-title">Mustikatama Group</div>
          <div class="csr-co"><div class="csr-co-name">PT Mustika Buana Sejahtera (MBS)</div><div class="csr-co-detail">Est. 2006</div></div>
          <div class="csr-co"><div class="csr-co-name">PT Mustika Bahana Jaya (MBJ)</div><div class="csr-co-detail">Est. 1993</div></div>
          <div class="csr-co"><div class="csr-co-name">PT Karya Setya Mustikatama (KSMT)</div><div class="csr-co-detail">Est. 1988</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SUSTAINABILITY -->
<section class="sustain" id="sustain">
  <div class="sustain-bg"></div>
  <div class="container">
    <div class="sustain-inner">
      <div class="reveal">
        <div class="tag sustain-tag">Sustainability</div>
        <h2 class="h-display">Good Wood.<br/>Good Business.</h2>
        <p class="sustain-desc">Plantation-grown Sengon isn't just our environmental commitment — it's your supply chain advantage. Renewable, fast-growing, always available.</p>
        <div class="sustain-pts">
          <div class="sustain-pt"><div class="sustain-dot">✓</div><p><strong>No deforestation</strong> — 100% from certified plantation forests</p></div>
          <div class="sustain-pt"><div class="sustain-dot">✓</div><p><strong>5–7 year harvest cycle</strong> — ensures long-term supply security for your business</p></div>
          <div class="sustain-pt"><div class="sustain-dot">✓</div><p><strong>Low indoor emissions</strong> — CARB Phase II limits formaldehyde for indoor air quality</p></div>
          <div class="sustain-pt"><div class="sustain-dot">✓</div><p><strong>CO₂ absorption</strong> — fast-growing plantations actively absorb carbon and produce oxygen</p></div>
          <div class="sustain-pt"><div class="sustain-dot">✓</div><p><strong>700+ local jobs</strong> — stable community employment means consistent, reliable output</p></div>
        </div>
      </div>
      <div class="sustain-cards reveal d1">
        <div class="sustain-card"><div class="sustain-card-ic">🌱</div><h4>Fast-Growing Wood</h4><p>Harvest-ready in 5–7 years. Renewable supply for long-term sourcing contracts.</p></div>
        <div class="sustain-card"><div class="sustain-card-ic">💨</div><h4>Low Emissions</h4><p>CARB Phase II &amp; JAS compliant. Meets California's and Japan's strictest standards.</p></div>
        <div class="sustain-card"><div class="sustain-card-ic">🏡</div><h4>Community-Rooted</h4><p>700+ local workers + CSR scholarships. Stable community = consistent production.</p></div>
        <div class="sustain-card"><div class="sustain-card-ic">📋</div><h4>ESG Documentation</h4><p>Plantation origin docs for your sustainability reporting and green procurement policies.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- RFQ -->
<section class="rfq" id="rfq">
  <div class="container">
    <div class="rfq-inner">
      <div class="reveal">
        <div class="tag">Request a Quote</div>
        <h2 class="h-display">Ready to Source?<br/>Let's Talk.</h2>
        <p class="rfq-desc">Send us your requirements and we'll respond within 1 business day with pricing, lead times, and availability.</p>
        <div class="rfq-why">
          <div class="rfq-why-item">Responds within 24 business hours</div>
          <div class="rfq-why-item">Custom dimensions, grades &amp; specs available</div>
          <div class="rfq-why-item">Product samples available on request</div>
          <div class="rfq-why-item">Full export documentation provided</div>
          <div class="rfq-why-item">Flexible MOQ — trial orders welcome</div>
          <div class="rfq-why-item">CARB II &amp; JAS cert docs included</div>
        </div>
        <div class="rfq-contacts">
          <div class="rfq-row"><div class="rfq-ic">📞</div><span><a href="tel:+6233488788">+62 334 887888</a></span></div>
          <div class="rfq-row"><div class="rfq-ic">📠</div><span>+62 334 884473</span></div>
          <div class="rfq-row"><div class="rfq-ic">✉️</div><span><a href="mailto:marketing@mustikatama.com">marketing@mustikatama.com</a></span></div>
          <div class="rfq-row"><div class="rfq-ic">📍</div><span>Jl. Raya Lumajang–Tempeh Km 7, Kab. Lumajang, East Java 67371</span></div>
          <div class="rfq-row"><div class="rfq-ic">🕐</div><span>Mon–Fri 7:00–16:30 · Sat 7:00–15:00</span></div>
        </div>
      </div>
      <div class="rfq-form reveal d1">
        <h3>Send an Inquiry</h3>
        <form id="rfq-form" action="https://formsubmit.co/marketing@mustikatama.com" method="POST">
          <input type="hidden" name="_subject" value="New MBS Website Inquiry"/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="hidden" name="_next" value="https://framer-mbs.com/?sent=true"/>
          <div id="form-success">✅ Message sent! We'll get back to you within 1 business day.</div>
          <div class="frow">
            <div class="fg"><label>Full Name *</label><input type="text" name="name" placeholder="John Smith" required/></div>
            <div class="fg"><label>Company *</label><input type="text" name="company" placeholder="Acme Furniture Co." required/></div>
          </div>
          <div class="frow">
            <div class="fg"><label>Email Address *</label><input type="email" name="email" placeholder="john@company.com" required/></div>
            <div class="fg"><label>Phone / WhatsApp</label><input type="tel" name="phone" placeholder="+1 234 567 890"/></div>
          </div>
          <div class="frow">
            <div class="fg"><label>Product of Interest *</label><select name="product" required><option value="">Select product...</option><option>Plywood</option><option>Blockboard</option><option>Barecore</option><option>Multiple products</option></select></div>
            <div class="fg"><label>Destination Country</label><input type="text" name="destination" placeholder="e.g. United States"/></div>
          </div>
          <div class="fg"><label>Specifications &amp; Volume</label><textarea name="message" placeholder="Thickness (mm), size, grade, quantity (m³ or containers), target price, and any requirements..."></textarea></div>
          <button type="submit" class="rfq-submit">Send Inquiry <span class="rfq-arrow">→</span></button>
          <p class="rfq-note">🔒 Your information is kept confidential. We respond within 1 business day.</p>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div class="footer-logo-wrap"><div class="footer-logo-mark">MBS</div><div class="footer-logo-name">PT Mustika Buana Sejahtera<span>Part of Mustikatama Group — Est. 1987</span></div></div>
      <p>Export-grade plywood, blockboard &amp; barecore from sustainable Albizia Falcata. CARB II, JAS &amp; V-Legal certified. 700+ workers in Lumajang, East Java.</p>
      <div class="footer-certs"><span class="footer-cert-badge">🏆 CARB Phase II</span><span class="footer-cert-badge">🌸 JAS Certified</span><span class="footer-cert-badge">🌿 V-Legal</span></div>
    </div>
    <div class="footer-col"><h5>Products</h5><ul><li><a href="#products">Plywood</a></li><li><a href="#products">Blockboard</a></li><li><a href="#products">Barecore</a></li><li><a href="#rfq">Request Catalog</a></li></ul></div>
    <div class="footer-col"><h5>Company</h5><ul><li><a href="#why">Why Choose MBS</a></li><li><a href="#cert">Certifications</a></li><li><a href="#history">Our History</a></li><li><a href="#csr">People &amp; CSR</a></li><li><a href="#sustain">Sustainability</a></li></ul></div>
    <div class="footer-col"><h5>Contact</h5><ul><li><a href="tel:+6233488788">+62 334 887888</a></li><li><a href="tel:+6233488473">+62 334 884473 (Fax)</a></li><li><a href="mailto:marketing@mustikatama.com">marketing@mustikatama.com</a></li><li><a href="#">Lumajang, East Java 67371</a></li><li><a href="https://mbs.mustikatama.com" target="_blank">mbs.mustikatama.com</a></li></ul></div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 PT Mustika Buana Sejahtera. Part of the <a href="https://mustikatama.com">Mustikatama Group</a>.</p>
    <p>🌿 Sustainable timber solutions since 2006</p>
  </div>
</footer>
`
}

build().catch(err => {
  console.error('❌ Build failed:', err.message)
  process.exit(1)
})
