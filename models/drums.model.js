const { Schema, model } = require("mongoose");

const drumSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
    },
    price: {
        type: String,
    },
    isUsed: {
        type: String,
        enum: ["yes", "no"],
    }
});

const Drum = model("Drum", drumSchema);

module.exports = Drum;