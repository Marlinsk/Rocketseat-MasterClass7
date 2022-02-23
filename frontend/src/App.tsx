import React, { useEffect, useState } from "react";
import api from "./services/api";

import Animal from "./components/Animal";

interface IAnimal {
  name: string;
  specie: string;
}

function App() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    api.get<IAnimal[]>("/animals").then((response) => {
      setAnimals(response.data);
    });
  }, []);

  return (
    <div className="App">
      {animals.map((animals) => (
        <Animal key={animals.specie} animal={animals} />
      ))}
    </div>
  );
}

export default App;
