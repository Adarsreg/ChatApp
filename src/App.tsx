import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, redirect, Routes } from "react-router-dom";
function App() {


  return (
    <div className="App grid h-screen place-items-center">
      <Home />
    </div>

  )
}

export default App
