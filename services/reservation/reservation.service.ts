import { Reservation } from './../../models/reservationModel';
import { connect } from "../../utils/dbConnection";
// import { Reservation } from "../../interfaces/Reservation";
import PaymentModel from "../../models/paymentModel";
import ReservationModel from "../../models/reservationModel";
// const payment = [];
const reservation = [];

// Register new reservation in the DB
export const createReservation = async (newReservationData: Reservation ) => {
    // console.log("newReservationData: ", newReservationData);
    try {
        const newReservation = await PaymentModel.create(newReservationData)
        // await newReservation.
        return newReservation
    } catch (error) {
        return error
    }
}

// Get reservation record by id
export const getReservation = async ( reservationId: Reservation ) => {
    
    // console.log("reservationId: ", reservationId);
    try {
        connect()
        
        const getReservation = ReservationModel.findById(reservationId)
        // return getReservation
        return (
            {
                "user_id":  "_id-6446c4c2521bd181f752ee20",
                "listing_id": "asdf6446c4c2521bd181f752ee20",
                "start_date": "2023/04/29",
                "end_date": "2023/05/15",
                "total_price": 1235,
                "status": "pending",
                "created_at": "2023/04/01",
                "updated_at": "2023/04/29"
            }
        )
    } catch (error) {
        return error
    }
}

// Update reservation record by id
export const updateReservation = async ( reservationDataToUpdate: Reservation ) => {
    
    console.log("paymentDataToUpdate: ", reservationDataToUpdate);
    try {
        connect()
        const updatedReservation = ReservationModel.findByIdAndUpdate(reservationDataToUpdate)
        return updatedReservation
    } catch (error) {
        return error
    }
}

export const deleteReservation = async ( reservationId: Reservation ) => {
    
    console.log("reservationId: ", reservationId);
    try {
        connect()
        const deletedReservation = ReservationModel.findByIdAndDelete(reservationId)
        return deletedReservation
    } catch (error) {
        return error
    }
}