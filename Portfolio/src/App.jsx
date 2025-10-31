import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Hoteltheme, { HotelHome, HotelAbout, HotelContact, HotelBooking } from "./themes/Hoteltheme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Hoteltheme" element={<Hoteltheme />}>
          <Route index element={<HotelHome />} />
          <Route path="about" element={<HotelAbout />} />
          <Route path="contact" element={<HotelContact />} />
          <Route path="booking" element={<HotelBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
