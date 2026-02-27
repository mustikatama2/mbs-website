# MBS Framer Build Plan

## Site Structure
- Single page with anchor sections (SPA feel)
- All content driven from Framer CMS collections

## CMS Collections I'll Create via API
1. **Products** — name, description, specs, photo, CTA
2. **Certifications** — name, badge image, description, cert number
3. **Export Markets** — region, flag emoji, detail
4. **Why Choose Us** — icon, title, description, stat
5. **Timeline** — year, title, description, badge type
6. **CSR Items** — icon, title, description

## Sections (in order)
1. Nav — sticky, dark, logo + links + CTA button
2. Hero — full viewport, real logyard photo BG, stats bar
3. Export Markets strip
4. Why MBS — 6 card grid
5. Products — 3 cards with real photos + spec tables
6. Certifications — CARB + JAS + V-Legal with real logos
7. Group Timeline — visual history 1987→today
8. Process — 4 steps with real factory photos
9. Chairman's Message — quote + 7 culture habits
10. People & CSR — 4 cards + facility photo grid
11. Sustainability — dark section
12. RFQ Form — FormSubmit to marketing@mustikatama.com
13. Footer — full links + cert badges

## Real Photos (already sourced from MBS website)
- Hero BG: Logyard (2) — sustainable sourcing
- Plywood card: DSC_9277
- Blockboard card: BC L (4)
- Barecore card: Prep L (6)
- Process Step 1 (Sourcing): Logyard (6)
- Process Step 2 (Processing): CR (3)
- Process Step 3 (QC): QC (12)
- Process Step 4 (Export): CR (6)
- CSR grid: CR(8), QC(5), Sengon L(6), CR(7)
- CARB logo: air-resources-board-240x240
- V-Legal logo: V Legal Web

## Color Palette
- Ink (dark): #0f1e1f
- Teal: #68ccd1
- Teal dark: #3a9ea4
- Gold: #e8c84a
- Coral (CTA): #ef4e3e
- Warm BG: #f4f0eb
- White: #ffffff

## API Workflow (once token obtained)
1. Create CMS collections
2. Populate all content items
3. Upload/reference all images
4. Set page SEO metadata
5. Publish site live
6. Set up CI: any content change → publish via API

## A/B Testing Plan
- Test 1: Hero CTA text ("Request a Quote" vs "Get Pricing Now")
- Test 2: Hero photo (Logyard vs factory floor)
- Test 3: CTA color (coral #ef4e3e vs teal #68ccd1)
- Implementation: Framer Experiments (paid) or custom JS split test

## Web Manager Recurring Tasks
- Weekly: Check form submissions via FormSubmit
- Monthly: Update product specs if needed via CMS API
- Quarterly: Review and refresh photos, run A/B test analysis
- On demand: Any content/design changes Ridho requests
