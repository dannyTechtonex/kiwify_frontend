import "./App.css";
import SignUp from "./Pages/SignUp.js/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login.js/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
