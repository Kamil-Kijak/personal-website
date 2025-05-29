
import { faCircleInfo, faBriefcase, faTrophy, faStar} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {

    return(
        <main className="bg-zinc-900 min-h-screen">
            <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-zinc-900 to-zinc-950">
                <FontAwesomeIcon icon={faStar} className="text-blue-700 text-8xl mb-6"/>
                <span className="md:text-8xl text-6xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Welcome!</span>
                <span className="text-5xl font-extrabold text-zinc-600 mt-10 text-shadow-lg text-shadow-zinc-500">To My site</span>
            </section>
            <section className="flex flex-col justify-center items-center">
                <section className="flex flex-col items-center mt-20">
                    <FontAwesomeIcon icon={faCircleInfo} className="text-blue-700 text-6xl"/>
                    <span className="text-cyan-500 text-6xl font-extrabold">My Info</span>
                    <div className="w-full border-t-4 border-t-white mt-4"></div>
                </section>
                <section className="sm:mx-50 mx-25 mt-5">
                    <span className="text-white text-wrap font-bold text-xl">
                        Hello I am Kamil Kijak. I am interested in <span className="text-blue-600">IT brand and software development</span>
                        I want to become successful person with my programming skills and i want to make a carrier as developer.
                    </span>
                </section>
                <section className="flex flex-col items-center mt-50">
                    <FontAwesomeIcon icon={faBriefcase} className="text-red-700 text-6xl"/>
                    <span className="text-red-600 text-6xl font-extrabold">Preferences</span>
                    <div className="w-full border-t-4 border-t-white mt-4"></div>
                </section>
                <section className="sm:mx-50 mx-25 mt-5">
                    <span className="text-white text-wrap font-bold text-xl">
                        Programming is my passion so I want to make carrier with it. I have built many projects for example: games, sites, apps already.
                        I like logicly work with <span className="text-red-600">programming projects</span>, create a new ideas for projects
                         and implement there, upgrade exists projects for new concepts and creating plans about new project.
                    </span>
                </section>
                <section className="flex flex-col items-center mt-50">
                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-6xl"/>
                    <span className="text-yellow-400 text-6xl font-extrabold">Goal</span>
                    <div className="w-full border-t-4 border-t-white mt-4"></div>
                </section>
                <section className="sm:mx-50 mx-25 mt-5 mb-20 ">
                    <span className="text-white text-wrap font-bold text-xl">
                        My goal is extend my skills and improve my work for better work.
                        By builting projects I learn new skills, new technologies and improve work with another projects.
                        I am really great fan of IT things so I want to <span className="text-yellow-400">learn and upgrade myself</span> to make a technology related carrier.
                        I hope that my efforts will succeed.
                        </span>
                </section>
            </section>
        </main>
    )
}