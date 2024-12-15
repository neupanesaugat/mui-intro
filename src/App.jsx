import React from "react";
import Person from "./components/counter/Person";

const App = () => {
  return (
    <div style={{ display: "flex", marginBlockEnd: "2rem", flexWrap: "wrap" }}>
      <Person />
    </div>
  );
};

export default App;
