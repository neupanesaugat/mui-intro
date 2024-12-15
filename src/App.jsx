import React from "react";
import Person from "./components/counter/Person";
import Animal from "./components/counter/animal";

const App = () => {
  return (
    <div style={{ display: "flex", marginBlockEnd: "2rem", flexWrap: "wrap" }}>
      <Animal />
    </div>
  );
};

export default App;
