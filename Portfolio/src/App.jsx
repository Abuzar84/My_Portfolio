import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Hoteltheme from "./themes/Hoteltheme";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Hoteltheme" element={<Hoteltheme />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
