const { MongoClient } = require("mongodb");
require('dotenv').config()


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

export { getData };

//getData("owlhacks2022", "restroom").catch(console.dir);