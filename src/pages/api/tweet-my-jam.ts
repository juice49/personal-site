import { NextApiHandler } from 'next'
import { isValidRequest } from '@sanity/webhook'
import { TwitterApi } from 'twitter-api-v2'
import { PSDB } from 'planetscale-node'

const IDEMPOTENCY_DOCS_URL = 'https://www.sanity.io/docs/webhooks#3e9b7dac38b7'
const JAM_BASE_URL = 'https://ash.gd/this-is-my-jam'

const twitter = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
}).readWrite.v2

interface WebhookBody {
  _id: string
  track: {
    name: string
    artists: {
      name: string
    }[]
  }
}

const idempotencyErrorHeader: [name: string, value: string] = [
  'Link',
  `<${IDEMPOTENCY_DOCS_URL}>; rel="describedby"; type="text/html"`,
]

const db = new PSDB('main')

const tweetMyJam: NextApiHandler = async (req, res) => {
  const idempotencyKey = [].concat(req.headers['idempotency-key'])[0]

  if (req.method !== 'POST') {
    res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })

    return
  }

  if (!idempotencyKey) {
    res
      .status(400)
      .setHeader(...idempotencyErrorHeader)
      .end()

    return
  }

  if (!isValidRequest(req, process.env.TWEET_MY_JAM_WEBHOOK_SECRET)) {
    res.status(401).json({
      success: false,
      message: 'Invalid signature',
    })

    return
  }

  if (webhookReceiptExists(idempotencyKey)) {
    res
      .status(422)
      .setHeader(...idempotencyErrorHeader)
      .end()

    return
  }

  try {
    await twitter.tweet(getText(req.body))
  } catch {
    res.status(500).json({
      success: false,
    })

    return
  }

  await createWebhookReceipt(idempotencyKey)

  res.json({
    success: true,
  })
}

export default tweetMyJam

async function webhookReceiptExists(idempotencyKey: string): Promise<boolean> {
  const [webhookReceipts] = await db.query(
    'SELECT * FROM `webhook_receipts` WHERE `key` = ? LIMIT 1',
    [idempotencyKey],
  )

  return webhookReceipts.length !== 0
}

function createWebhookReceipt(idempotencyKey: string) {
  return db.query('INSERT INTO `webhook_receipts` (`key`) VALUES (?)', [
    idempotencyKey,
  ])
}

function getText({ _id, track }: WebhookBody): string {
  const artists = track.artists.map(({ name }) => name).join(', ')
  const url = [JAM_BASE_URL, _id].join('/')
  return `${artists} - ${track.name} #ThisIsMyJam ${url}`
}
