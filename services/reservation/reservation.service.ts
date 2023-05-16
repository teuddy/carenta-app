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

    try {
        const getReservation = await ReservationModel.findById(reservationId)
        return {
            status: "OK",
            code: 200,
            message: "Successful Request",
            reservation: getReservation
        }

    } catch (error) {
        console.log("getReservation error: ", error);
        return ({ getReservation_error: error })
    }
}

// Update reservation record by id
export const updateReservation = async ( reservationId: Reservation, reservationData: Reservation ) => {
    
    console.log("reservationId: ", reservationId);
    try {
        const updatedReservation = await ReservationModel.findByIdAndUpdate(reservationId, reservationData)

        return {
            status: "OK",
            code: 200,
            message: "Successful Request",
            reservation: updatedReservation
        }
    } catch (error) {
        return error
    }
}

export const deleteReservation = async ( reservationId: Reservation ) => {
    
    console.log("reservationId: ", reservationId);
    try {
        const deletedReservation = await ReservationModel.findByIdAndDelete(reservationId)
        console.log("deletedReservation: ", deletedReservation);
        return {
            status: "OK",
            code: 200,
            message: "Successful Request",
            reservation: deletedReservation
        }

    } catch (error) {
        console.log("deleteReservation error: ", error);
        return {
            deleteReservation_error: error
        }
    }
}