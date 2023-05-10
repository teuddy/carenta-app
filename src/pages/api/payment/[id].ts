import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse ) {
    
    const paymentId = req.query.id
    
    connect()

    switch(req.method) { 

        case "GET": { 
            res.send(`GET method - get payment id: ${paymentId}`) 
            break; 
        } 
        case "PUT": {
            res.send(`PUT method - update payment id: ${paymentId}`) 
        }
        case "DELETE": {
            res.send(`DELETE method - delete payment id: ${paymentId}`) 
        }
        default: { 
            res.send("hola"); 
            break; 
        } 
    }
}