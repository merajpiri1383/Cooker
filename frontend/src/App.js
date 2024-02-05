import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Login from "./pages/authentication/login";
import Verify from "./pages/authentication/verify";
import Navbar from "./components/navbar";
import Main from "./pages/shop/main";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login/" element={<Login/>} />
        <Route path="/verify/" element={<Verify/>} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
};export default App ;