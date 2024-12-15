import { Box, Typography } from "@mui/material";
import React from "react";

const CustomTypography = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        color="error"
        gutterBottom
        sx={{ fontSize: 150 }}
      >
        Header 1
      </Typography>
      <Typography variant="h2">Header 2</Typography>
      <Typography variant="h3">Header 3</Typography>
      <Typography variant="h4">Header 4</Typography>
      <Typography variant="h5">Header 5</Typography>
      <Typography variant="h6">Header 6</Typography>
      <Typography>Paragraph</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
    </Box>
  );
};

export default CustomTypography;