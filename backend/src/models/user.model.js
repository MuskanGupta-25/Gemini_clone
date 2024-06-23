const db = require('../config/db.config');

const User = function(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
};

User.create = (newUser, result) => {
    db.query('INSERT INTO users SET ?', newUser, (err, res) => {
        if (err) {
            console.error('Error:', err);
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findByEmail = (email, result) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, res) => {
        if (err) {
            console.error('Error:', err);
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

module.exports = User;
