import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Detector from "./Detector.jsx";
import About from "./About.jsx";
import Privacy from "./Privacy.jsx";
import Contact from "./Contact.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Detector />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
