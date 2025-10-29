import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Hoteltheme, { Home as HotelHome} from "./themes/Hoteltheme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Hoteltheme" element={<Hoteltheme />}>
          <Route index element={<HotelHome />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
