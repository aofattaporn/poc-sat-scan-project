import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layoute from "./components/Layoute";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layoute/>}>
            <Route path="/" element={<UploadPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
