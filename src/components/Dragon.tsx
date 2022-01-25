import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { dragonsListState } from "../state-management/recoil/state";
import type { DragonArray } from "../types/dragonItem";

const Dragon = (): JSX.Element => {
  let params = useParams();
  const dragonList: DragonArray = useRecoilValue(dragonsListState);

  const dragonNow = dragonList.find(
    (dragon) => dragon.name === params.dragonName
  );

  return (
    <>
      <ul>
        <li>{dragonNow?.createdAt}</li>
        <li>{dragonNow?.name}</li>
        <li>{dragonNow?.type}</li>
      </ul>
    </>
  );
};

export { Dragon };
