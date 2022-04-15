
const mongoose = require("mongoose");
const Drum = require("../models/drums.model");

// const Keyboard = require('../models/keyboard.model');
const Guitar = require("../models/Guitar.models");


let guitars = [
    {
        image: 'https://sc1.musik-produktiv.com/pic-010089340xl/sigma-guitars-dm-st.jpg',
        name: 'Sigma Guitar DM-ST Acoustic',
        brand: 'Sigma',
        price: '$234.99',
        used: 'No',     
    },
    {
        image: '/images/guitar-images/lacy-stratocaster.png',
        name: 'Surf Pearl Fender Player Stratocaster Maple Fingerboard',
        brand: 'Fender',
        price: '$699.99',
        used: 'No',     
    },
    {
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTbXYvcyd6i1qoUCd3kpjaL3OkuGDSEfc4stAGn5s1F5yYzE4feOhMrMs4xGxgXS-kqQG_NKTlZK-RiyRIjO9JshqhokszY38aBQ8hffUJtITzXoBLsIv10&usqp=CAE',
        name: 'Epiphone SG Special I',
        brand: 'Epiphone',
        price: '$179.99',
        used: 'Yes',     
    },
    {
        image: '/images/guitar-images/mitchell-md-100-dreadnought.jpg',
        name: 'Mitchell MD100 Dreadnought',
        brand: 'Mitchell',
        price: '$99.00',
        used: 'Yes',     
    },
    {
        image: '/images/guitar-images/jazzmaster.jpg',
        name: 'Fender Squier J Mascis Jazzmaster',
        brand: 'Fender',
        price: '$499.99',
        used: 'No',     
    },
    {
        image: '/images/guitar-images/monterey.jpg',
        name: 'Fender Jimi Hendrix Monterey Stratocaster',
        brand: 'Fender',
        price: '$2,295.00',
        used: 'Yes',     
    },


// let keyboard = [
//     {
//     image: "https://www.samash.com/media/catalog/product/c/c/ccts200xxx-p_6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200",
//     name: 'Casio CT-S200',
//     brand: "Casio",
//     price: 129.99,
//     new: "yes",
//     used: "no",
//     },
//     {
//     image: "/public/stylesheets/images/keyboard images/yamaha psr sx900.webp",
//     name: 'Yamaha PSR SX-900',
//     brand: "Yamaha",
//     price: 2249.99,
//     new: "yes",
//     used: "no",
//     },
//     {
//     image: "/public/stylesheets/images/keyboard images/yamaha psr e360.webp",
//     name: 'Yamaha PSR-E360',
//     brand: "Yamaha",
//     price: 199.99,
//     new: "yes",
//     used: "no",
//     },
//     {
//     image: "/public/stylesheets/images/keyboard images/benjamin adams dk6200x.webp",
//     name: 'Benjamin Adams DK6200',
//     brand: "Benjamin Adams",
//     price: 89.99,
//     new: "yes",
//     used: "no",
//     },
//     {
//     image: "/public/stylesheets/images/keyboard images/korg pa700xxx.webp",
//     name: 'Korg PA700',
//     brand: "Korg",
//     price: 1699.99,
//     new: "yes",
//     used: "no",
//     },
// ];

mongoose
    .connect("mongodb://localhost/instrumental")
    .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    )
    .catch((err) => console.error("Error connecting to mongo", err));

// Drum.create(drums)
//     .then(function (results) {
//         console.log("Users saved", results);
//         mongoose.connection.close();
//     })
//     .catch(function (error) {
//         console.log("Something went wrong", error.message);
//         mongoose.connection.close();
//     });
// Keyboard.create(keyboard)
//     .then(function (results) {
//         console.log("Keyboard saved", results);
//         mongoose.connection.close();
//     })
//     .catch(function (error) {
//         console.log("Something went wrong", error.message);
//         mongoose.connection.close();
//     });







let keyboard = [
    {
    name: 'Casio',
    brand: "casio keyboard",
    price: 129.99,
    new: "yes",
    used: "no",
    }
]


mongoose
    .connect("mongodb://localhost/instrumental")
    .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    )
    .catch((err) => console.error("Error connecting to mongo", err));

Guitar.create(guitars)
    .then(function(results){
        console.log("Look at the guitars!", results);
        mongoose.connection.close();
    })
    .catch(function(error){
        console.log("Something went wrong", error.message);
        mongoose.connection.close(); 
    }); 

// Drum.create(drums)
//     .then(function (results) {
//         console.log("Users saved", results);
//         mongoose.connection.close();
//     })
//     .catch(function (error) {
//         console.log("Something went wrong", error.message);
//         mongoose.connection.close();
//     });
