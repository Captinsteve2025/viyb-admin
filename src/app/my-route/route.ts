import { getPayload } from 'payload'
import config from '@payload-config'

export const GET = async (_request: Request) => {
  const _payload = await getPayload({ config })

  return Response.json({ message: 'Hello from custom route!' })
}
