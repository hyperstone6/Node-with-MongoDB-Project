// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("node-complete", "root", "Adrian@86", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://palebluedot85:Pj5MYWCmOAvQWyIN@cluster0.chkqgdx.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected")
      callback(client)
    })
    .catch((err) => console.log(err));
};


module.exports = mongoConnect