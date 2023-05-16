import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
import { delelteReservation, getReservation, updateReservation } from 'controllers/reservation.controller'

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

    connect()

    switch(req.method) { 

        case "GET": {
            getReservation( req, res )
            // res.send("GET method in RESERVATION [id] route")
            break; 
        } 
        case "PUT": {
            updateReservation( req, res )
            // res.send("PUT method in RESERVATION [id] route")
            break; 
        }
        case "DELETE": {
            delelteReservation( req, res )
            // res.send("DELETE method in RESERVATION [id] route")
            break;
        }
        default: { 
            res.send("DEFAULT method in RESERVATION [id] route")
            break; 
        } 
    }
}