import Joi from 'joi'

export const paymentSchema = Joi.object({
    reservation_id: Joi.string().required(),
    user_id: Joi.string().required(),
    listing_id: Joi.string().required(),
    amount: Joi.number().required(),
    payment_date: Joi.date().required(),
    payment_method: Joi.string().required(),
    payment_active: Joi.string().required()
})