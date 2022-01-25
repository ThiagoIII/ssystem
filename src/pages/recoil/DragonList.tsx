import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  dragonsListState,
  loginStatus,
} from "../../state-management/recoil/state";
import { DragonArray } from "../../types/dragonItem";
import DragonItem from "./DragonItem";

const DragonList = (): JSX.Element => {
  const dragonList: DragonArray = useRecoilValue(dragonsListState);
  const [isLoggedIn, setLoginStatus] = useRecoilState(loginStatus);
  let navigate = useNavigate();

  let dragonListCopySorted = [...dragonList].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const logOut = () => {
    if (!isLoggedIn) return "Already logged out. ";
    const changeLoginStatus = () => setLoginStatus(false);
    changeLoginStatus();
    navigate("/");
  };

  return (
    <>
      {dragonListCopySorted.map((dragon) => (
        <Link key={dragon.id} to={`/dragon/${dragon.name}`}>
          <DragonItem name={dragon.name} />
        </Link>
      ))}
      DragonList
      <button type="button" onClick={logOut}>
        Log out
      </button>
    </>
  );
};

export default DragonList;

function setLoginStatus(arg0: boolean) {
  throw new Error("Function not implemented.");
}
