import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

//? hooks => react function which has specific tasks
//? example => useState, useEffect, useRef, useCallback, useMemo
//? third-party hooks => redux => useSelector,useDispatch
//? router => useNavigate

//* event
//* onCLick, onChange, onKeyPress,onSubmit,onScroll

const Counter = () => {
  const [count, setCount] = useState(0); //? array destructure, useState returns array [value,function_to_change_value]
  return (
    <Box>
      <Typography variant="h3">This is a counter app</Typography>
      <Typography variant="h4">Count:{count}</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          let newCount = count + 1;
          setCount(newCount);
        }}
      >
        Increase count
      </Button>
      <Button
        variant="contained"
        color="error"
        disableRipple
        onClick={() => {
          let newCount = count - 1;
          setCount(newCount);
        }}
      >
        Decrease Count
      </Button>
      <Button
        variant="contained"
        color="warning"
        disableRipple
        onClick={() => {
          setCount(0);
        }}
      >
        Reset Count
      </Button>
    </Box>
  );
};

export default Counter;
