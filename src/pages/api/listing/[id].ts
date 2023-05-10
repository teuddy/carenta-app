import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
import { deleteListing, getListing, updateListing } from '../../../../controllers/listing.controller'

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

    connect()

    switch(req.method) { 
        case "GET": { 
            getListing(req, res)
            // res.send("GET method in LISTING [id] route")
            break; 
        } 
        case "PUT": {
            updateListing(req, res)
            // res.send("PUT method in LISTING [id] route")
            break;
        }
        case "DELETE": {
            deleteListing(req, res)
            // res.send("DELETE method in LISTING [id] route")
            break;
        }
        default: { 
            res.send("DEFAULT method in LISTING [id] route")
            break; 
        } 
    }
}