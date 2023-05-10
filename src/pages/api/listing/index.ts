import type { NextApiRequest, NextApiResponse } from 'next'
import { create as CreateListingController } from '../../../../controllers/listing.controller'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
    ) {
        CreateListingController(req,res)
}