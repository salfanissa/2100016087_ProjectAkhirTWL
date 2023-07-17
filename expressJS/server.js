const express = require("express");
const mongoose = require("mongoose");
const menuroute = require("./router/menuroute");
const userroute = require("./router/userroute");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = 3569;

// Replace <password> with your actual password
const uri = "mongodb+srv://salfanissa2100016087:salfanissa@cluster0.p7yab1q.mongodb.net/?retryWrites=true&w=majority";

app.use("/menu", menuroute);
app.use("/api", userroute);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
