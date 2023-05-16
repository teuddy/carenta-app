import type { NextApiRequest, NextApiResponse } from 'next'
import { createReservation as createReservationService, deleteReservation } from '../services/reservation/reservation.service'
import { getReservation as getReservationRecord, updateReservation as updateReservationRecord } from '../services/reservation/reservation.service'
import { reservationSchema } from '../validations/reservation.validation';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';

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
export const getReservation = async (req: NextApiRequest, res: NextApiResponse) => {
    
    try {
        // Validate request data
        const reservationId = req.query.id
        console.log('reservationId: ', reservationId);
        // const { error } = reservationSchema.validate( reservationId )

        // if (error) {
        //     return (
        //         res.status(400).json({
        //             message: error.details[0].message
        //         })
        //     )
        // }
        // Retrive reservation from DB
        const { status, code, message, reservation } = await getReservationRecord ( reservationId )

        res.status( code ).send({ status, code, message, reservation })
    } catch (error) {
        console.log("error: ", error);
        return({error_getReservation: error})
    }
    
}

// PUT: api/reservation/[id] // endpoint to update reservation by id
export const updateReservation = async (req: NextApiRequest, res: NextApiResponse) => {
    // Validate request data
    const reservationId = req.query.id
    console.log("reservationId: ", reservationId);
    const reservationData = req.body
    console.log("reservationData: ", reservationData);
    // const { error } = paymentSchema.validate( paymentData )

    // if (error) {
    //     return (
    //         res.status(400).json({
    //             message: error.details[0].message
    //         })
    //     )
    // }
    // Send payment id to get record
    const {  status, code, message, reservation } = await updateReservationRecord ( reservationId, reservationData )
    // console.log("recordReservation: ", recordReservation);
    res.status(code).send({ status, code, message, reservation })
}

// DELETE: api/payment/[id] // endpoint to delete payment by id
export const delelteReservation = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const reservationId = req.query.id

        const { error } = reservationSchema.validate({ reservationId })

        if (error) {
            console.log("Error: ", error);
            return (
                res.status(400).json({
                    message: error.details[0].message
                })
            )
        }
        const { status, code, message, reservation } = await deleteReservation ( reservationId )

        res.status( code ).send({ status, code, message, reservation })

    } catch (error) {
        console.log( "delelteReservation_error: ", error );
        return { delelteReservation_error: error }
    }
}