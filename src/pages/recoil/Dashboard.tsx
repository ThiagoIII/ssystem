import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar";
import DragonBirth from "./DragonBirth";
import DragonLair from "./DragonLair";
import DragonList from "./DragonList";

const Dashboard = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<DragonList />} />
          <Route path="dragonBirth" element={<DragonBirth />} />
          <Route path="goOnAtYourOwnPeril" element={<DragonLair />} />
        </Route>
        ;
      </Routes>
    </Router>
  );
};

export default Dashboard;
