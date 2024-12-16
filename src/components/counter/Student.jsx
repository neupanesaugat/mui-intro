import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Student = () => {
  const [student, updateStudent] = useState({
    name: "Suyasha",
    age: 15,
  });
  return (
    <Box>
      <Typography variant="h2">Name: {student.name}</Typography>
      <Typography variant="h2" gutterBottom>
        Age: {student.age}
      </Typography>
      <TextField
        label="Name"
        onChange={(e) => {
          const name = e.target.value;
          updateStudent({ ...student, name: name });
        }}
      ></TextField>
      <TextField
        label="Age"
        onChange={(e) => {
          const age = e.target.value;
          updateStudent({ ...student, age: age });
        }}
      ></TextField>
    </Box>
  );
};

export default Student;
