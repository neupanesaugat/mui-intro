import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFullName } from "../../utils/utils";

const Person = () => {
  const [firstName, setFirstName] = useState("Siddhant");
  const [lastName, setLastName] = useState("Shrestha");

  let college = "KEC";
  return (
    <Box>
      <Typography variant="h3">
        Name:{getFullName(firstName, lastName)}
      </Typography>
      <Typography variant="h3" color="secondary">
        {college}
      </Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          //* auto-batching by react (changes both lastName and firstName at once)
          setFirstName("Saugat");
          setLastName("Neupane");
        }}
      >
        change data
      </Button>
    </Box>
  );
};

export default Person;
