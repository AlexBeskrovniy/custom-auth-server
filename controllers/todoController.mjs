import { User } from '../models/user.mjs';

export const createTodo = async (req, res) => {
    try {
        const user = req.user;
        //const newTodo = await user.todos.create({ ...req.body });
        user.todos.push(req.body);
        user.save();
        res.status(200).send({ message: "Success" });
    } catch (err) {
        console.error(err);
        res.status(400).send({ message: "Error" });
    }
}