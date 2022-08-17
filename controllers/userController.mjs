import { User } from '../models/user.mjs';

export const registerUser = async (req, res) => {
    try {
        const user = new User({...req.body});
        await user.save();
        res
            .status(201)
            .json({...user._doc});
    } catch (err) {
        console.error(err)
        res.status(400).end();
    }
}

export const loginUser = (req, res) => {
    res.json({ message: "login" });
}

