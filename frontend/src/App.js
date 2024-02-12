import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Login from "./pages/authentication/login";
import Verify from "./pages/authentication/verify";
import Navbar from "./components/navbar";
import Settings from "./pages/settings/settings";
import Brand from "./components/settings/brand";
import IamgeProduct from "./components/settings/ImageProduct";
import Main from "./pages/shop/main";
import API from "./auth/auth";
import Profile from "./pages/profile/profile";
import { useSelector } from "react-redux";
const App = () => {
  const settings = useSelector((state) => state.settings);
  return (
    <BrowserRouter>
      {
        settings.background_image && <img src={`${API.defaults.baseURL}${settings.background_image}`}
        className="background-image" />
      }
      <Navbar />
      <Routes>
        <Route path="/login/" element={<Login/>} />
        <Route path="/verify/" element={<Verify/>} />
        <Route path="/settings/" element={<Settings />}>
          <Route path="change-default-image" element={<IamgeProduct />} />
          <Route path="change-brand" element={<Brand />} />
        </Route> 
        <Route path="/profile/" element={<Profile />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
};export default App ;