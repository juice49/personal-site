import { NextApiHandler } from 'next'
import { isValidRequest } from '@sanity/webhook'

type DocumentType = 'track' | 'jam'

interface WebhookBody {
  _type: DocumentType
  _id: string
}

type Strategy = (body: WebhookBody) => string[] | Promise<string[]>

const strategyMap: Record<DocumentType, Strategy> = {
  jam: () => ['/this-is-my-jam'],
  track: () => ['/this-is-my-jam'],
}

const revalidate: NextApiHandler = async (req, res) => {
  if (!isValidRequest(req, process.env.REVALIDATE_WEBHOOK_SECRET)) {
    return res.status(401).json({
      success: false,
      message: 'Invalid signature',
    })
  }

  const strategy: Strategy = strategyMap[req.body._type] ?? (() => [])

  try {
    const pathList = await strategy(req.body)
    await Promise.all(pathList.map(path => res.revalidate(path)))

    res.json({
      success: true,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error revalidating',
    })
  }
}

export default revalidate
