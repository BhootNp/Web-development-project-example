import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";
import EditUser from "./pages/edituser";
import Dashboard from "./pages/Dasboard";
import Headers from './pages/components/Headers';
import Footers from './pages/components/Footers';

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/contact" element={<div>contact</div>} />
        <Route path="/userdash" element={<div>userdash</div>} />
        <Route path="/admindash" element={<div>admindash</div>} />
      </Routes>
    </Router>
  );
}

export default App;
