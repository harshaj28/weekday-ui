import React from 'react';
import JobCard from './JobCard';
import { Grid } from '@mui/material';

const JobList = ({ jobs }) => {
  return (
    <Grid spacing={2} style={{display:"flex",alignItems:"center",justifyContent:"center"}} container>
      {jobs.map((job) => (
        <Grid item>
            <JobCard key={job.jdUid} job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;
