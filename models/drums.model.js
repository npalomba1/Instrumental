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
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

const Drum = model("Drums", drumSchema);

module.exports = Drum;