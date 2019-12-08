const express = require("express");
const { promisify } = require("util");
var redis = require("redis"),
  client = redis.createClient();

const getAsync = promisify(client.get).bind(client);

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/jobs", async (req, res) => {
  const jobs = await getAsync("github");
  return res.json(JSON.parse(jobs));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
