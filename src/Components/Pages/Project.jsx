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
            doc:
            <>
                <section className="flex justify-center mt-10">
                    <span className="text-3xl text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text font-extrabold h-[2.5rem]">Technologies have been used</span>
                </section>
                <section className="mt-10">
                    <section className="flex flex-row items-start justify-center flex-wrap">
                        <section className="flex flex-col items-center p-6 m-5 w-[400px] shadow-cyan-400 shadow-2xl rounded-2xl">
                            <span className="text-7xl text-cyan-400 font-bold mb-5">C#</span>
                            <span className="text-3xl text-cyan-400 text-center">main programming language</span>
                        </section>
                        <section className="flex flex-col items-center p-6 m-5 w-[400px] shadow-orange-600 shadow-2xl rounded-2xl">
                            <span className="text-7xl text-orange-600 font-bold mb-5">XNA</span>
                            <span className="text-3xl text-orange-600 text-center">(monogame) framework for creating games</span>
                        </section>
                    </section>
                </section>
                <section className="flex justify-center mt-10">
                    <span className="text-3xl text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text h-[2.5rem] font-extrabold">Description</span>
                </section>
                <section className="my-10 text-center">
                    <p>
                        This project is game about spaceship controlled by player. Main objective is survive the most enemy waves as you can.
                        Difficulty increases with each wave, also player has levels which give him more health and attack. Player also can collect special items which can be helpful.
                        Game concept is very simple.
                    </p>
                    <p className="mt-5 text-center">
                        Game is created using .NET in 6.0 version. To run this project you have to run <span className="text-cyan-500">dotnet run</span> command in terminal localized in project folder.
                    </p>
                </section>
                <section className="flex justify-center mt-10">
                    <span className="text-3xl text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text h-[2.5rem] font-extrabold">Authors</span>
                </section>
                <section className="my-10 flex flex-col items-center">
                    <span className="text-3xl">Only me (Kamil Kijak)</span>
                </section>
            </>
        }
    }
    return (
        <main className="bg-zinc-900 min-h-screen pt-14 pb-2">
            <section className="h-[500px] md:h-[450px]">
                <img src={projectsData[params["ID"]].img} className={`w-screen h-[400px] absolute`} />
                <div className="bg-gradient-to-t from-black to-transparent absolute z-2 w-full h-[400px]"></div>
                <h1 className="text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text lg:text-8xl md:text-7xl text-6xl font-extrabold text-center top-90 absolute z-2 w-full">{projectsData[params["ID"]].title}</h1>
            </section>
            <section className="flex flex-col items-center">
                <div className="border-t-8 border-purple-700 w-[80vw]"></div>
                <a target="_blank" href={projectsData[params["ID"]].githubLink} className="text-white px-5 py-4 bg-gradient-to-r from-blue-700 to-purple-700
                                                    font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-5 text-xl
                                                    cursor-pointer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Open Github</a>
                <h1 className="text-white mt-15 text-4xl md:text-5xl font-extrabold">Documentation</h1>
                <section className="md:px-20 px-10 font-bold text-xl text-white self-center">
                    {projectsData[params["ID"]].doc || <p>No documentation</p>}
                </section>
            </section>
        </main>
    )
}