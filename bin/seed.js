
// const mongoose = require("mongoose");
// const Drum = require("../models/drums.model");
// const Keyboard = require('../models/keyboard.models');

// let drums = [
//     {
//     image: "https://media.guitarcenter.com/is/image/MMGS7/L88699000001000-00-720x720.jpg",
//     name: "Yamaha DTX8K Electronic Drum Kit with Mesh Heads Real Wood",
//     brand: "Yamaha",
//     price: "$2,799.99",
//     isUsed: "no"
//     },

// ];

// let keyboard = [
//     {
//     name: 'Casio',
//     brand: "casio keyboard",
//     price: 129.99,
//     new: "yes",
//     used: "no",
//     }
// ]

// mongoose
//     .connect("mongodb://localhost/instrumental")
//     .then((x) =>
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//     )
//     .catch((err) => console.error("Error connecting to mongo", err));

// Drum.create(drums)
//     .then(function (results) {
//         console.log("Drums saved", results);
//         mongoose.connection.close();
//     })
//     .catch(function (error) {
//         console.log("Something went wrong", error.message);
//         mongoose.connection.close();
//     });
