const express = require("express");
const app = express();
app.use(express.json());
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/").get(async function (req, res) {
  let db_connect = await dbo.getDb("userinfo");
  db_connect
    .collection("userdata")
    .find({})
    .toArray()
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});
recordRoutes.route("/record").get(async function (req, res) {
  let db_connect = await dbo.getDb("userinfo");
  db_connect
    .collection("userdata")
    .find({})
    .toArray()
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

// // This section will help you get a single record by id
// recordRoutes.route("/record/:id").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect.collection("records").findOne(myquery, function (err, result) {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// // This section will help you create a new record.

recordRoutes.route("/record/adding").post(async function (req, response) {
  let db_connect = await dbo.getDb();
  original_id = new ObjectId();
  let myobj = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    bookingid: req.body.bookingid,
    locationid: req.body.locationid,
    droneshotid: req.body.droneshotid,
  };
  await db_connect.collection("userdata").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});
recordRoutes.route("/update/:id").post(async function (req, response) {
  let db_connect = await dbo.getDb();
  console.log(typeof req.params.id);
  let myquery = { _id: new ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      bookingid: req.body.bookingid,
      locationid: req.body.locationid,
      droneshotid: req.body.droneshotid,
    },
  };
  db_connect
    .collection("userdata")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// // This section will help you delete a record
recordRoutes.route("/:id").delete(async function (req, response) {
  let db_connect = await dbo.getDb();
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect.collection("userdata").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
