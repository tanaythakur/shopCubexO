import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import Payments from "./Pages/Payments";

import Login from './Pages/Login';
import Signup from "./Pages/SIGNUP";
// import Authentication from "./Components/Authentication"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <Navbar />
        <div className="py-8">
          <Routes>
            {/* <Route path="/authentication" element={<Authentication/>} /> */}
            <Route path="/sign-up"  element={<Signup />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
