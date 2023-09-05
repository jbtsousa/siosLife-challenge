import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components";
import { Dashboard } from "./components";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
