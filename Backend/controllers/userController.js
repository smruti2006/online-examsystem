import bcrypt from "bcrypt"
import User from "../models/User.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
//signup logic

export const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        //check if the user is already exists
        const isExist = await User.findOne({ email })
        if (isExist) {
            return res.status(400).json({ message: "User is already exists" })
        }
        //password hashing
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email,
            password: hashPassword,
            role
        })
        //return the profile
        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "email is not find sign up first" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password" });
        }

        // create token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // response
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};