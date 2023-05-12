import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
import { createReservation } from '../../../../controllers/reservation.controller';

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

    connect();

    switch(req.method) {
        case "POST": {
            createReservation(req, res);
            // res.send("POST method in RESERVATION index ruote")
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