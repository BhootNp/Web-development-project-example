import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<div>contact</div>} />
      </Routes>
    </Router>
  );
}

export default App