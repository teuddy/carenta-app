import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
import { createReservation, getReservation } from '../../../../controllers/reservation.controller';

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

    connect();

    switch(req.method) {
        case "POST": {
            createReservation(req, res);
            // res.send("POST method in RESERVATION index ruote")
            break;
        }
        case "GET": {
            res.send("GET method in RESERVATION index ruote")
            break;
        }
        case "PUT": {
            res.send("PUT method in RESERVATION index ruote")
            break;
        }
        case "DELETE": {
            res.send("DELETE method in RESERVATION index ruote")
            break;
        }
        default: {
            res.send("DEFAULT in RESERVATION index ruote")
            break;
        }
    }
}