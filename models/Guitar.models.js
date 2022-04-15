const { Schema, model } = require("mongoose"); 

const guitarSchema = new Schema({
    image: {
        type: String,
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
        required: true,
    },
    used: {
        type: String,
        enum: ["Yes", "No"],
    }
}); 

const Guitar = model("Guitar", guitarSchema); 

module.exports = Guitar; 