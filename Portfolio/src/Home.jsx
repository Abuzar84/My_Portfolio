function Home() {
    return (
        <div className="h-screen bg-white text-gray-900">
            {/* Top nav */}
            <header className="border-b-2 border-gray-200">
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <div
                            aria-hidden
                            className="rounded-full w-10 h-10 bg-green-300 flex items-center justify-center text-white font-bold text-lg"
                        >
                            A
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold">Abuzar</h1>
                            <p className="text-sm text-gray-500">Wahdatullah Sayyed</p>
                        </div>
                    </div>

                    <nav>
                        <ul className="flex gap-6 text-sm text-gray-700">
                            <li className="hover:text-black cursor-pointer">Home</li>
                            <li className="hover:text-black cursor-pointer">About</li>
                            <li className="hover:text-black cursor-pointer">Projects</li>
                            <li className="hover:text-black cursor-pointer">Contact</li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="bg-linear-to-b from-white via-gray-50 to-gray-100">
                <div className="max-w-5xl mx-auto py-20 px-6 text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Hi, I'm Abuzar Wahdatullah Sayyed
                    </h2>
                    <p className="text-xl text-gray-700 mb-6">I can make websites.</p>

                    <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                        I'm a web developer focused on building accessible, responsive, and
                        performant websites. I enjoy turning ideas into real products — from
                        simple landing pages to full-stack applications.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="inline-block bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700"
                        >
                            View Projects
                        </a>
                        <a
                            href="mailto:youremail@example.com"
                            className="inline-block border border-gray-300 px-5 py-2 rounded-md text-gray-800 hover:bg-gray-50"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-6 text-gray-600">
                        <a href="https://github.com/Abuzar84" aria-label="GitHub" className="hover:text-black">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/sayyed-abuzar-6ba990279/" aria-label="LinkedIn" className="hover:text-black">
                            LinkedIn
                        </a>
                        <a href="#" aria-label="Resume" className="hover:text-black">
                            Facebook
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;