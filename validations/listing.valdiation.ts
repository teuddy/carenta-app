import Joi from 'joi'

export const listingSchema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    image_urls: Joi.array().items(Joi.string()),
    price_per_day: Joi.number().required(),
    is_available: Joi.boolean().required(),
  });

  