const { urlencoded } = require("express");
const mongoose = require("mongoose");
const Keyboard = require('../models/keyboard.model');


let keyboard = [
    {
    image: "https://www.samash.com/media/catalog/product/c/c/ccts200xxx-p_6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200",
    name: 'Casio CT-S200',
    brand: "Casio",
    price: 129.99,
    new: "yes",
    used: "no",
    },
    {
    image: "https://www.samash.com/media/catalog/product/y/p/ypsrsx900-p.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200",
    name: 'Yamaha PSR SX-900',
    brand: "Yamaha",
    price: 2249.99,
    new: "yes",
    used: "no",
    },
    {
    image: "https://www.samash.com/media/catalog/product/y/p/ypsr360xxx-p_5.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200",
    name: 'Yamaha PSR-E360',
    brand: "Yamaha",
    price: 199.99,
    new: "yes",
    used: "no",
    },
    {
    image: "https://www.samash.com/media/catalog/product/b/a/badk6200x-p.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200",
    name: 'Benjamin Adams DK6200',
    brand: "Benjamin Adams",
    price: 89.99,
    new: "yes",
    used: "no",
    },
    {
    image: "https://www.samash.com/media/catalog/product/k/p/kpa700xxx-p.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200",
    name: 'Korg PA700',
    brand: "Korg",
    price: 1699.99,
    new: "yes",
    used: "no",
    },
];


mongoose
    .connect("mongodb://localhost/instrumental")
    .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    )
    .catch((err) => console.error("Error connecting to mongo", err));

Keyboard.create(keyboard)
    .then(function (results) {
        console.log("Keyboard saved", results);
        mongoose.connection.close();
    })
    .catch(function (error) {
        console.log("Something went wrong", error.message);
        mongoose.connection.close();
    });