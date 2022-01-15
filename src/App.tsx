import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChangeNote from "./ChangeNote";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<ChangeNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
