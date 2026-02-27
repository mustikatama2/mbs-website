import { connect } from 'framer-api'

const PROJECT_URL = 'https://framer.com/projects/Jazzed-Octopus--zqe46haBTxwva0uF4z6t'
const API_KEY     = 'd9f032bb-869c-41f8-a1be-738674fe6f83'

// Wrap raw values into typed FieldDataEntryInput objects
function v(value, type = 'string') {
  if (type === 'boolean') return { type: 'boolean', value: Boolean(value) }
  if (type === 'number')  return { type: 'number',  value: Number(value) }
  return { type: 'string', value: String(value ?? '') }
}

const DATA = {
  Products: {
    fields: [
      { type:'string', name:'Name'           },
      { type:'string', name:'Description'    },
      { type:'string', name:'Species'        },
      { type:'string', name:'Thickness'      },
      { type:'string', name:'Standard Size'  },
      { type:'string', name:'Grades'         },
      { type:'string', name:'Certifications' },
      { type:'string', name:'Tag'            },
      { type:'string', name:'Image URL'      },
    ],
    items: [
      { slug:'plywood',    Name:v('Plywood'),    Description:v('Multi-layer cross-laminated veneer panels. Superior strength for furniture, construction and industrial use.'),   Species:v('Albizia Falcata (Sengon)'), Thickness:v('3mm – 25mm'),  'Standard Size':v('1220 × 2440mm'), Grades:v('BB/CC, B/BB & custom'), Certifications:v('CARB Phase II, JAS'), Tag:v('High Strength'), 'Image URL':v('https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/DSC_9277-3008x2000-1152w.JPG') },
      { slug:'blockboard', Name:v('Blockboard'), Description:v('Solid Sengon core strips between veneers. Rigid, lightweight, excellent flatness for furniture, doors and interiors.'), Species:v('Albizia Falcata (Sengon)'), Thickness:v('12mm – 30mm'), 'Standard Size':v('1220 × 2440mm'), Grades:v('Standard & custom'),   Certifications:v('CARB Phase II, JAS'), Tag:v('Lightweight'),   'Image URL':v('https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/BC%20L%20%284%29-3008x2000-1920w.JPG') },
      { slug:'barecore',   Name:v('Barecore'),   Description:v('Unfinished core panels for customers applying their own veneers. Consistent density and precision thickness.'),          Species:v('Albizia Falcata'),          Thickness:v('9mm – 18mm'),  'Standard Size':v('1220 × 2440mm'), Grades:v('Export grade'),         Certifications:v('CARB Phase II'),      Tag:v('Export Grade'),  'Image URL':v('https://lirp.cdn-website.com/c754611f/dms3rep/multi/opt/Prep%20L%20%286%29-3008x2000-1920w.JPG') },
    ],
  },

  Certifications: {
    fields: [
      { type:'string', name:'Name'        },
      { type:'string', name:'Issuer'      },
      { type:'string', name:'Cert Number' },
      { type:'string', name:'Year'        },
      { type:'string', name:'Description' },
      { type:'string', name:'Badge'       },
      { type:'string', name:'Market'      },
    ],
    items: [
      { slug:'carb',   Name:v('CARB Phase II'),  Issuer:v('California Air Resources Board'), 'Cert Number':v('TPC6/CARB-ATCM/M019-HWPW014'), Year:v('2009'), Description:v('Strictest formaldehyde standard globally. Required for US market.'),                                             Badge:v('🏆'), Market:v('USA & Global') },
      { slug:'jas',    Name:v('JAS Certified'),  Issuer:v('Japan Agricultural Standards'),   'Cert Number':v('JAS'),                          Year:v('2004'), Description:v("Prerequisite for Japan's premium timber market. Assures dimensional accuracy and bond strength."),           Badge:v('🌸'), Market:v('Japan') },
      { slug:'vlegal', Name:v('V-Legal (SVLK)'), Issuer:v('Indonesian Ministry of Forestry'),'Cert Number':v('SVLK'),                         Year:v('2016'), Description:v('Confirms timber comes from legal plantation sources. Required for EU exports.'),                            Badge:v('🌿'), Market:v('EU & Global') },
    ],
  },

  'Export Markets': {
    fields: [
      { type:'string',  name:'Name'    },
      { type:'string',  name:'Flag'    },
      { type:'string',  name:'Detail'  },
      { type:'boolean', name:'Primary' },
    ],
    items: [
      { slug:'japan',   Name:v('Japan'),        Flag:v('🇯🇵'), Detail:v('JAS certified'),     Primary:v(true,  'boolean') },
      { slug:'usa',     Name:v('USA'),          Flag:v('🇺🇸'), Detail:v('CARB II compliant'), Primary:v(true,  'boolean') },
      { slug:'europe',  Name:v('Europe'),       Flag:v('🇩🇪'), Detail:v('DE, NL & more'),     Primary:v(true,  'boolean') },
      { slug:'asia',    Name:v('China & Asia'), Flag:v('🇨🇳'), Detail:v('Primary market'),    Primary:v(true,  'boolean') },
      { slug:'oceania', Name:v('Oceania'),      Flag:v('🇦🇺'), Detail:v('AUS & NZ'),          Primary:v(false, 'boolean') },
      { slug:'africa',  Name:v('Africa'),       Flag:v('🌍'),  Detail:v('Growing market'),    Primary:v(false, 'boolean') },
    ],
  },

  'Why MBS': {
    fields: [
      { type:'string', name:'Icon'       },
      { type:'string', name:'Title'      },
      { type:'string', name:'Body'       },
      { type:'string', name:'Stat'       },
      { type:'string', name:'Stat Label' },
    ],
    items: [
      { slug:'certs',    Icon:v('🏆'), Title:v('Dual International Certifications'), Body:v('CARB Phase II (USA) and JAS (Japan) — ship to any market with documented compliance.'),                                             Stat:v('CARB + JAS'), 'Stat Label':v('Dual-certified since 2009')       },
      { slug:'capacity', Icon:v('⚡'), Title:v('Large Production Capacity'),         Body:v('700+ skilled workers in East Java. Handle high-volume orders for manufacturers, wholesalers and retailers.'),                        Stat:v('700+'),       'Stat Label':v('Skilled production workers')      },
      { slug:'eco',      Icon:v('🌿'), Title:v('Sustainable Albizia Falcata'),       Body:v('100% plantation-grown Sengon — no deforestation. Supports your ESG and green procurement goals.'),                                   Stat:v('Eco ✓'),      'Stat Label':v('Plantation wood, not rainforest') },
      { slug:'group',    Icon:v('🏭'), Title:v('Group Strength Since 1987'),         Body:v('MBS is part of the Mustikatama Group — a diversified industrial group with 35+ years of manufacturing history.'),                   Stat:v('35+ yrs'),    'Stat Label':v('Group operational experience')   },
      { slug:'japan',    Icon:v('🎓'), Title:v('Japan-Trained Professionals'),       Body:v('Key personnel underwent OJT in Japan — bringing international manufacturing standards to East Java.'),                                Stat:v('OJT Japan'),  'Stat Label':v('Internationally trained team')    },
      { slug:'custom',   Icon:v('🤝'), Title:v('Custom Orders Welcome'),             Body:v('Manufacturer, wholesaler, retailer, or contractor — custom dimensions, grades and specs to your exact needs.'),                     Stat:v('Custom'),     'Stat Label':v('Dimensions, grades & specs')      },
    ],
  },

  Timeline: {
    fields: [
      { type:'string', name:'Year'        },
      { type:'string', name:'Title'       },
      { type:'string', name:'Description' },
      { type:'string', name:'Type'        },
    ],
    items: [
      { slug:'tl-1987',  Year:v('1987'),  Title:v('Mustikatama Group Founded'),          Description:v('Group origins in East Java with salt iodization and rice milling operations.'),                                                                    Type:v('group') },
      { slug:'tl-1993',  Year:v('1993'),  Title:v('PT Mustika Bahana Jaya (MBJ)'),       Description:v('Timber operations begin. MBJ established, specializing in rubberwood and Merkusii pine.'),                                                          Type:v('group') },
      { slug:'tl-1998',  Year:v('1998'),  Title:v('Expansion to North Sumatra'),         Description:v('PT Sumber Karindo Sakti established in Medan — Finger Joint Laminated Board production nationwide.'),                                               Type:v('group') },
      { slug:'tl-2004',  Year:v('2004'),  Title:v('JAS Certification Achieved'),         Description:v("Group earns Japan Agricultural Standards certification, opening Japan's premium timber market."),                                                    Type:v('cert')  },
      { slug:'tl-2006',  Year:v('2006'),  Title:v('PT Mustika Buana Sejahtera Founded'), Description:v('MBS established — dedicated Albizia Falcata plywood and blockboard manufacturer powered by Group expertise.'),                                      Type:v('mbs')   },
      { slug:'tl-2009',  Year:v('2009'),  Title:v('MBS Achieves CARB Phase II'),         Description:v('MBS earns California Air Resources Board certification — unlocking the US market. Cert No. TPC6/CARB-ATCM/M019-HWPW014.'),                         Type:v('cert')  },
      { slug:'tl-today', Year:v('Today'), Title:v('700+ Workers, 5 Continents'),         Description:v('Exports to Europe, Asia, Americas, Africa and Oceania with 700+ workers and 3 certifications.'),                                                    Type:v('today') },
    ],
  },
}

async function syncCollection(framer, name, { fields, items }) {
  process.stdout.write(`  📦 ${name}... `)
  try {
    const existing = await framer.getCollections()
    let col = existing.find(c => c.name === name)
    if (!col) col = await framer.createCollection(name)

    const existingFields = await col.getFields()
    const existingNames  = new Set(existingFields.map(f => f.name.toLowerCase()))
    const toAdd = fields.filter(f => !existingNames.has(f.name.toLowerCase()))
    if (toAdd.length > 0) await col.addFields(toAdd)

    const allFields = await col.getFields()
    const fieldMap  = new Map(allFields.map(f => [f.name.toLowerCase(), f.id]))

    const colItems = items.map(item => {
      const fieldData = {}
      for (const [k, val] of Object.entries(item)) {
        if (k === 'slug') continue
        const id = fieldMap.get(k.toLowerCase())
        if (id) fieldData[id] = val
      }
      return { slug: item.slug, fieldData }
    })

    await col.addItems(colItems)
    console.log(`✅ ${items.length} items`)
  } catch(e) {
    console.log(`❌ ${e.message}`)
  }
}

async function main() {
  console.log('🔌 Connecting...')
  const framer = await connect(PROJECT_URL, API_KEY)
  console.log('✅ Connected!\n')
  try {
    const info = await framer.getProjectInfo()
    console.log(`📋 Project: ${info.name}\n`)
    console.log('Syncing CMS collections...')
    for (const [name, config] of Object.entries(DATA)) {
      await syncCollection(framer, name, config)
    }
    console.log('\n🚀 Publishing...')
    try { await framer.publish([]); console.log('✅ Published!') }
    catch(e) { console.log(`⚠️  ${e.message}`) }
    console.log('\n✨ Done! 5 CMS collections live in Framer.')
  } finally {
    await framer.disconnect()
    console.log('🔌 Disconnected')
  }
}

main().catch(e => { console.error('\n❌', e.message); process.exit(1) })
