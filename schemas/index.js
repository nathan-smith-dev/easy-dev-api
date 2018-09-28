const Joi = require('joi');

const userSchema = {
    uid: Joi.string().required().length(28),
    email: Joi.string().required(),
    name: Joi.string().required(),
};

module.exports = {
    userSchema,
};
