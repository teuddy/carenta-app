import type { NextApiRequest, NextApiResponse } from 'next'
import { createReservation as createReservationService, deleteReservation } from '../services/reservation/reservation.service'
import { getReservation as getReservationRecord, updateReservation as updateReservationRecord } from '../services/reservation/reservation.service'
import { reservationSchema } from '../validations/reservation.validation';

// POST: api/reservation // endpoint to create a reservation
export const createReservation = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // console.log("req.body: ", req.body);
        // res.send(req.body)
        const newReservationData = req.body
        // Validate request data
        const { error } = reservationSchema.validate( newReservationData )
        if (error) {
            return (
                res.status(400).json({
                    message: error.details[0].message
                })
            )
        }

        // Create reservation in the DB
        const { status, code, message, reservation } = await createReservationService( newReservationData )

        res.status( code ).send({ status, code, message, reservation })

    } catch (error) {
        console.log("error: ", error);
        res.send({error_createReservation: error})
    }
    
}

// Get reservation record information
export const getReservation = (req: NextApiRequest, res: NextApiResponse) => {
    
    try {
        // Validate request data
        const reservationId = req.query.id
        console.log('reservationId: ', reservationId);
        const { error } = reservationSchema.validate( reservationId )

        if (error) {
            return (
                res.status(400).json({
                    message: error.details[0].message
                })
            )
        }
        // Retrive reservation from DB
        const recordReservation = getReservationRecord ( reservationId )

        console.log("recordReservation: ", recordReservation);

        res.status(200).send({ 
            status: "data of get Reservation is valid",
            data: recordReservation
        })
    } catch (error) {
        console.log("error: ", error);
        return({error_getReservation: error})
    }
    
}

// PUT: api/reservation // endpoint to update reservation by id
export const updateReservation = (req: NextApiRequest, res: NextApiResponse) => {
    
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
export const delelteReservation = (req: NextApiRequest, res: NextApiResponse) => {
    
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