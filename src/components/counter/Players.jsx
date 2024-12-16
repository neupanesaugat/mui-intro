import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const Players = () => {
  const [player, setPlayer] = useState([
    {
      id: 1,
      name: "Lionel Messi",
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
    },
    {
      id: 3,
      name: "Neymar Jr.",
    },
    {
      id: 4,
      name: "Robert Lewandhoski",
    },
    {
      id: 5,
      name: "Lamine Yamal",
    },
  ]);
  return (
    <Box>
      <Typography
        variant="h4"
        fontFamily={"serif"}
        color="#1e767d"
        gutterBottom
      >
        Players:
      </Typography>
      <Typography>
        {player.map((item, index, array) => {
          return (
            <Stack
              key={item.id}
              direction={"row"}
              gap={"2rem"}
              sx={{ margin: "1rem" }}
            >
              <Typography
                key={item.id}
                variant="h5"
                fontFamily={"monospace"}
                gutterBottom
              >
                {item.name}
              </Typography>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  const itemId = item.id;
                  const newArray = player.filter((item, index, array) => {
                    return item.id !== itemId;
                  });
                  setPlayer(newArray);
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

export default Players;
