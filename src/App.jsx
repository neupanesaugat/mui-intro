import React from "react";
import Players from "./components/counter/Players";

const App = () => {
  return (
    <div style={{ display: "flex", marginBlockEnd: "2rem", flexWrap: "wrap" }}>
      <Players />
    </div>
  );
};

export default App;
