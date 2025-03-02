const Vendor = require('../models/Vendor');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const secretKey = process.env.SECRET_KEY;

if (!secretKey) {
    throw new Error("SECRET_KEY is not defined. Make sure it is in your .env file and restart the server.");
}

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Token is required" });
        }

        const token = authHeader.split(" ")[1]; // Extract token
        const decoded = jwt.verify(token, secretKey); // Verify token


        const vendor = await Vendor.findById(decoded.vendorId);
        if (!vendor) {
            return res.status(404).json({ error: "Vendor not found" });
        }

        req.vendorId = vendor._id; // Attach vendor ID to request
        next(); // Continue to next middleware

    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(401).json({ error: "Invalid Token" });
    }
};

module.exports = verifyToken;
