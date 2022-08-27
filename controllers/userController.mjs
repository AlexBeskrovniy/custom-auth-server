import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/user.mjs';
import { hashData, generateJWT } from './helpers.mjs';

export const registerUser = async (req, res) => {
    try {
        const { name, login, email, password } = req.body;
        const hashedPassword = await hashData(password);

        const user = await User.create({
            name,
            login,
            email,
            password: hashedPassword   
        });
        if(!user) {
            res.status(400).send({ message: "Error" });
        }
        res
            .status(201)
            .json({
                user: {
                    id: user._id,
                    name: user.name,
                    login: user.login,
                    email: user.email
                },
                token: generateJWT(user._id)
            });
    } catch (err) {
        console.error(err)
        res.status(400).send({ message: "Error" });
    }
}

export const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(user && (await bcrypt.compare(password, user.password))) {
            res.status(200).send({
                user: {
                    id: user._id,
                    name: user.name,
                    login: user.login,
                    email: user.email,
                    todos: user.todos
                },
                token: generateJWT(user._id)
            });
        } else {
            res.status(400).send({ message: "Invalid credentials" });
        }
    } catch(err) {
        console.error(err)
        res.status(400).send({ message: "Error" });
    }
}

export const checkAuth = async (req, res) => {
    console.log(req.user);
    res.status(200).json(req.user);
}
