import { NavLink } from "react-router-dom";
import { useGlobalHook } from "./Contexts";
const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
    fontSize: "30px",
    textDecoration: "none",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "black",
        color: "white",
        padding: "20px 0",
        textDecoration: "none",
      }}
    >
      <NavLink to="/" style={getActiveStyle}>
        Home
      </NavLink>
      <NavLink to="/question" style={getActiveStyle}>
        QuestionsPage
      </NavLink>
      <NavLink to="/answer" style={getActiveStyle}>
        AnswerPage
      </NavLink>
    </div>
  );
};

export default Header;
