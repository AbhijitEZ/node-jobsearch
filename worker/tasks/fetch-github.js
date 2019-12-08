var fetch = require("node-fetch");
var redis = require("redis"),
  client = redis.createClient();
const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

require("dotenv").config();

module.exports = async function fetchGithub() {
  try {
    let resultCount = 1,
      pageNo = 1;
    let allJobs = [];

    // fetch jobs
    while (resultCount > 0) {
      let res = await fetch(`${process.env.BASEURL}&page=${pageNo}`);
      let jobs = await res.json();
      allJobs.push(...jobs);
      resultCount = jobs.length;
      console.log("jobs ", resultCount);
      pageNo++;
    }

    // algo
    const seniorJobs = allJobs.filter(job => {
      let jobTitle = job.title.toLowerCase();
      let snStatus =
        jobTitle.includes("senior") || jobTitle.includes("fullstack")
          ? true
          : false;
      return snStatus;
    });

    console.log(seniorJobs.length, " senior all jobs");

    const success = await setAsync("github", JSON.stringify(seniorJobs));
    console.log(success);
  } catch (e) {
    console.log(e, "Catch Error");
  }
};
