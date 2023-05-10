import Joi from "joi";

export const reservationSchema = Joi.object({
    user_id: Joi.string().required(),
    listing_id: Joi.string().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    total_price: Joi.number().required(),
    status: Joi.string().required(),
    created_at: Joi.date().required(),
    updated_at: Joi.date().required(),
})