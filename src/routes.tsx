import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import QuizApp from "./pages/QuizApp/QuizApp";
import Bored from "./pages/BoredApi/Bored";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<QuizApp/>}/>
        <Route path="/bored" element={<Bored/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
