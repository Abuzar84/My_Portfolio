import MyLogo from './assets/as.png';  
import CalcLogo from './assets/My_Calculator_Space.webp';

function Home() {
    return (
        <div className="bg-white text-gray-900 h-screen w-screen">
            <header className="border-b-2 border-gray-200">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <img src={MyLogo} alt="My Logo" className="w-12"/>
                        <div>
                            <h1 className="text-lg font-semibold">Abuzar</h1>
                            <p className="text-sm text-gray-500">Wahdatullah Sayyed</p>
                        </div>
                    </div>

                    <nav>
                        <ul className="flex gap-5 text-sm text-gray-700">
                            <li className="hover:text-black cursor-pointer">Home</li>
                            <li className="hover:text-black cursor-pointer">About</li>
                            <li className="hover:text-black cursor-pointer">Projects</li>
                            <li className="hover:text-black cursor-pointer">Contact</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="h-screen">
                <section className="bg-linear-to-b from-white via-gray-50 to-gray-100 flex flex-col min-h-screen">
                    <div className="pt-2 text-center flex flex-col flex-1">
                        <div>
                            <h2 className="text-4xl sm:text-3xl font-extrabold mb-4">
                                Welcome to My Portfolio
                            </h2>
                            <div className="w-auto">
                                <h2 className="text-4xl sm:text-2xl font-extrabold mb-4">My Projects</h2>
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
                        <div className="flex-1">  
                            <h2 className="text-4xl sm:text-3xl font-extrabold mb-4">
                                Hi, I'm Abuzar Wahdatullah Sayyed
                            </h2>
                            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                                I'm a web developer focused on building accessible, responsive, and
                                performant websites. I enjoy turning ideas into real products — from
                                simple landing pages to full-stack applications.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center justify-center gap-6 text-gray-600">
                            <a href="https://github.com/Abuzar84" aria-label="GitHub" className="hover:text-black">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/sayyed-abuzar-6ba990279/" aria-label="LinkedIn" className="hover:text-black">
                                LinkedIn
                            </a>
                            <a href="https://www.facebook.com/sayyed.abuzar.941349" className="hover:text-black">
                                Facebook
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