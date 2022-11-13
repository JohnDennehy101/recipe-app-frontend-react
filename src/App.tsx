import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IndividualRecipePage from "./pages/IndividualRecipePage";
import Header from "./components/Header";


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<IndividualRecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
