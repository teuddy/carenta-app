import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
// import { create as CreateListingController } from '../../../../controllers/listing.controller'
import { createPayment } from '../../../../controllers/payment.controller'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {

    connect();

    switch(req.method) {
        case "POST": {
            createPayment(req,res);
            break;
        }
        case "GET": {
            res.send("GET")
            break;
        }
        case "PUT": {
            res.send("PUT")
        }
        case "DELETE": {
            res.send("DELETE")
        }
        default: {
            res.send("hola");
            break;
        }
    }
}