import type { NextApiRequest, NextApiResponse } from 'next'
import { createReservation as createReservationService, deleteReservation } from '../services/reservation/reservation.service'
import { getReservation as getReservationRecord, updateReservation as updateReservationRecord } from '../services/reservation/reservation.service'
import { reservationSchema } from '../validations/reservation.validation';

// POST: api/reservation // endpoint to create a reservation
const createReservation = async (req: NextApiRequest, res: NextApiResponse) => {
    // Validate request data
    // console.log("req.body: ",req.body);
    res.send(req.body)
    const newReservationData = req.body
    const { error } = reservationSchema.validate( newReservationData )
    if (error) {
        return (
            res.status(400).json({
                message: error.details[0].message
            })
        )
    }
    // Sending validated data to be processed the payment
    const newReservation = await createReservationService( newReservationData )
    console.log("newReservation: ", newReservation);
    res.status(200).send({ 
        status: "data of createReservation is valid",
        data: newReservation
    })
}

const getReservation = (req: NextApiRequest, res: NextApiResponse) => {
    
    // Validate request data
    const reservationId = req.body.id
    // const { error } = paymentSchema.validate( paymentData )

    // if (error) {
    //     return (
    //         res.status(400).json({
    //             message: error.details[0].message
    //         })
    //     )
    // }
    // Send payment id to get record
    const recordReservation = getReservationRecord ( reservationId )
    console.log("recordReservation: ", recordReservation);
    res.status(200).send({ 
        status: "data of get Reservation is valid",
        data: recordReservation
    })
}

// PUT: api/reservation // endpoint to update reservation by id
const updateReservation = (req: NextApiRequest, res: NextApiResponse) => {
    
    // Validate request data
    const reservationDataToUpdate = req.body
    // console.log("reservationDataToUpdate: ", reservationDataToUpdate);
    // const { error } = paymentSchema.validate( paymentData )

    // if (error) {
    //     return (
    //         res.status(400).json({
    //             message: error.details[0].message
    //         })
    //     )
    // }
    // Send payment id to get record
    const recordReservation = updateReservationRecord ( reservationDataToUpdate )
    // console.log("recordReservation: ", recordReservation);
    res.status(200).send({ 
        status: "Reservation data to update is valid",
        data: recordReservation
    })
}

// DELETE: api/payment // endpoint to delete payment by id
const delelteReservation = (req: NextApiRequest, res: NextApiResponse) => {
    
    const reservationId = req.body.id
    // const { error } = paymentSchema.validate( paymentData )

    // if (error) {
    //     return (
    //         res.status(400).json({
    //             message: error.details[0].message
    //         })
    //     )
    // }
    const recordReservation = deleteReservation ( reservationId )
    // console.log("newPayment: ", newPayment);
    res.status(200).send({ 
        status: "data of delete Reservation is valid",
        data: recordReservation
    })
}

export {
    createReservation,
    getReservation,
    updateReservation,
    delelteReservation
}