import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./View/Register";
import List from "./View/List";
import Update from "./View/Update";
import Menu from "./View/Menu";
import Home from "./View/Home";
import Login from "./View/Login";
import PartyRegister from "./View/partyRegister";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route
          path="/home"
          element={
            <div className="container">
              <Home />
            </div>
          }
        ></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/partyRegister" element={<PartyRegister />}></Route>
        <Route
          path="/list"
          element={
            <div className="container">
              <List />
            </div>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={
            <div className="container">
              <Update />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
