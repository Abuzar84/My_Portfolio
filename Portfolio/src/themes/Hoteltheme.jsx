import { Link, Outlet } from "react-router-dom";
import bgimage from '../assets/backgroundHotel.jpg';

function Hoteltheme() {
  return (
    <div>
      <title>Hotel Theme - Luxury Hotel Booking</title>
      <meta
        name="description"
        content="A modern, responsive hotel booking website built with React. Features room selection, gallery, contact form, and luxury UI."
      />
      <meta property="og:title" content="Hotel Theme - Luxury Hotel Booking" />
      <meta
        property="og:description"
        content="Experience luxury and comfort with our fully responsive hotel booking theme."
      />
      <meta property="og:url" content="https://abuzarsayyed.in/Hoteltheme" />
      <meta property="og:image" content="https://abuzarsayyed.in/hotel-og.jpg" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://abuzarsayyed.in/Hoteltheme" />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div className="h-screen w-screen">
      <title>Hotel Theme - Home | Luxury & Comfort</title>
      <meta
        name="description"
        content="Welcome to Hotel Theme – a luxury hotel booking experience with stunning design and seamless navigation."
      />
      <meta property="og:title" content="Hotel Theme - Home" />
      <meta
        property="og:description"
        content="Welcome to the Hotel Theme – Experience luxury and comfort."
      />
      <meta property="og:image" content="https://abuzarsayyed.in/hotel-home-og.jpg" />
      <link rel="canonical" href="https://abuzarsayyed.in/Hoteltheme" />

      {/* Header */}
      <div className="bg-black flex justify-between text-white p-4">
        <h1 className="pl-10">Hotel Theme</h1>
        <nav>
          <Link to="/Hoteltheme" className="text-white hover:underline">
            Home
          </Link>
        </nav>
      </div>

      {/* Hero Section */}
      <div
        className="flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen w-full"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl text-white font-bold">
            Welcome to the Hotel Theme
          </h2>
          <p className="text-lg md:text-xl text-white mt-4">
            Experience luxury and comfort
          </p>
        </div>
      </div>
    </div>
  );
}

export { Home };
export default Hoteltheme;