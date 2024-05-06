import logo from './logo.svg';
import './App.css';
import Filters from './Filters';
import { useEffect, useState } from 'react';
import InfiniteScroll from './InfiniteScroll';
import DropDown from './DropDown';

function App() {
  const [filters, setFilters] = useState({});
  const [jobs, setJobs] = useState([]);
  const [filteredJobs,setFilteredJobs ] = useState(jobs);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchJobs();
    }
  };

  const fetchJobs = () => {
    // Implement API call to fetch more jobs with applied filters
    setIsLoading(true);
    fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filters })
    })
      .then((response) => response.json())
      .then((data) => {
        if(jobs.length <= 0){
          setJobs([...jobs, ...data.jdList]);
          setFilteredJobs([...jobs, ...data.jdList])
        }
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching jobs:', error));
  };

  return (
    <div>
      <Filters setJobs={setFilteredJobs} responseArray={jobs} filterArray={filteredJobs} />
    </div>
  );
}

export default App;
