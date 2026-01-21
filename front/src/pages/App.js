import { Routes, Route } from 'react-router-dom'
import Home from "./Home.js";
import About from "./About.js";
import Login from "./Login.js";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default App
