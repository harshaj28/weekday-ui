import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import DropDown from "./DropDown";
import { Grid } from "@mui/material";
import InfiniteScroll from "./InfiniteScroll";

const Filters = ({ responseArray, setJobs , filterArray }) => {
  const uniqueTechStacks = [
    ...new Set(responseArray.map((job) => job.jobRole.toLowerCase())),
  ];
  const uniqueCompanies = [
    ...new Set(responseArray.map((job) => job.companyName.toLowerCase())),
  ];
  const uniqueLocations = [
    ...new Set(responseArray.map((job) => job.location.toLowerCase())),
  ];
  const uniqueRoles = [
    ...new Set(responseArray.map((job) => job.jobRole.toLowerCase())),
  ];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const defaultTechStack = ["Tech Stack"];
  const defaultCompany = ["Company"];
  const defaultLocation = ["Location"];

  const dropdownOptions = {
    techStack: [
      ...defaultTechStack,
      ...uniqueTechStacks.map((option) => capitalizeFirstLetter(option)),
    ],
    company: [
      ...defaultCompany,
      ...uniqueCompanies.map((option) => capitalizeFirstLetter(option)),
    ],
    location: [
      ...defaultLocation,
      ...uniqueLocations.map((option) => capitalizeFirstLetter(option)),
    ],
    // Can Add more dropdown options for other filters if needed
  };



  const [valTechStack, setValTechStack] = useState(0);
  const [valCompany, setValCompany] = useState(0);
  const [valLocation, setValLocation] = useState(0);

  const filterResponse = () => {
    const filteredResponse = responseArray.filter((job) => {
      return (
        (valTechStack === 0 ||
          job.jobRole.toLowerCase() ===
            dropdownOptions.techStack[valTechStack].toLowerCase()) &&
        (valCompany === 0 ||
          job.companyName.toLowerCase() ===
            dropdownOptions.company[valCompany].toLowerCase()) &&
        (valLocation === 0 ||
          job.location.toLowerCase() ===
            dropdownOptions.location[valLocation].toLowerCase())
      );
    });
    setJobs(filteredResponse);
  };

  const handleChangeTechStack = (event) => {
    setValTechStack(event.target.value);
    // filterResponse();
  };

  const handleChangeCompany = (event) => {
    setValCompany(event.target.value);
    // filterResponse();
  };

  const handleChangeLocation = (event) => {
    setValLocation(event.target.value);
    // filterResponse();
  };

  useEffect(() => {
    filterResponse();
  }, [valTechStack,valCompany,valLocation])
  

  return (
    <div>
        <Grid
      style={{ display: "flex", justifyContent: "center", padding: "15px" }}
      spacing={2}
      container
    >
      <Grid item>
        <DropDown
          value={valTechStack}
          handleChange={handleChangeTechStack}
          items={dropdownOptions.techStack.map((value, index) => ({
            key: value,
            value: index,
          }))}
        />
      </Grid>

      <Grid item>
        <DropDown
          value={valCompany}
          handleChange={handleChangeCompany}
          items={dropdownOptions.company.map((value, index) => ({
            key: value,
            value: index,
          }))}
        />
      </Grid>

      <Grid item>
        <DropDown
          value={valLocation}
          handleChange={handleChangeLocation}
          items={dropdownOptions.location.map((value, index) => ({
            key: value,
            value: index,
          }))}
        />
      </Grid>

      {/* <Grid item>
        <DropDown
          value={valRole}
          handleChange={handleChangeRole}
          items={dropdownOptions.role.map((value, index) => ({
            key: value,
            value: index,
          }))}
        />
      </Grid> */}
    </Grid>

<InfiniteScroll jobs={filterArray} />
    </div>
  );
};

export default Filters;
