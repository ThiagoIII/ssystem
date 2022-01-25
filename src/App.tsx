import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Dragon } from "./components/Dragon";
import ContextLogin from "./pages/contextAPI/ContextLogin";
import Dashboard from "./pages/Dashboard";
import DragonBirth from "./pages/recoil/DragonBirth";
import DragonList from "./pages/recoil/DragonList";
import RecoilLogin from "./pages/recoil/RecoilLogin";
import { loginStatus } from "./state-management/recoil/state";

function App(): JSX.Element {
  const loggedIn = useRecoilValue(loginStatus);
  console.log("loggedin", loggedIn);
  window.sessionStorage.setItem(
    "userinfo",
    JSON.stringify({ username: "Finarfin", securekey: "lotr" })
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="context" element={<ContextLogin />} />
        <Route path="recoil" element={<RecoilLogin />} />
        {loggedIn && (
          <>
            <Route path="dragonList" element={<DragonList />} />
            <Route path="dragonBirth" element={<DragonBirth />} />
            <Route path="dragon/:dragonName" element={<Dragon />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
