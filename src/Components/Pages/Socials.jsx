
import { faInstagram, faThreads, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

export default function Socials() {
    return (
        <main className="bg-zinc-900 min-h-screen pb-[100px] pt-20">
            <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
                <section className="shadow-2xl shadow-orange-400 m-10 flex justify-center items-center flex-col rounded-2xl pb-5">
                    <FontAwesomeIcon icon={faInstagram} className="text-orange-600 text-8xl relative top-[-30px]"/>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-extrabold text-4xl h-[3rem]">Instagram</h1>
                    <div className="border-t-4 border-orange-400 m-5 w-[80%]"></div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-2xl font-extrabold">Nickname: kamilkijak</h1>
                    <p className="text-white font-bold text-center mt-5 mx-4">
                        Instagram is a place where I share my experiences of my life and also <span className="text-orange-400">connect with people</span> which has same passions and look on world.
                    </p>
                    <a href="https://www.instagram.com/kamilkijak/" target="_blank" className="text-white px-4 py-3 bg-gradient-to-r from-orange-400 to-orange-600 font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-5 text-md cursor-pointer"><FontAwesomeIcon icon={faEye}/> View account</a>
                </section>
                <section className="shadow-2xl shadow-white m-10 flex justify-center items-center flex-col rounded-2xl pb-5">
                    <FontAwesomeIcon icon={faThreads} className="text-gray-400 text-8xl relative top-[-30px]"/>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-extrabold text-4xl h-[3rem]">Threads</h1>
                    <div className="border-t-4 border-white m-5 w-[80%]"></div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-2xl font-extrabold">Nickname: kamilkijak</h1>
                    <p className="text-white font-bold text-center mt-5 mx-4">
                        In threads platform i publish my life related thinks and events in my life by writing posts
                    </p>
                    <a href="https://www.threads.com/@kamilkijak" target="_blank" className="text-black px-4 py-3 bg-gradient-to-r from-white to-gray-400 font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-5 text-md cursor-pointer"><FontAwesomeIcon icon={faEye}/> View account</a>
                </section>
                <section className="shadow-2xl shadow-blue-500 m-10 flex justify-center items-center flex-col rounded-2xl pb-5">
                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-8xl relative top-[-30px]"/>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 font-extrabold text-4xl h-[3rem]">Linkedin</h1>
                    <div className="border-t-4 border-blue-500 m-5 w-[80%]"></div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 text-2xl font-extrabold">Nickname: Kamil Kijak</h1>
                    <p className="text-white font-bold text-center mt-5 mx-4">
                        Linkedin account where i publish my things about <span className="text-sky-300">my carrier and my business.</span> For example my life steps, education and future employment.
                    </p>
                    <a href="https://www.linkedin.com/in/kamil-kijak-546676358/" target="_blank" className="text-white px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-700 font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-5 text-md cursor-pointer"><FontAwesomeIcon icon={faEye}/> View account</a>
                </section>
                <section className="shadow-2xl shadow-fuchsia-700 m-10 flex justify-center items-center flex-col rounded-2xl pb-5">
                    <FontAwesomeIcon icon={faGithub} className="text-purple-900 text-8xl relative top-[-30px]"/>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-purple-900 font-extrabold text-4xl h-[3rem]">Github</h1>
                    <div className="border-t-4 border-fuchsia-700 m-5 w-[80%]"></div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-purple-900 text-2xl font-extrabold">Nickname: Kamil-Kijak</h1>
                    <p className="text-white font-bold text-center mt-5 mx-4">
                        My social where I publish my programming projects and my work with many thinks, mainly in <span className="text-fuchsia-500">programming and IT.</span> Github is my place to share my work with everyone.
                    </p>
                    <a href="https://github.com/Kamil-Kijak" target="_blank" className="text-white px-4 py-3 bg-gradient-to-r from-fuchsia-700 to-purple-900 font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-5 text-md cursor-pointer"><FontAwesomeIcon icon={faEye}/> View account</a>
                </section>
            </section>
        </main>
    )
}