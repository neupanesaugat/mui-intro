import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const Actors = () => {
  const [actors, setActors] = useState([
    {
      id: 1,
      name: "Rajesh Hamal",
    },
    {
      id: 2,
      name: "Nikhil Upreti",
    },
    {
      id: 3,
      name: "Biraj Bhatta",
    },
  ]);
  return (
    <Box>
      <Typography variant="h3" gutterBottom fontFamily={"cursive"}>
        Actors List:
      </Typography>
      <Typography>
        {actors.map((item, index, array) => {
          return (
            <Stack
              key={item.id}
              direction={"row"}
              gap={"2rem"}
              sx={{ margin: "2rem" }}
            >
              <Typography variant="h4" key={item.id} gutterBottom>
                {item.name}
              </Typography>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  const itemId = item.id;
                  const newArray = actors.filter((item, index, filter) => {
                    return item.id !== itemId; //? Only actors allowed whose id is not equal to item's id(clicked id)
                  });
                  setActors(newArray);
                }}
              >
                Delete
              </Button>
            </Stack>
          );
        })}
      </Typography>
    </Box>
  );
};

export default Actors;
