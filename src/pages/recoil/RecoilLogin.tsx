import React from "react";
import { Link, Outlet } from "react-router-dom";

const RecoilLogin = (): JSX.Element => {
  return (
    <>
      RecoilLogin
      <Link to="/recoil/logged">Logged</Link> or{" "}
      <Link to="/dragonBirth">DragonBirth</Link> <Outlet />
    </>
  );
};

export default RecoilLogin;
