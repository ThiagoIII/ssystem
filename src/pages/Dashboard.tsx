import { Link } from "react-router-dom";

const Dashboard = (): JSX.Element => {
  return (
    <>
      Choose from
      <Link to="/context">ContextAPI</Link> or <Link to="/recoil">Recoil</Link>{" "}
      as a state management option.
    </>
  );
};

export default Dashboard;
