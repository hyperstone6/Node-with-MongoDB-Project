const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
// const sequelize = require("./util/database");
// const Product = require("./models/product");
// const User = require("./models/user");

const mongoConnect = require('./util/database')

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//     User.findByPk(1)
//     .then(user => {
//         req.user = user
//         next()
//     })
//     .catch(err => console.log(err))
// })

app.use("/admin", adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

const PORT = process.env.PORT;

// Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
// User.hasMany(Product);

// sequelize
//   .sync()
//   .then((result) => {
//     User.findByPk(1);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({ name: "Adrian", email: "lol@lol.lol" });
//     }
//     return Promise.resolve(user);
//   })
//   .then(user => {
//     // console.log(user)
//     app.listen(PORT || 3200);
//   })
//   .catch((err) => console.log(err));

mongoConnect((client) => {
  console.log(client)
  app.listen(PORT || 3200)
})