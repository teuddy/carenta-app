import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
import { deleteUser, getUser, updateUser } from '../../../../controllers/user.controller'

export default async function handler(
    req: NextApiRequest, res: NextApiResponse) {
    
    connect()

    switch(req.method) { 

        case "GET": {
            // console.log("req: ", req);
            getUser(req, res);
            // res.send("GET method in USER [id] route") 
            break; 
        } 
        case "PUT": {
            // console.log("user file - req.body: ", req.body);
            // updateUser(req, res)
            res.send("PUT method in USER [id] route") 
            break;
        }
        case "DELETE": {
            // deleteUser(req, res)
            res.send("DELETE method in USER [id] route")
            break;
        }
        default: { 
            res.send("DEFAULT method in USER [id] route"); 
            break; 
        } 
    }
}