const router = require('express').Router();
const Joi = require('joi');
const { userSchema } = require('../schemas');
const db = require('../services/db');
const verifyTokenMiddleware = require('../middlewares/verifyTokenMiddleware');

router.get('/', verifyTokenMiddleware, async (req, res) => {
    const users = await db.getUsers();
    return res.status(200).send(users);
});

router.post('/', verifyTokenMiddleware, async (req, res) => {
    const result = Joi.validate(res.user, userSchema, { stripUnknown: true });
    if (result.error) return res.status(400).send('Bad user data.');

    const { uid, name, email } = result.value;
    const splitName = name.split(' ');
    try {
        const existingUser = await db.getUser(uid);
        if (existingUser) return res.status(200).send(null);

        const user = await db.createUser(uid, email, splitName[0], splitName[1]);
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send('Error adding user to database.');
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await db.getUser(id);
    if (user) {
        return res.status(200).send(user);
    }

    return res.status(200).send(undefined);
});

module.exports = router;
