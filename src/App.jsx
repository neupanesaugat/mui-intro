import React from "react";
import Person from "./components/counter/Person";
import Animal from "./components/counter/animal";
import Student from "./components/counter/Student";
import Actors from "./components/counter/Actors";

const App = () => {
  return (
    <div style={{ display: "flex", marginBlockEnd: "2rem", flexWrap: "wrap" }}>
      <Actors />
    </div>
  );
};

export default App;
