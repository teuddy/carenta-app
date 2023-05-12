import { Reservation } from './../../models/reservationModel';
import PaymentModel from "../../models/paymentModel";
import ReservationModel from "../../models/reservationModel";

// Create new reservation in the DB
export const createReservation = async (newReservationData: Reservation ) => {

    try {
        // Create reservation
        const newReservation = await ReservationModel.create( newReservationData )
        // Save reservation
        await newReservation.save()

        return {
            status: "OK",
            code: 200,
            message: "Reservation created successfully",
            reservation: newReservation
        }
    } catch (error) {
        console.log("error: ", error);
        return ({error_createReservation: error})
    }
}

// Get reservation by id
export const getReservation = async ( reservationId: Reservation ) => {
    
    // console.log("reservationId: ", reservationId);
    try {
        const getReservation = ReservationModel.findById(reservationId)
        console.log("getReservation: ", getReservation);
        return getReservation
        // return (
        //     {
        //         "user_id":  "_id-6446c4c2521bd181f752ee20",
        //         "listing_id": "asdf6446c4c2521bd181f752ee20",
        //         "start_date": "2023/04/29",
        //         "end_date": "2023/05/15",
        //         "total_price": 1235,
        //         "status": "pending",
        //         "created_at": "2023/04/01",
        //         "updated_at": "2023/04/29"
        //     }
        // )
    } catch (error) {
        return error
    }
}

// Update reservation record by id
export const updateReservation = async ( reservationDataToUpdate: Reservation ) => {
    
    console.log("paymentDataToUpdate: ", reservationDataToUpdate);
    try {
        const updatedReservation = ReservationModel.findByIdAndUpdate(reservationDataToUpdate)
        return updatedReservation
    } catch (error) {
        return error
    }
}

export const deleteReservation = async ( reservationId: Reservation ) => {
    
    console.log("reservationId: ", reservationId);
    try {
        const deletedReservation = ReservationModel.findByIdAndDelete(reservationId)
        return deletedReservation
    } catch (error) {
        return error
    }
}