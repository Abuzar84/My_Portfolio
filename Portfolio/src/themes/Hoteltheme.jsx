import { Link, Outlet } from "react-router-dom";
import bgimage from '../assets/backgroundHotel.webp';

// Layout component with navigation
function Hoteltheme() {
  return (
    <div className="min-h-screen flex flex-col">
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
      <header className="bg-black text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/Hoteltheme" className="text-2xl font-bold">Luxury Stay</Link>
          <div className="flex gap-6">
            <Link to="/Hoteltheme" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/Hoteltheme/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link to="/Hoteltheme/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Luxury Stay</h3>
              <p className="text-gray-300">Experience luxury and comfort</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/Hoteltheme" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/Hoteltheme/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link to="/Hoteltheme/booking" className="text-gray-300 hover:text-white">Booking</Link></li>
                <li><Link to="/Hoteltheme/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="text-gray-300 space-y-2">
                <li>123 Hotel Street</li>
                <li>City, State 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@luxurystay.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Home Page Component
function HotelHome() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative flex justify-center items-center bg-cover bg-center bg-no-repeat h-[80vh]"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="absolute"></div>
        <div className="relative text-center text-white z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Luxury Stay
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Experience luxury and comfort
          </p>
          <Link to="/Hoteltheme/booking">
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black text-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Luxury Rooms</h3>
              <p className="text-gray-600">Experience comfort in our carefully designed rooms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black text-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock support for your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black text-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-600">Situated in the heart of the city</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// About Page Component
function HotelAbout() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Luxury Stay</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to Luxury Stay, where elegance meets comfort. Since our establishment in 2010, 
            we have been dedicated to providing our guests with an unforgettable luxury experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional hospitality services that exceed our guests' expectations 
                while maintaining the highest standards of luxury and comfort.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading luxury hotel, recognized for our outstanding service, 
                innovative amenities, and commitment to guest satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function HotelContact() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function HotelBooking() {
  return(
    <div className="bg-cover bg-center bg-no-repeat h-[80vh]" style={{ backgroundImage: `url(${bgimage})` }}>
    </div>
  )
}


export { HotelHome, HotelAbout, HotelContact, HotelBooking };
export default Hoteltheme;