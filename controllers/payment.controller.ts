import type { NextApiRequest, NextApiResponse } from 'next'
import { paymentSchema } from '../validations/payment.validation'
import { createPayment as createPaymentService, deletePayment, updatePayment as updatePaymentRecord } from '../services/payment/payment.service'
import { getPayment as getPaymentRecord } from '../services/payment/payment.service'

// POST: api/payment // endpoint to create a payment
const createPayment = async (req: NextApiRequest, res: NextApiResponse) => {
    // Validate request data
    const newPaymentData = req.body
    const { error } = paymentSchema.validate( newPaymentData )
    if (error) {
        return (
            res.status(400).json({
                message: error.details[0].message
            })
        )
    }
    // Sending validated data to be processed the payment
    const newPayment = await createPaymentService( newPaymentData )
    console.log("newPayment: ", newPayment);
    res.status(200).send({ 
        status: "data of createPayment is valid",
        data: newPayment
    })
}

// GET: api/payment // endpoint to get payment by id
const getPayment = (req: NextApiRequest, res: NextApiResponse) => {
    
    // Validate request data
    const paymentId = req.body.id
    // const { error } = paymentSchema.validate( paymentData )

    // if (error) {
    //     return (
    //         res.status(400).json({
    //             message: error.details[0].message
    //         })
    //     )
    // }
    // Send payment id to get record
    const recordPayment = getPaymentRecord ( paymentId )
    console.log("recordPayment: ", recordPayment);
    res.status(200).send({ 
        status: "data of get Payment is valid",
        data: recordPayment
    })
}

// PUT: api/payment // endpoint to update payment by id
const updatePayment = (req: NextApiRequest, res: NextApiResponse) => {
    
    // Validate request data
    const paymentDataToUpdate = req.body
    // console.log("paymentDataToUpdate: ", paymentDataToUpdate);
    // const { error } = paymentSchema.validate( paymentData )

    // if (error) {
    //     return (
    //         res.status(400).json({
    //             message: error.details[0].message
    //         })
    //     )
    // }
    // Send payment id to get record
    const recordPayment = updatePaymentRecord ( paymentDataToUpdate )
    // console.log("newPayment: ", newPayment);
    res.status(200).send({ 
        status: "Payment data to update is valid",
        data: recordPayment
    })
}

// DELETE: api/payment // endpoint to delete payment by id
const deleltePayment = (req: NextApiRequest, res: NextApiResponse) => {
    
    // Validate request data
    const paymentId = req.body.id
    // const { error } = paymentSchema.validate( paymentData )

    // if (error) {
    //     return (
    //         res.status(400).json({
    //             message: error.details[0].message
    //         })
    //     )
    // }
    // Send payment id to get record
    const recordPayment = deletePayment ( paymentId )
    // console.log("newPayment: ", newPayment);
    res.status(200).send({ 
        status: "data of get Payment is valid",
        data: recordPayment
    })
}

export {
    createPayment,
    getPayment,
    updatePayment,
    deleltePayment
}