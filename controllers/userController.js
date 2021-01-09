const User = require('../models/user');


const user_loging_post = (req, res) => {

    const user = User.find(u => u.email === email)
        .then(result => {
            if (user) {
                res.send(result);
            } else {
                res.status(400).json({ message: "this user doesn't exist" })
            }
        })
        .catch(err => {
            res.status(500).send(err)
            console.log(err);
        });

}

const user_signup_post = (req, res) => {
    const user = User.find(u => u.email === email)
        .then(result => {
            if (user) {
                res.status(400).json({ message: "this user already exist !" });
            } else {
                const Nuser = new User(req.body);
                Nuser.save()
                    .then(result => {
                        res.send(result)
                    })
                    .catch(err => {
                        res.status(500).send(err)
                        console.log(err);
                    });
            }
        })
        .catch(err => {
            res.status(500).send(err)
            console.log(err);
        });
}

module.exports = {
    user_loging_post,
    user_signup_post
}