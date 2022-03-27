import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import Explore from "./pages/Explore";
import ForgetPassword from "./pages/ForgetPassword";
import Offer from "./pages/Offer";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import VirtualRoute from "./components/VirtualRoute";
import Categories from "./pages/Categories";
import Listing from "./pages/Listing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/category/:categoryName" element={<Categories />} />
          <Route path="/profile" element={<VirtualRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path='/listing' element={<Listing />}/>
        </Routes>
        <NavBar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
