import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import './App.css'
import HomeFavorites from "./pages/favorites";
import GlobalAlert from "./components/global-alert";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/favorites" exact element={<HomeFavorites />} />
      </Routes>
      <GlobalAlert />
    </div>
  );
}

export default App;
