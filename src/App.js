import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import GlobalAlert from "./components/global-alert";
import Favorites from "pages/favorites";
import Home from "pages/home";
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/favorites" exact element={<Favorites />} />
      </Routes>
      <GlobalAlert />
    </div>
  );
}

export default App;
