import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Client_Home from "./pages/Client_Home";
import Favourite_Layout from "./layouts/Favourite_Layout";
import Trending_Layout from "./layouts/Treding_Layout";
import Weather_Layout from "./layouts/Weather_Layout";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Client_Home />}>
            <Route path="" element={<Trending_Layout />}></Route>
            <Route path="Weather" element={<Weather_Layout />}></Route>
            <Route path="Favourite" element={<Favourite_Layout />}></Route>
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
