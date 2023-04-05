const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

require('dotenv').config();

const SelectRoutes = require("./routes/selectRoute");
const InsertRoutes = require("./routes/insertRoute");
const UpdateRoutes = require("./routes/updateRoute");
const DeleteRoutes = require("./routes/deleteRoute");

app.use("/api/friends", SelectRoutes);
app.use("/api/friends", InsertRoutes);
app.use("/api/friends", UpdateRoutes);
app.use("/api/friends", DeleteRoutes);

app.listen(process.env.PORT);