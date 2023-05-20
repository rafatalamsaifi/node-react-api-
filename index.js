const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const port = 8000;

app.use(cors());

app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = response.data;
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/users/posts", async (req, res) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      req.body
    );
    const newUsers = response.data;
    res.json(newUsers);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
