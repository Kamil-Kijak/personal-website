import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Project() {
    const params = useParams();

    const projectsData = {
        "spaceshoot": {
            img:"../../src/img/projects/spaceshoot/1.png",
            title:"Spaceshoot Game",
            githubLink:"https://github.com/Kamil-Kijak/spaceshoot",
        }
    }

    return (
        <main className="bg-zinc-900 min-h-screen pt-14">
            <section className="h-[500px] md:h-[450px]">
                <img src={projectsData[params["ID"]].img} className={`w-screen h-[400px] absolute`} />
                <div className="bg-gradient-to-t from-black to-transparent absolute z-2 w-screen h-[400px]"></div>
                <h1 className="text-white text-6xl font-extrabold text-center top-100 absolute z-2 w-full">{projectsData[params["ID"]].title}</h1>
            </section>
            <section className="flex flex-col items-center">
                <div className="border-t-8 border-purple-700 w-[80vw]"></div>
                <a target="_blank" href={projectsData[params["ID"]].githubLink} className="text-white px-5 py-4 bg-gradient-to-r from-blue-700 to-purple-700
                                                    font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-5 text-xl
                                                    cursor-pointer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Open Github</a>
                <h1 className="text-white mt-15 text-5xl font-extrabold">Documentation</h1>
                <section className="px-20 font-bold text-xl text-white mt-10 self-start">
                    <p>Hello world</p>
                </section>
            </section>
        </main>
    )
}