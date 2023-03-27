const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8080;
const userRoutes = require("./routes/record");
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(userRoutes);
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
    else {
      console.error("DB Conected");
    }
  });
  console.log(`Server is running on port: ${port}`, "ssss");
});
