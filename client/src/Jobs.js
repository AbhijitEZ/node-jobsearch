import React from "react";
import Typography from "@material-ui/core/Typography";
import Job from "./Job";
const Jobs = ({ jobs }) => (
  <div className="jobs">
    <Typography variant="h2" component="h1" className={"main-title"}>
      Senior level jobs
    </Typography>
    {jobs.map((job, index) => (
      <Job key={index} job={job} />
    ))}
  </div>
);

export default Jobs;
