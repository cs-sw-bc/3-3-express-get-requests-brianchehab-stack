import express from "express";
import axios from "axios";
import cors from "cors";


const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());
const axios = require('axios');


app.get("/", (req, res) => {
  res.send("Welcome to the Users API!");
});

app.get("/users", (req, res) => {
    // For now, we're using hardcoded JSON data
   /// let randomUser = HARD_CODED_JSON.results[0];
   /// res.json(randomUser);
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
    
    // TODO: Replace the hardcoded JSON with a real API request to get a random user
    // For example, you might use the `axios` library to make a GET request to the API endpoint
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
