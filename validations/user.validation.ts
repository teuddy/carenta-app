import Joi from 'joi'

export const userSchema = Joi.object({
    // user_id: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone_number: Joi.string().required(),
    address: Joi.string().required(),
    avatar_url: Joi.string(),
    is_verified: Joi.boolean().required(),
    // token: Joi.string(),
    // verification_token: Joi.string(),
    // reset_password_token: Joi.string(),
});

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    // token: Joi.string(),
    // verification_token: Joi.string(),
    // reset_password_token: Joi.string(),
});

export const idUserSchema = Joi.object({
    _id: Joi.string().required(),
    // password: Joi.string().required(),
    // token: Joi.string(),
    // verification_token: Joi.string(),
    // reset_password_token: Joi.string(),
});