import { useGlobalHook } from "./Contexts";
import { NavLink } from "react-router-dom";
const Home = () => {
  const { data } = useGlobalHook();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome John</h1>
      <NavLink to="/question">
        <button>Show Questions</button>
      </NavLink>
    </div>
  );
};

export default Home;
