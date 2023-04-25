import { useGlobalHook } from "./Contexts";

const AnswerPage = () => {
  const { anser } = useGlobalHook();
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textDecoration: "underline" }}>AnswerPage</h1>
      <h2>Answer : </h2>
      {anser.map((cur) => {
        return (
          <div key={cur.answer}>
            <h3>{cur.answer}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerPage;
