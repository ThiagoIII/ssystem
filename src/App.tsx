import { Link } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div>
      Choose from
      <Link to="/context">ContextAPI</Link> or <Link to="/recoil">Recoil</Link>{" "}
      as a state management option.
    </div>
  );
}

export default App;
