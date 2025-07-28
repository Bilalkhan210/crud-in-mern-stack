// const express = require("express");
import express from "express"

const app = express();

// const mongoose = require("mongoose");
// const contact = require("./models/contact.models");


import contactroute from"./routes/contacts.routes.js"

import { contactdb } from "./config/db.js"
 const PORT =process.env.PORT
contactdb()
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/",contactroute)
app.listen(3000, () => {
  console.log(`this is the server run 3000 ${PORT}`);
});
