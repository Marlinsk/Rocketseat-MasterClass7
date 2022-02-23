import React from "react";

interface IAnimal {
  name: string;
  specie: string;
}

interface Props {
  animal: IAnimal;
}

const Animal: React.FunctionComponent<Props> = ({ animal }) => {
  return (
    <div>
      <strong>Nome:</strong> {animal.name} <br />
      <strong>Espécie:</strong> {animal.specie} <br />
      <br />
    </div>
  );
};

export default Animal;
