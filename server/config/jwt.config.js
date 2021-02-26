const jwt = require("jsonwebtoken");

// this file is used as middleware to authenticate a user
// before we pass the request on to the controller, we will authenticate the request
module.exports = {
    authenticate(req, res, next) {
        // jwt will verify that we are authorized to view this route
        jwt.verify(
            // token passed from client to us- it is their "proof" of being authenticated
            res.cookies.usertoken,
            // this is the key you want to use for validation- anything we want
            process.env.JWT_SECRET,
            // we can store information in the payload if we want
            (err, payload) => {
                if (err) {
                    res.status(401).json({ verified: false });
                } else {
                    next();
                }
            }
        );
    }
}