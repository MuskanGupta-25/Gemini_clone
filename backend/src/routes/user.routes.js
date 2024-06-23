const { verifyToken } = require('../middleware/auth.middleware');

module.exports = app => {
    const users = require('../controllers/user.controller');
    const router = require('express').Router();

    router.post('/register', users.register);
    router.post('/login', users.login);
    router.post('/prompt', verifyToken, users.storePrompt);

    app.use('/api/users', router);
};
