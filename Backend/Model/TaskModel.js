const mongoose = require("mongoose")
const { Schema } = mongoose;

// Define the schema for a user.

const TaskSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
},
    { timestamps: true }
);
module.exports = mongoose.model("Task", TaskSchema);