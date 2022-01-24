import React from "react";
import type { DragonItem } from "../types/dragonItem";

const Dragon = ({
  dragon: { createdAt, name, type },
}: DragonItem): JSX.Element => {
  return (
    <>
      <ul>
        <li>{createdAt}</li>
        <li>{name}</li>
        <li>{type}</li>
      </ul>
    </>
  );
};

export { Dragon };
