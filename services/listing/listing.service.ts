import { SearchListing } from "../../interfaces/SearchListing";
import ListingModel, { Listing } from "../../models/listingModel";


// Register new listing in the DB
export const createListingService = async ( newListingData: Listing ) => {
    console.log( "newListingData: ", newListingData );
    try{
        // Check if the listing is already registerd in the DB to reject the register process
        const registeredListing = await ListingModel.findOne({ vin: newListingData.vin})

        if(registeredListing) {
            return {
                status: "Registration process failed",
                code: 400,
                message: "Listing has been registered"
            }
        }

        // Create listing in the DB
        const newListing = await ListingModel.create( newListingData )
        // Save listing in the DB
        await newListing.save()

        return {
            status: "Successful LISTING registration",
            code: 200,
            listing: newListing
        }

    } catch (error) {
        console.log("error: ", error);
        return (error)
    }
}

export  const  searchListingAvailable = async ( query: SearchListing ) => {

    try {
        // The minimun data for a query is evaluated, without this data the request is rejected
        if ( query.type === undefined || query.location === undefined || query.minPrice === undefined ||  query.maxPrice === undefined || query.startDate === undefined ||  query.endDate === undefined ) {
            return {
                status: "Query Error",
                code: 400,
                message: "There is no enough data selected in the query"
            }
        }

        const{ type, location, price_per_day, minPrice, maxPrice, startDate, endDate } = query
        // Getting the list of available vehicles to display to the user
        const resultListing = await ListingModel.find({
            type: type,
            location: location,
            price_per_day: { $lte: maxPrice, $gte: minPrice },
        }, {
            type: 1,
            location: 1,
            price_per_day: 1,
        });

        // Response when no options available
        if(resultListing.length === 0) {
            return{
                status: "Query completed successfully",
                code: 200,
                message: "No options available for selected options"
            }
        }
        console.log("resultListing: ", resultListing);
        // Response with available vehicles
        return {
            status: "OK",
            code: 200,
            message: "Query completed successfully",
            available_listing: resultListing
        }

    } catch (error) {
        console.log("error: ", error);
        return({error: error})
    }
}

// Getting "listing" by id
export const getListingService = async ( id: string | string[] | undefined ) => {

    try {
        if(id === undefined) {
            return ({
                status: "Query process failed",
                code: 400,
                message: "It is not possible to complete the request with the information provided"
            })
        }

        const listing = await ListingModel.findById(id) 
        return({
            status: "OK",
            code: 200,
            message: "Query completed successfully",
            listing: listing
        })

    } catch (error) {
        console.log("error: ", error);
        return({ error: error})
    }
}


export const updateListingService = async (id: string | string[] , body: Listing) => {
    
    try{
        // Check if the id corresponds to a registered vehicle
        // const listingData = await get
        // console.log("body: ", body);
        // console.log("object body: ", Object.entries(body).length === 0 );

        if(id === undefined || Object.entries(body).length === 0) {
            return ({
                status: "Query process failed",
                code: 400,
                message: "It is not possible to complete the request with the information provided"
            })
        }
        
        const listing = await ListingModel.findByIdAndUpdate(id , body, {new: true});

        return ({
            status: "Process completed successfully",
            code: 200,
            message: "The 'listing' record has been updated",
            listing: listing
        })

    }catch (error){
        console.log("error: ", error);
        return({error: error})
    }
}

export const deleteListingService = async (id: string | string[] ) => {
    try {

        if(id === undefined) {
            return ({
                status: "Process failed",
                code: 400,
                message: "It is not possible to complete the request with the information provided"
            })
        }

        const deletedListing = await ListingModel.findByIdAndDelete( id );
        if ( deletedListing === null ) {
            return ({
                status: "Process failed",
                code: 400,
                message: "It is not possible to complete the request with the information provided"
            })
        } else {
            return {
                status: "OK",
                code: 200,
                message: "The 'listing' record has been deleted",
                listing: deletedListing
            }
        }

    } catch (error) {
        console.log("error", error);
        return({error: error})
    }
}


