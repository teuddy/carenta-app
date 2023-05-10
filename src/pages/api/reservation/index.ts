import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
// import { create as CreateListingController } from '../../../../controllers/listing.controller'
import { createReservation } from '../../../../controllers/reservation.controller';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {

    connect();

    switch(req.method) {
        case "POST": {
            createReservation(req,res);
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