const express = require("express");
const mongoose  = require("mongoose");
const { ejs } = require("ejs");
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

mongoose.connect(process.env.MONGO_URI);

const restroomSchema = new mongoose.Schema({
  rating: Number,
  lat: Number,
  lng: Number,
  review: String,
});

const Restroom = mongoose.model('Restroom', restroomSchema);

app.get('/', (req, res) => {
    Restroom.find({}, function(err, restrooms) {
      res.render('index', {
          restList: restrooms
      });

    })
})

app.listen(4000, function() {
    console.log("Server is running");
})