const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: async function (callback) {
    console.log("test");

    try {
      await client.connect();
    } catch (e) {
      console.error(e);
    }

    _db = client.db("userinfo");

    try {
      var count = await _db.collection("userdata").countDocuments();
      console.log(count, 22);
    } catch (e) {
      console.error(e, 3);
    }

    if (_db !== undefined) {
      console.error(3);
      return true;
    }
  },
  getDb: function () {
    return _db;
  },
};
// const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// var _db;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(async function (err, db) {
//       // Verify we got a good "db" object

//       if (db) {
//         try {
//           _db = await db.db("userinfo");
//           console.log("Successfully connected to MongoDB.");
//         } catch {
//           console.log("Spry");
//         }
//       } else {
//         console.log("Spvvvry");
//       }
//       return callback(err);
//     });
//   },

//   getDb: function () {
//     return _db;
//   },
// };
