const { Schema, model } = require("mongoose");

const keyboardSchema = new Schema({
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
      new: {
        type: String,
      },
      used: {
        type: String,
      },
    },
    {
      timeseries: true,
      timestamps: true,
    });

const Keyboard = model("Keyboard", keyboardSchema);

module.exports = Keyboard;