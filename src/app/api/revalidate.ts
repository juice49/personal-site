import { NextApiHandler, NextApiRequest } from 'next'
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
  if (typeof process.env.REVALIDATE_WEBHOOK_SECRET === 'undefined') {
    return res.status(500).json({
      success: false,
      message: 'Secret missing',
    })
  }

  if (!isValidRequest(req, process.env.REVALIDATE_WEBHOOK_SECRET)) {
    return res.status(401).json({
      success: false,
      message: 'Invalid signature',
    })
  }

  if (!isRevalidationRequest(req)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid request',
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

function isRevalidationRequest(request: NextApiRequest): request is Omit<
  NextApiRequest,
  'body'
> & {
  body: {
    _type: DocumentType
    _id: string
  }
} {
  return (
    ['track', 'jam'].includes(request.body._type) &&
    typeof request.body._id === 'string'
  )
}
