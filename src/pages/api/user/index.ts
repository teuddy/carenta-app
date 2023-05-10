import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
// import { create as CreateListingController } from '../../../../controllers/listing.controller'

import { createUser, getUser } from '../../../../controllers/user.controller';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {

    connect();

    switch(req.method) {
        case "POST": {
            createUser(req, res);
            // res.send("POST method in USER index route")
            break;
        }
        case "GET": {
            // getUser(req,res);
            res.send("GET method in USER index route")
            break;
        }
        case "PUT": {
            res.send("PUT method in USER index route")
        }
        case "DELETE": {
            res.send("DELETE method in USER index route")
        }
        default: {
            res.send("DEFAULt in USER index route");
            break;
        }
    }
}