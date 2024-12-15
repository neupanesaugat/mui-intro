import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { getAnimalName } from "../../utils/utils";

const Animal = () => {
  const [animalName, setAnimalName] = useState("Lion");
  const [animalType, setAnimalType] = useState("wild");

  return (
    <Box>
      <Typography
        variant="h3"
        color="#64dcb0"
        fontFamily={"serif"}
        marginBottom={"2rem"}
      >
        {getAnimalName(animalName, animalType)}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setAnimalName("Lion");
          setAnimalType("wild");
        }}
      >
        Lion
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          setAnimalName("Dog");
          setAnimalType("domestic");
        }}
      >
        Dog
      </Button>
      <Button
        variant="contained"
        color="inherit"
        onClick={() => {
          setAnimalName("Tiger");
          setAnimalType("wild");
        }}
      >
        Tiger
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setAnimalName("Cat");
          setAnimalType("domestic");
        }}
      >
        Cat
      </Button>
    </Box>
  );
};

export default Animal;
