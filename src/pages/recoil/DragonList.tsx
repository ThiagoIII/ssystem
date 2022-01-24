import { useRecoilValue } from "recoil";
import { Dragon } from "../../components/Dragon";
import { dragonsListState } from "../../state-management/recoil/state";
import { DragonArray } from "../../types/dragonItem";

const DragonList = (): JSX.Element => {
  const dragonList: DragonArray = useRecoilValue(dragonsListState);

  return (
    <>
      {dragonList.map((dragon) => (
        <Dragon key={dragon.id} dragon={dragon} />
      ))}
      DragonList
    </>
  );
};

export default DragonList;
