import { useGlobalHook } from "./Contexts";
import { NavLink } from "react-router-dom";
const QuestionsPage = () => {
  const { data, showAnser } = useGlobalHook();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>QuestionsPage</h1>
      {data.map((cur, inde) => {
        return (
          <div key={inde}>
            <h1>{`${inde + 1} - ${cur.question}`}</h1>
            <button>UpVote</button>
            <button>DownVote</button>
            <NavLink to="/answer">
              <button onClick={() => showAnser(cur.id)}>Answer</button>
            </NavLink>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsPage;
