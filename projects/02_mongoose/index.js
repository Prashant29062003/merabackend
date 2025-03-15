const { Mongoose, default: mongoose } = require("mongoose")

// Connection
mongoose.connect("")

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }
})

const User = Mongoose.model("user", userSchema)