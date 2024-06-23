const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db.config');
const runChat = require("../utils/helper")
exports.register = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || 'Some error occurred while creating the User.' });
            return;
        }
        res.send(data);
    });
};

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send({ message: 'Email and password are required!' });
        return;
    }

    User.findByEmail(req.body.email, async (err, user) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({ message: 'User not found.' });
                return;
            }
            res.status(500).send({ message: err.message || 'Error retrieving user.' });
            return;
        }

        const passwordValid = await bcrypt.compare(req.body.password, user.password);

        if (!passwordValid) {
            res.status(401).send({ message: 'Invalid password!' });
            return;
        }

        const token = jwt.sign({ id: user.id }, 'your-secret-key', { expiresIn: '1h' });

        res.send({
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token
        });
    });
};

exports.storePrompt = async (req, res) => {
    // const userId = req.userId; // assuming this is set by auth middleware
    const {prompt} = req.body;
    if (!prompt) {
        res.status(400).send({ message: 'Prompt are required!' });
        return;
    }
    console.log("in here");
    const promptResponse = await runChat(prompt);
    const query = 'INSERT INTO user_history (userId, prompt, response) VALUES (?, ?, ?)';
    db.query(query, [0, prompt, promptResponse], (err, result) => {
        if (err) {
            res.status(500).send({ message: err.message || 'Error storing prompt and response.' });
            return;
        }
        res.send({ id: result.insertId, userId:'0', prompt, promptResponse });
    });
};
