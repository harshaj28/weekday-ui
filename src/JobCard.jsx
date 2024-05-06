import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Chip } from "@mui/material";

const BlurredContent = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
}));

const BlurredOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "50px", // adjust height as needed for the number of lines you want to blur
  backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
  zIndex: 1,
}));

export default function RecipeReviewCard({ job }) {
  const {
    jobRole,
    companyName,
    logoUrl,
    minJdSalary,
    maxJdSalary,
    jobDetailsFromCompany,
    jdLink,
    minExp,
    location
  } = job;

  const [showFullDescription, setShowFullDescription] = React.useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleClick = () => {
    window.location.href = jdLink;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: "15px", paddingTop: "5px" }}>
      <CardContent>
        <Chip label="⌛ Posted 10 days ago" variant="outlined" />
      </CardContent>
      <CardHeader
        avatar={<img style={{ width: "40px", height: "40px" }} src={logoUrl} />}
        title={capitalizeFirstLetter(jobRole)}
        subheader={<div><div>{`${companyName}`}</div><div style={{fontSize:"12px",color:"black"}}>{`${capitalizeFirstLetter(location)}`}</div></div>}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {`Estimated Salary : ₹${minJdSalary || 0} - ${maxJdSalary} LPA ✅`}
        </Typography>
      </CardContent>
      <CardContent style={{ marginBottom: "-20px", marginTop: "-18px" }}>
        <Typography variant="body2" color="text.primary">
          About Company:
        </Typography>
        <Typography
          style={{ fontWeight: "600", fontSize: "14px" }}
          color="text.primary"
        >
          About us
        </Typography>
      </CardContent>
      <BlurredContent>
        <CardContent
          style={{
            maxHeight: showFullDescription ? "none" : "150px",
            overflow: "hidden",
            position: "relative",
            marginTop: "-10px",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {showFullDescription
              ? jobDetailsFromCompany
              : jobDetailsFromCompany.slice(0, -3)}
          </Typography>
          {!showFullDescription && <BlurredOverlay />}
        </CardContent>
      </BlurredContent>
      <Button
        onClick={handleClick}
        style={{ marginLeft: "35%", color: "#413BD9", textTransform: "none" }}
      >
        View Job
      </Button>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`Minimum Experience`}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {`${minExp ? minExp : 0} Years`}
        </Typography>
      </CardContent>
      <CardContent>
        <Button
          style={{
            width: "100%",
            background: "#52EFC1",
            color: "black",
            textTransform: "none",
            marginBottom: "5px",
          }}
        >
          ⚡ Easy Apply
        </Button>
        <Button
          style={{
            width: "100%",
            background: "#4943DA",
            textTransform: "none",
            color: "white",
          }}
        >
          {" "}
          <Avatar
            sx={{
              bgcolor: "red[500]",
              height: "30px",
              width: "30px",
              marginRight: "5px",
            }}
            aria-label="recipe"
          >
            H
          </Avatar>{" "}
          <Avatar
            sx={{
              bgcolor: "red[500]",
              height: "30px",
              width: "30px",
              marginRight: "5px",
            }}
            aria-label="recipe"
          >
            P
          </Avatar>{" "}
          Unlock refferal asks
        </Button>
      </CardContent>
    </Card>
  );
}
