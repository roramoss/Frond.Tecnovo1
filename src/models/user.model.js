import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenth: [3, 'El nombre debe contener al menos 3 caracteres'],
    },
    lastname: {
        type: String,
        required: true,
        minlenth: [3, 'el apellido debe contener al menos 3 caracteres']
    },
    email: {
        type: String,
    required: true,
lowercase: true,
unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});


 export const User = mongoose.model ('User', userSchema);
