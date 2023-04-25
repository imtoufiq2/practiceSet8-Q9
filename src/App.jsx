import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AnswerPage from "./AnswerPage";
import QuestionsPage from "./QuestionsPage";
import Header from "./Header";
import Error from "./Error";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<QuestionsPage />} />
          <Route path="/answer" element={<AnswerPage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
