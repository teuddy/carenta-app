import { searchListing, updateListing } from './../../../../controllers/listing.controller';
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../../utils/dbConnection'
import { createListing } from '../../../../controllers/listing.controller'

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

	connect();

	switch(req.method) {
		case "POST": {
			createListing( req, res );
			// res.send("POST method in LISTING index route")
			break;
		}
		case "GET": {
			searchListing( req, res )
			// res.send("GET method in LISTING index route")
			break;
		}
		// case "PUT": {
		// 	// updateListing( req, res )
		// 	res.send("PUT method in LISTING index route")
		// 	break;
		// }
		// case "DELETE": {
		// 	// res.send("DELETE method in LISTING index route")
		// 	break;
		// }
		default: {
			res.send("DEFAULT in LISTING index route");
			break;
		}
	}
}