import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse ) {
    
    const reservationId = req.query.id
    
    connect()

    switch(req.method) { 

        case "GET": { 
            res.send(`GET method - get reservation id: ${reservationId}`) 
            break; 
        } 
        case "PUT": {
            res.send(`PUT method - update reservation id: ${reservationId}`) 
        }
        case "DELETE": {
            res.send(`DELETE method - delete reservation id: ${reservationId}`) 
        }
        default: { 
            res.send("hola reservations"); 
            break; 
        } 
    }
}