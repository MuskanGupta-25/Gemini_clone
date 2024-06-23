
module.exports = app => {
    const users = require('../controllers/user.controller');
    const router = require('express').Router();

    router.post('/register', users.register);
    router.post('/login', users.login);
    router.post('/prompt',users.storePrompt);

    app.use('/api/users', router);
};
