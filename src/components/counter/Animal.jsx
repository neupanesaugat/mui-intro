import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Animal = () => {
  const [text, setText] = useState("random text");
  const [text2, setText2] = useState("second text");
  return (
    <Box>
      <Box>
        <Typography variant="h3">{text}</Typography>
        <TextField
          label="Type anything..."
          color="success"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></TextField>
      </Box>
      <Box>
        <Typography variant="h3" color="secondary" fontFamily={"fantasy"}>
          {text2}
        </Typography>
        <TextField
          label="Type something"
          color="info"
          onChange={(e) => {
            setText2(e.target.value);
          }}
        ></TextField>
      </Box>
    </Box>
  );
};

export default Animal;
