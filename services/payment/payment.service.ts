import { connect } from "../../utils/dbConnection";
import { Payment } from "../../interfaces/Payment";
import PaymentModel from "../../models/paymentModel";

const payment = [];

// Register new payment in the DB
export const createPayment = async (newPaymentData: Payment ) => {
    // console.log("newPaymentData: ", newPaymentData);
    try {
        const newPayment = await PaymentModel.create(newPaymentData)
        // await newPayment.
        return newPayment
    } catch (error) {
        return error
    }
}

// Get payment record by id
export const getPayment = async ( paymentId: Payment ) => {
    
    // console.log("paymentId: ", paymentId);
    try {
        connect()
        
        const getPayment = PaymentModel.findById(paymentId)
        // return getPayment
        return (
            {
                "reservation_id": "reservation_id",
                "user_id": "user_id",
                "listing_id": "listing_id",
                "amount": 1000,
                "payment_date": "2023/04/27",
                "payment_method": "credit"
            }
        )
    } catch (error) {
        return error
    }
}

// Update payment record by id
export const updatePayment = async ( paymentDataToUpdate: Payment ) => {
    
    console.log("paymentDataToUpdate: ", paymentDataToUpdate);
    try {
        connect()
        const updatedPayment = PaymentModel.findByIdAndUpdate(paymentDataToUpdate)
        // await newPayment.save()
        return updatedPayment
    } catch (error) {
        return error
    }
}

// Delete registered payment by id
export const deletePayment = async ( paymentId: Payment ) => {
    
    console.log("paymentId: ", paymentId);
    try {
        connect()
        const deletedPayment = PaymentModel.findByIdAndDelete(paymentId)
        // await newPayment.save()
        return deletedPayment
    } catch (error) {
        return error
    }
}