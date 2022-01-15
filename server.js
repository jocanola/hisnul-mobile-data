const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const duaRoute = require("./router/postdua");

const app = express();
//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
dotenv.config();

//listening to the port
app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("start the backend");
});
//Connect to mongodb
mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database connected");
  }
);

app.get("/", (req, res) => {
  res.status(200).send("Hello world make global beast come through");
});

app.use("/api", duaRoute);
