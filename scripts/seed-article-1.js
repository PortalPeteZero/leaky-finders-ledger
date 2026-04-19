// Seed Article 1: "The Strange Online Species Who Join Holiday Groups Just to Be Unhelpful"
// Run: node scripts/seed-article-1.js

const https = require('https')

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://utithowmqzteorffaajp.supabase.co'
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

// Storage paths use the slug prefix
const img = (name, size = 'medium') =>
  `holiday-groups-species/${name}-${size}.webp`

const article = {
  slug: 'holiday-groups-species',
  title: 'The Strange Online Species Who Join Holiday Groups Just to Be Unhelpful',
  subtitle: null,
  excerpt: 'A longform dispatch on the people who answer holiday questions with moral lectures, Google tutorials, and children so theatrically wholesome they sound like they were cast by a premium cereal advert.',
  category: 'commentary',
  hero_image: img('img18_playa_blanca_group_contradiction', 'full'),
  og_image: null,
  sign_off: 'Still investigative. Just aimed at leaks in online common sense rather than pool pipework.',
  author: 'The Leaky Finders',
  reading_time: 11,
  is_featured: true,
  is_published: true,
  published_at: '2026-04-19T12:00:00Z',
  content: [
    // Block 1: By Order stamp
    { type: 'by-order' },

    // Block 2: Cover
    {
      type: 'cover',
      headline: 'The Strange Online Species Who Join Holiday Groups Just to Be Unhelpful',
      standfirst: 'A longform dispatch on the people who answer holiday questions with moral lectures, Google tutorials, and children so theatrically wholesome they sound like they were cast by a premium cereal advert.',
      details: [
        { label: 'Edition', value: 'The Leaky Finders' },
        { label: 'Filed Under', value: 'Online holiday behaviour' },
        { label: 'Location', value: 'Playa Blanca groups' },
        { label: 'Reading time', value: '~11 minutes' },
      ],
      image: img('img18_playa_blanca_group_contradiction', 'full'),
      image_caption: 'The central contradiction. A local tips group, visibly irritated by local tips.',
      image_alt: 'A satirical illustration of a local tips group complaining about local tips.',
      image_tone: 'ink',
    },

    // Block 3: Lede (intro paragraphs)
    {
      type: 'lede',
      text: "There is a guaranteed species on every Facebook holiday group. You ask a very simple question, and within minutes someone appears who has absolutely no intention of answering it, but is deeply committed to explaining why your question is morally inferior to the way they go on holiday. That is where this feature begins. A Canary Detect field report into the strange online behaviour of people who join a group built for local tips, recommendations and shortcuts, then spend their time doing everything except giving local tips, recommendations and shortcuts.",
      margin_note: "In theory these groups exist to save people time. In practice they often produce unsolicited speeches on morality, lifestyle, and the miraculous discovery of Google.",
      pull_quote: "It is a local tips group getting annoyed by local tips. That contradiction does most of the work.",
    },

    // Block 4: Section divider 01
    {
      type: 'divider',
      number: '01',
      label: 'Part One',
      title: 'The first species answers your question by launching a lifestyle presentation.',
    },

    // Block 5: Editorial spread (British TV + broken charger first two paragraphs)
    {
      type: 'editorial-spread',
      text: [
        "Ask, \u2018Any idea how I get British TV channels?\u2019 and no answer arrives, obviously. Instead you get a lecture. You are on holiday. Why would you need TV? Their adorable little angels spend the evenings having meaningful conversations, painting delicate watercolours of the local scenery, and writing travel journals with fountain pens by candlelight.",
        "Ask, \u2018Anywhere I can get an English breakfast?\u2019 and again there is no location, no recommendation, no help whatsoever. Just the same sermon. They immerse themselves in the local culture, join the fishermen at 4am, fillet their own fish, grill it on hot coals on the beach, and discuss regional history while the children, already fully dressed with brushed teeth by 6am, wait excitedly to embrace another day of authentic experiences.",
      ],
      image: img('img02_british_tv_lecture'),
      image_caption: 'The British TV question never stays about television for long.',
      image_alt: 'A satirical family refusing British television on holiday while acting painfully wholesome.',
      reverse: false,
    },

    // Block 7: Editorial spread reverse (charger + remaining paragraphs)
    {
      type: 'editorial-spread',
      text: [
        "Ask, \u2018My kid\u2019s phone charger is broken. Anywhere I can get it fixed?\u2019 and cue the same crowd. Their children do not use phones on holiday. They play board games, do Sudoku, one is halfway through writing a novel, and the other is composing beautifully handwritten letters to friends back home on recycled parchment.",
        "It is never just a normal answer. Nobody says, \u2018Try the shop near the marina.\u2019 No. It has to become a full lifestyle presentation by a family who apparently holiday inside a Waitrose advert.",
      ],
      image: img('img04_broken_charger_family'),
      image_caption: 'A broken charger somehow becomes a parenting failure and a lifestyle seminar.',
      image_alt: 'A deadpan cartoon of a broken phone charger and a ridiculously wholesome holiday family.',
      reverse: true,
      inline_quote: "Nobody says, 'Try the shop near the marina.'",
    },

    // Block 8: Section divider 02
    {
      type: 'divider',
      number: '02',
      label: 'Part Two',
      title: 'The examples get stranger the moment tea, chips, football and sun loungers enter the chat.',
    },

    // Block 9: Editorial spread (tea + shepherd Mateo)
    {
      type: 'editorial-spread',
      text: [
        "Ask where to buy a decent cup of tea and you discover they stopped needing tea years ago. On holiday they drink fresh mountain infusions prepared by a local shepherd called Mateo, who taught their twins mindfulness while the eldest learned traditional basket weaving.",
        "Ask for chips for the kids and their children, of course, would never ask for chips. They snack on olives, anchovies and lightly charred padr\u00f3n peppers while discussing marine conservation. Ask where to watch the football and you are informed that they do not holiday to watch football. They holiday to reconnect with what really matters. Last night they sat silently on a cliff and listened to the wind until the children fell asleep under ethically sourced linen throws.",
      ],
      image: img('img06_shepherd_mateo_tea'),
      image_caption: 'Tea is no longer tea. It is now a mountain infusion with personal growth attached.',
      image_alt: 'A shepherd named Mateo serving herbal tea as part of a ridiculous holiday scene.',
      narrow_gap: true,
    },

    // Block 10: Wide interruption (chips — solo survivor from original gallery)
    {
      type: 'wide-interruption',
      image: img('img08_chips_vs_peppers', 'full'),
      image_caption: 'The chips question usually ends with somebody else proving their children are morally superior.',
      image_alt: 'Children rejecting chips in favour of Mediterranean delicacies in a satirical cartoon.',
      compressed: true,
    },

    // Block 11: Editorial spread reverse (loungers — image removed)
    {
      type: 'editorial-spread',
      text: [
        "Ask which supermarket sells Heinz beans and apparently once you have tasted tomatoes hand picked at sunrise by a local grandmother called Pilar, you will not even remember what beans are. Ask where to get a sun lounger and they do not do loungers. They lie directly on the earth so they can feel grounded and in tune with the volcanic energy.",
        "Ask whether any bars are showing the darts and they avoid screens entirely. Evenings are for candlelit chess, soft guitar music, and teaching the children how to identify constellations in three languages. Somehow every one of these families has children who wake up delighted, fully dressed, and desperate to learn about local pottery. Remarkable scenes.",
      ],
      inline_quote: "Nobody is this wholesome for seven straight days in 32 degree heat.",
      inline_quote_accent: true,
    },

    // Block 12: Wide interruption compressed (darts vs chess)
    {
      type: 'wide-interruption',
      image: img('img12_darts_vs_chess'),
      image_caption: 'Bars showing darts lose out to candlelit chess, soft guitar music, and constellation tuition.',
      image_alt: 'A darts question displaced by candlelit chess and constellation lessons.',
      compressed: true,
    },

    // Block 13: Section divider 03
    {
      type: 'divider',
      number: '03',
      label: 'Part Three',
      title: "Then the second species arrives. The 'use Google' brigade are somehow even stranger.",
    },

    // Block 14: Quote break
    {
      type: 'quote-break',
      quote: 'Nobody talks like that in real life because they would sound completely unhinged.',
    },

    // Block 15: Centre spread (google pub + pub discussions)
    {
      type: 'centre-spread',
      text: [
        "This might be even stranger, because if this was real life and not Facebook, it would sound absolutely mental. Imagine being in a pub and saying, \u2018Can anyone recommend a decent curry house nearby?\u2019 and someone leans over and says, \u2018Have you tried Google?\u2019 Or asking where the nearest cashpoint is and getting, \u2018This has been asked before, Google it.\u2019",
        "Or saying, \u2018Do you know anywhere that does a good breakfast?\u2019 and being told, \u2018The information is already out there if you do your own research.\u2019 You would look at them like they had just licked the bar. It is the same energy as asking where the toilets are in a beer garden and hearing, \u2018Asked loads of times, mate.\u2019",
        "Or asking a mate where he got his haircut and he replies, \u2018This has been covered before. Please refer to previous pub discussions.\u2019 Nobody talks like that in real life because they would sound completely unhinged. That is what makes the Facebook versions so funny. Someone asks a normal question and instead of either answering it or ignoring it, people take time out of their day to be politely pointless.",
      ],
      images: [
        {
          src: img('img15_google_pub_reply'),
          caption: 'The local pub question answered by somebody thrilled to reveal that Google exists.',
          alt: 'A pub recommendation question met with a smug Google response.',
        },
        {
          src: img('img16_previous_pub_discussions'),
          caption: 'Please refer to earlier pub minutes before asking about the haircut again.',
          alt: 'A pub conversation absurdly redirected to previous pub discussions.',
        },
      ],
    },

    // Block 16: Section divider 04
    {
      type: 'divider',
      number: '04',
      label: 'Part Four',
      title: 'The funniest part is that they joined the group specifically designed for this exact thing.',
    },

    // Block 17: Editorial spread (fishing club / restaurant review)
    {
      type: 'editorial-spread',
      text: [
        "What makes it even funnier is that these people have joined a group specifically for local tips, recommendations and holiday info about Playa Blanca, then get annoyed when people ask for local tips, recommendations and holiday info about Playa Blanca.",
        "It is like joining a fishing club and losing your mind every time someone mentions a fish. Or joining a restaurant review group and replying to every post with, \u2018Cook at home.\u2019 \u2018Use the search feature\u2019 is basically the digital version of folding your arms, smirking, and offering directions while refusing to give any.",
      ],
      image: img('img19_fishing_club_restaurant_review'),
      image_caption: 'Join the club. Hate the subject. Repeat daily.',
      image_alt: 'A fishing club and restaurant review group reacting absurdly to their own topics.',
      narrow_gap: true,
    },

    // Block 18: Closing
    {
      type: 'closing',
      title: 'If you know the answer, answer the question. If you do not, keep scrolling.',
      text: [
        "If someone asks for a recommendation, just answer the question if you know. If not, keep scrolling. Nobody needs a customer service rejection letter from a bloke in a beer garden. Nobody needs to hear that your children rise at dawn to forage figs and translate folk songs. And nobody needs a smug announcement that Google exists, as if you have personally invented it and cannot wait to unveil it to the group like some stunning new piece of technology.",
        "That is the part that makes the least sense. Why use time and effort to reply with something of no help at all? If you do not want to answer, just say nothing. But no, some people seem to enjoy the little buzz of sounding clever while contributing absolutely nothing.",
      ],
      canary_note: "The Leaky Finders is Canary Detect\u2019s lighter side. Still investigative. Just aimed at leaks in online common sense rather than pool pipework.",
      image: img('img20_smuggest_family_on_tour_2026', 'full'),
      image_caption: 'The closing image. Smuggest Family on Tour 2026 prepares its acceptance speech.',
      image_alt: 'Smuggest Family on Tour 2026 satirical award illustration.',
    },
  ]
}

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body)
    const url = new URL(`${SUPABASE_URL}${path}`)
    const opts = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method,
      headers: {
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'apikey': SERVICE_KEY,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
        'Prefer': 'return=representation',
      }
    }
    const req = https.request(opts, res => {
      let b = ''
      res.on('data', d => b += d)
      res.on('end', () => resolve({ status: res.statusCode, body: b }))
    })
    req.on('error', reject)
    req.write(data)
    req.end()
  })
}

async function run() {
  // Delete any existing row with this slug
  console.log('Removing any existing article with this slug...')
  const del = await request('DELETE', `/rest/v1/articles?slug=eq.holiday-groups-species`, {})
  console.log(`Delete: ${del.status}`)

  // Insert
  console.log('Inserting article...')
  const res = await request('POST', '/rest/v1/articles', article)
  if (res.status === 201 || res.status === 200) {
    const data = JSON.parse(res.body)
    console.log(`✓ Article seeded! ID: ${Array.isArray(data) ? data[0]?.id : data?.id}`)
    console.log(`  Slug: ${article.slug}`)
    console.log(`  Blocks: ${article.content.length}`)
    console.log(`  Published: ${article.is_published}`)
    console.log(`  Featured: ${article.is_featured}`)
  } else {
    console.error(`✗ Failed (${res.status}): ${res.body}`)
    process.exit(1)
  }
}

run().catch(err => { console.error(err); process.exit(1) })
