import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: "String",
        required: [true, "Please Enter name"],
    },
    email: {
        type: "String",
        required: [true, "Please enter email"],
        unique: true
    }
});
export const User = mongoose.model("User", schema);