import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },

    todo: {
        type: String,
        required: true
    }
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    login: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    todos: [TodoSchema]
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema, 'users');