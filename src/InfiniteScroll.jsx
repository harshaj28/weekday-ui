import React, { useEffect, useState } from 'react';
import JobList from './JobList';

const InfiniteScroll = ({ jobs , filters }) => {
  // const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <JobList jobs={jobs} />
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
