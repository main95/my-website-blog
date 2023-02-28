// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // res.status(200).json({ name: 'John Doe' })
  try {
    // Get prisma to petch the post
    const data = await prisma.post.findMany()
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error)
  }
}
