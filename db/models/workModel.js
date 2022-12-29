const mongoose = require("mongoose");
const { Schema } = mongoose;

const workSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    usedTechnologies: {
        type: [String],
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: true,
    }
})

module.exports = {
    model: mongoose.model("work", workSchema),
    schema: workSchema,
}