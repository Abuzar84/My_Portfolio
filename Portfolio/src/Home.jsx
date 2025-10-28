import React from "react";
// import { Link } from 'react-router-dom';
import MyLogo from './assets/as.png';  
import CalcLogo from './assets/My_Calculator_Space.webp';

function Home() {
    // Create References for sections
    const HomeRef = React.useRef(null);
    const AboutRef = React.useRef(null);
    const ContactRef = React.useRef(null);

    // Function to scroll to sections
    const scrolltoref = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    // State for mobile menu toggle
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="bg-white text-gray-900 h-screen w-screen">
            <header className="border-b-2 border-gray-200  bg-gray-50 fixed w-full">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <img src={MyLogo} alt="My Logo" className="w-12"/>
                        <div>
                            <h1 className="text-lg font-semibold">Abuzar</h1>
                            <p className="text-sm text-gray-500">Wahdatullah Sayyed</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:block">
                        <ul className="flex gap-5 text-sm text-gray-700">
                            <li className="hover:text-black cursor-pointer" onClick={() => scrolltoref(HomeRef)}>Home</li>
                            <li className="hover:text-black cursor-pointer" onClick={() => scrolltoref(AboutRef)}>About</li>
                            <li className="hover:text-black cursor-pointer" onClick={() => scrolltoref(ContactRef)}>Contact</li>
                        </ul>
                    </nav>

                    {/* Hamburger Icon for Mobile */}
                    <button 
                        className="sm:hidden focus:outline-none" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="border-t-2 w-6 block pb-2"></span>
                        <span className="border-t-2 w-6 block pb-2"></span>
                        <span className="border-t-2 w-6 block pb-2"></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
                    <ul className="flex flex-col text-sm text-gray-700">
                        <li 
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                            onClick={() => {
                                setIsMenuOpen(false);
                                scrolltoref(HomeRef);
                            }}
                        >
                            Home
                        </li>
                        <li 
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                            onClick={() => {
                                setIsMenuOpen(false);
                                scrolltoref(AboutRef);
                            }}
                        >
                            About
                        </li>
                        <li 
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </li>
                        <li 
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                            onClick={() => {
                                setIsMenuOpen(false);
                                scrolltoref(ContactRef);
                            }}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            </header>
            <main className="h-screen pt-18">
                <section className="bg-linear-to-b from-white via-gray-50 to-gray-100 flex flex-col min-h-screen">
                    <div className="pt-5 text-center flex flex-col flex-1" ref={HomeRef}>
                        <div>
                            <h2 className="text-4xl sm:text-3xl font-extrabold mb-4">
                                Welcome to My Portfolio
                            </h2>
                            <div className="w-auto">
                                <h2 className="text-4xl sm:text-2xl font-extrabold mb-4">Website Themes</h2>
                                <span className="flex justify-center ">
                                    <a href="https://www.mycalculatorspace.in/" className="border-2">
                                        <img
                                            src={CalcLogo}
                                            alt="My Calculator Space"
                                            title="My Calculator Space"
                                            className="w-64"
                                        />
                                        My Calculator Space
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="flex-1" ref={AboutRef}>  
                            <h2 className="text-4xl sm:text-3xl font-extrabold mb-4">
                                Hi, I'm Abuzar Wahdatullah Sayyed
                            </h2>
                            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                                I'm a web developer focused on building accessible, responsive, and
                                performant websites. I enjoy turning ideas into real products — from
                                simple landing pages to full-stack applications.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-600" ref={ContactRef}>
                            <a href="https://github.com/Abuzar84" aria-label="GitHub" className="hover:text-black">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/sayyed-abuzar-6ba990279/" aria-label="LinkedIn" className="hover:text-black">
                                LinkedIn
                            </a>
                            <a href="https://www.facebook.com/sayyed.abuzar.941349" className="hover:text-black">
                                Facebook
                            </a>
                            <a href="mailto:sayyedabuzar021@gmail.com" className="hover:text-black">
                                sayyedabuzar021@gmail.com
                            </a>
                            <a href="https://www.instagram.com/sayyedabuzar844/" className="hover:text-black">
                                Instagram
                            </a>
                            <a href="https://x.com/SayyedAbuz46392" className="hover:text-black">
                                X (Twitter)
                            </a>
                        </div>
                    </div>
                </section>
            </main> 
        </div>
    );
}

export default Home;