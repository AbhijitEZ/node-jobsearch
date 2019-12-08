import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CustomModal from "./CustomModal";
export default function Job({ job }) {
  let [open, setOpen] = React.useState(false);
  let [selectedJob, setJob] = React.useState({});
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
    setJob(job);
  };
  return (
    <>
      <Paper className={"job-single"} onClick={handleClick}>
        <Box className={"job-content-section"}>
          <Typography variant="h4" component="h2">
            {job.company}
          </Typography>
          <Typography variant="h5" component="h3">
            {job.title}
          </Typography>
        </Box>
        <Box className={"job-location"}>
          <div>{job.location}</div>
        </Box>
      </Paper>
      <CustomModal
        open={open}
        data={selectedJob}
        handleCloseParent={handleClose}
      />
    </>
  );
}
