import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../../utils/dbConnection'
import { deleteUser, getUser, loginUser, updateUser } from '../../../../../controllers/user.controller';

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

    connect();

    switch(req.method) {
        case "GET": {
            // getUser(req,res);
            res.send("GET method in AUTH index ruote")
            break;
        }
        case "PUT": {
            updateUser(req, res)
            // res.send("PUT method in AUTH index ruote")
            break;
        }
        case "DELETE": {
            deleteUser(req, res)
            // res.send("DELETE method in AUTH index ruote")
            break;
        }
        default: {
            res.send("DEFAULT in AUTH index ruote");
            break;
        }
    }
}