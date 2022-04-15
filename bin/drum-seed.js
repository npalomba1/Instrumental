
const mongoose = require("mongoose");
const Drum = require("../models/drums.model");

let drums = [
    {
    image: "https://media.guitarcenter.com/is/image/MMGS7/L88699000001000-00-720x720.jpg",
    name: "Yamaha DTX8K Electronic Drum Kit with Mesh Heads Real Wood",
    brand: "Yamaha",
    price: "$2,799.99",
    isUsed: "no"
    },
    {
    image: "https://media.guitarcenter.com/is/image/MMGS7/L85826000000000-00-720x720.jpg",
    name: "Roland TD-17KVX V-Drums Electronic Drum Set With Simmons DA2110 Drum Set Monitor",
    brand: "Roland",
    price: "$2,149.99",
    isUsed: "no"
    },
    {
    image: "https://media.guitarcenter.com/is/image/MMGS7/L85482000000000-00-720x720.jpg",
    name: "Alesis Strike Pro SE Electronic Drum Set and Simmons DA2110 Drum Set Monitor",
    brand: "Alesis",
    price: "$2,824.99",
    isUsed: "no"
    },
    {
    image: "https://media.guitarcenter.com/is/image/MMGS7/000000117620072-00-720x720.jpg",
    name: "Used Roland TD20 Electric Drum Sets",
    brand: "Roland",
    price: "$2,429.99",
    isUsed: "yes"
    },
    {
    image: "https://media.guitarcenter.com/is/image/MMGS7/000000117538701-00-720x720.jpg",
    name: "Used Yamaha DTX 760K Electric Drum Set",
    brand: "Yamaha",
    price: "$2,999.99",
    isUsed: "yes"
    },
    
];

mongoose
    .connect("mongodb://localhost/instrumental")
    .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    )
    .catch((err) => console.error("Error connecting to mongo", err));

Drum.create(drums)
    .then(function (results) {
        console.log("Drums saved", results);
        mongoose.connection.close();
    })
    .catch(function (error) {
        console.log("Something went wrong", error.message);
        mongoose.connection.close();
    });
