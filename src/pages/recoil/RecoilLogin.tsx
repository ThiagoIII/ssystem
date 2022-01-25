import { Link, Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginStatus } from "../../state-management/recoil/state";

const RecoilLogin = (): JSX.Element => {
  const [isLoggedIn, setLoginStatus] = useRecoilState(loginStatus);

  let navigate = useNavigate();

  const handleSubmit = async () => {
    const username = (document.getElementById("username") as HTMLInputElement)
      .value;
    const securekey = (document.getElementById("securekey") as HTMLInputElement)
      .value;

    // const response = await axios.post('endpoint with user info', {data: {username}}) , to mock a call I will just retrieve it from the browser sessionStorage
    const response: string | null = window.sessionStorage.getItem("userinfo");
    let data;
    if (response !== null) {
      data = JSON.parse(response);
    }

    if (data.securekey === securekey && data.username === username) {
      data = { ...data, status: "loggedIn" };
      window.sessionStorage.setItem("userinfo", JSON.stringify(data));
      if (isLoggedIn === false) {
        const changeLoginStatus = () => setLoginStatus(true);
        changeLoginStatus();
        navigate("/dragonList");
      }
    }
  };

  return (
    <>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="securekey">Password: </label>
        <input type="text" name="securekey" id="securekey" />
        <button type="button" onClick={handleSubmit}>
          Open the entrance to the kingdom of the Flying Lords!
        </button>
        <Link type="button" to="/resetPassword">
          Reset your password
        </Link>
      </form>
      <Outlet />
    </>
  );
};

export default RecoilLogin;
