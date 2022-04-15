const mongoose = require("mongoose");
const Drum = require("../models/drums.model");

let drums = [
    {
      name: "Bob",
      age: 32,
      isStudent: false,
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
        console.log("Users saved", results);
        mongoose.connection.close();
    })
    .catch(function (error) {
        console.log("Something went wrong", error.message);
        mongoose.connection.close();
    });