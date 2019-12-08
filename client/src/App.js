import React from "react";
import Container from "@material-ui/core/Container";
import "./App.css";
import Jobs from "./Jobs";

const jobs = [{ title: "SWE1", company: "Google" }];

const JOB_URL = "http://localhost:3001/jobs";
const fetchJobs = async updateCb => {
  const res = await fetch(JOB_URL);
  let jobs = await res.json();
  updateCb(jobs);
};

function App() {
  let [jobsList, updateJobs] = React.useState([]);
  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);
  return (
    <Container fixed>
      <Jobs jobs={jobsList} />
    </Container>
  );
}

export default App;
