
import { faCircleInfo, faBriefcase, faTrophy, faPhone, faComputer} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef } from "react"


export default function Home() {

    const firstBinary = useRef(null);
    const secondBinary = useRef(null);

    useEffect(() => {
        const binaryInterval = setInterval(() => {
            const first = firstBinary.current.textContent;
            const second = secondBinary.current.textContent;
            firstBinary.current.textContent = first.split('').map(() => Math.random() > 0.5 ? 1 : 0).join('');
            secondBinary.current.textContent = second.split('').map(() => Math.random() > 0.5 ? 0 : 1).join('');
        }, 1000)
        return () => {
            clearInterval(binaryInterval);
        }   
    })

    return(
        <main className="bg-zinc-900 min-h-screen pb-[100px]">
            <section className="overflow-x-hidden flex flex-col justify-center items-center h-screen bg-gradient-to-t from-zinc-900 to-black">
                <section ref={firstBinary} className="overflow-x-hidden overflow-y-hidden w-full md:text-8xl text-6xl font-extrabold text-zinc-800 my-20 h-[8.5rem]">010101110010001111111111111111111111111111111111111</section>
                <FontAwesomeIcon icon={faComputer} className="text-blue-700 text-8xl mb-6"/>
                <span className="md:text-8xl text-6xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Welcome</span>
                <span className="text-5xl font-extrabold text-blue-700 mt-10 text-shadow-lg text-shadow-blue-600">To My site</span>
                <section ref={secondBinary} className="overflow-x-hidden overflow-y-hidden w-full md:text-8xl text-6xl font-extrabold text-zinc-800 my-15 h-[8.5rem]">010101110010001111111111111111111111111111111111111</section>
            </section>
            <section className="flex flex-col justify-center items-center overflow-x-hidden">
                <section className="flex flex-col items-center mt-20 shadow-2xl shadow-cyan-500 lg:mx-20 mx-10 rounded-2xl py-8 bg-gradient-to-t from-zinc-800 to-black">
                    <FontAwesomeIcon icon={faCircleInfo} className="text-cyan-500 text-6xl"/>
                    <span className="text-cyan-500 lg:text-6xl text-5xl font-extrabold">My Info</span>
                    <div className="border-t-4 border-t-cyan-500 mt-4 w-[50%]"></div>
                    <span className="text-cyan-500 font-bold text-2xl text-center mt-5">Hello I am Kamil Kijak</span>
                    <span className="text-white font-bold text-xl text-center sm:mx-50 mx-15 mt-5">
                        I am interested in <span className="text-cyan-500">IT things</span> I want to make a carrier as software developer, so I want to show and share my programming projects I created.
                    </span>
                </section>
                <section className="flex flex-col items-center mt-50 shadow-2xl shadow-green-500 lg:mx-20 mx-10 rounded-2xl py-8 bg-gradient-to-t from-zinc-800 to-black">
                    <FontAwesomeIcon icon={faPhone} className="text-green-500 text-6xl"/>
                    <span className="text-green-500 lg:text-6xl text-5xl font-extrabold">Contact</span>
                    <div className="border-t-4 border-t-green-500 mt-4 w-[50%]"></div>
                    <span className="text-white font-bold text-xl text-center sm:mx-50 mx-15 mt-5">
                        I have socials
                         accounts, you can view this in <span className="text-green-500">'Social Media'</span> section
                         or contact me using email adress.
                    </span>
                    <span className="text-green-500 text-xl font-bold mt-5">kamil.kijak@pixlesofte.com</span> 
                </section>
    
                <section className="flex flex-col items-center mt-50 shadow-2xl shadow-red-500 lg:mx-20 mx-10 rounded-2xl py-8 bg-gradient-to-t from-zinc-800 to-black">
                    <FontAwesomeIcon icon={faBriefcase} className="text-red-600 text-6xl"/>
                    <span className="text-red-600 lg:text-6xl text-5xl font-extrabold">Preferences</span>
                    <div className="border-t-4 border-t-red-600 mt-4 w-[50%]"></div>
                    <span className="text-white font-bold text-xl text-center sm:mx-50 mx-15 mt-5">
                        Programming is my passion so I want to make carrier with it. I have built many projects for example: games, sites, apps already.
                        I like work with <span className="text-red-600">programming projects</span>, create a new ideas for projects
                         and implement this, upgrade exists projects for new concepts and creating plans about new projects.
                    </span>
                </section>
                <section className="flex flex-col items-center mt-50 shadow-2xl shadow-yellow-500 lg:mx-20 mx-10 rounded-2xl py-8 mb-20 bg-gradient-to-t from-zinc-800 to-black">
                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-400 text-6xl"/>
                    <span className="text-yellow-400 lg:text-6xl text-5xl font-extrabold">Goal</span>
                    <div className="border-t-4 border-t-yellow-400 mt-4 w-[50%]"></div>
                    <span className="text-white font-bold text-xl text-center sm:mx-50 mx-15 mt-5">
                         My goal is extend my skills and improve my work.
                        By builting projects I learn new skills, new technologies and improve work with another projects.
                        I want to <span className="text-yellow-400">learn and improve myself</span> to make a technology related carrier.
                        I hope that my efforts will succeed. I am <span className="text-yellow-400">very determinated.</span>
                    </span>
                </section>
            </section>
        </main>
    )
}