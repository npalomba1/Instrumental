
const mongoose = require("mongoose");
const Drum = require("../models/drums.model");
const Guitar = require("../models/Guitar.models");
const Keyboard = require('../models/keyboard.models');

// let drums = [
//     {
//       name: "Bob",
//       age: 32,
//       isStudent: false,
//     },
   
// ];

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

]



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
