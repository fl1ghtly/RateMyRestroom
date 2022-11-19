const express = require("express");
const mongoose  = require("mongoose");
const { ejs } = require("ejs");
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGO_URI);

const testSchema = new mongoose.Schema({
  name: String,
  hasRings: Boolean
});

const Test = mongoose.model('Planet', testSchema);

app.get('/', (req, res) => {
    Test.find({}, function(err, tests) {
      res.render('index', {
          testList: tests
      });

    })
})

app.listen(4000, function() {
    console.log("Server is running");
})
/*
async function getData(db, collection) {
  const client = new MongoClient(process.env.MONGO_URI);
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db(db);
    const coll = db.collection(collection);
    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
*/
//getData("owlhacks2022", "restroom").catch(console.dir);