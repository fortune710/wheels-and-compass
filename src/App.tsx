import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { MainArea, HomePage, AboutUs, Services, ContactPage } from "./pages";

function App() {

  return (
    <Routes>
      <Route path="home" element={<HomePage/>} />
      <Route path="/" element={<Navigate to="/home" replace/>} />
      <Route path="about-us" element={<AboutUs/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
  )
}

export default App
