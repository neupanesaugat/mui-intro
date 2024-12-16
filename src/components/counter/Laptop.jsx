import { Directions } from "@mui/icons-material";
import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Laptop = () => {
  const [laptop, setLaptop] = useState({
    name: "Dell Inspiron 15",
    price: 50000,
  });
  return (
    <Box>
      <Typography
        variant="h3"
        fontFamily={"fantasy"}
        gutterBottom
        color="#45909d"
      >
        Laptop: {laptop.name}
      </Typography>
      <Typography
        variant="h3"
        fontFamily={"fantasy"}
        gutterBottom
        color="#8e9a44"
      >
        Price: {laptop.price}
      </Typography>

      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <TextField
          label="Name"
          color="secondary"
          onChange={(e) => {
            const name = e.target.value;
            setLaptop({ ...laptop, name: name });
          }}
        ></TextField>
        <TextField
          label="Price"
          color="secondary"
          onChange={(e) => {
            const price = e.target.value;
            setLaptop({ ...laptop, price: price });
          }}
        ></TextField>
      </Box>
    </Box>
  );
};

export default Laptop;
