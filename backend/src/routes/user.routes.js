
module.exports = app => {
    const users = require('../controllers/user.controller');
    const router = require('express').Router();

    router.post('/register', users.register);
    router.post('/login', users.login);
    router.post('/prompt',users.storePrompt);
    router.post('/promptHistory',users.getPromptHistory);
    router.post('/getUserName',users.getUserName);
    app.use('/api/users', router);
};
