import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { faGithub} from "@fortawesome/free-brands-svg-icons";

import spaceshootimg from "../../img/projects/spaceshoot/1.png"
import solitaireimg from "../../img/projects/solitaire/2.png"

export default function Project() {
    const params = useParams();

    const projectsData = {
        "spaceshoot": {
            img:spaceshootimg,
            title:"Spaceshoot Game",
            githubLink:"https://github.com/Kamil-Kijak/spaceshoot",
            doc:
            <>
                <section className="flex justify-center mt-10">
                    <span className="text-3xl text-center text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text font-extrabold h-[2.5rem]">Technologies have been used</span>
                </section>
                <section className="mt-10">
                    <section className="flex flex-row items-start justify-center flex-wrap">
                        <section className="flex flex-col items-center p-6 m-5 w-[400px] shadow-cyan-500 shadow-2xl rounded-2xl">
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
                    <span className="text-3xl text-center">Only me (Kamil Kijak)</span>
                </section>
            </>
        },
        "solitaire": {
            img:solitaireimg,
            title:"Solitaire Game",
            githubLink:"https://github.com/Kamil-Kijak/pasjans",
            doc:
            <>
                <section className="flex justify-center mt-10">
                    <span className="text-3xl text-center text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text font-extrabold h-[2.5rem]">Technologies have been used</span>
                </section>
                <section className="mt-10">
                    <section className="flex flex-row items-start justify-center flex-wrap">
                        <section className="flex flex-col items-center p-6 m-5 w-[400px] shadow-cyan-500 shadow-xl rounded-2xl">
                            <span className="text-7xl text-cyan-400 font-bold mb-5">C#</span>
                            <span className="text-3xl text-cyan-400 text-center">main programming language</span>
                        </section>
                    </section>
                </section>
                <section className="flex justify-center mt-10">
                    <span className="text-3xl text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text h-[2.5rem] font-extrabold">Description</span>
                </section>
                <section className="my-10 text-center">
                    <p>
                        Solitaire (pasjans in <span className="text-red-600">polish</span>) is a game about stacking cards with four different symbols in four stacks in correct order.
                        You can pick card from main stack, you can transfer cards in correct order to seven stacks where can also collect cards which you put
                         on end stacks at endgame. <span className="text-blue-700">Available</span> are undo moves, you can undo max three moves. In hard difficulty you pick three cards from main stack
                         instead one card. Each <span className="text-yellow-400">win game</span> score as number of moves, game date and difficulty is saved to the leaderboard.
                    </p>
                    <p className="mt-5 text-center">
                        Game is created fully in console environment using .NET technology version 8.0 to run this just type <span className="text-cyan-500">dotnet run</span> command in terminal localized in project folder.
                    </p>
                </section>
                <section className="flex justify-center mt-10">
                    <span className="text-3xl text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text h-[2.5rem] font-extrabold">Authors</span>
                </section>
                <section className="my-10 flex flex-col items-center">
                    <span className="text-3xl text-center">Only me (Kamil Kijak)</span>
                </section>
            </>
        }
    }
    return (
        <main className="bg-zinc-900 min-h-screen pt-14 pb-2 overflow-x-hidden">
            <section className="h-[500px] md:h-[450px]">
                <img src={projectsData[params["ID"]].img} className={`w-screen h-[400px] absolute`}  draggable="false" />
                <div className="bg-gradient-to-t from-black to-transparent absolute z-2 w-full h-[400px]"></div>
                <h1 className="text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text lg:text-8xl md:text-7xl text-6xl font-extrabold text-center top-90 absolute z-2 w-full">{projectsData[params["ID"]].title}</h1>
            </section>
            <section className="flex flex-col items-center">
                <div className="border-t-8 border-purple-700 w-[80vw]"></div>
                <a target="_blank" href={projectsData[params["ID"]].githubLink} className="text-white px-5 py-4 bg-gradient-to-r from-blue-700 to-purple-700
                                                    font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-5 text-xl
                                                    cursor-pointer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Open Github</a>
                <h1 className="text-white mt-15 text-4xl md:text-5xl font-extrabold">Documentation</h1>
                <section className="md:px-20 px-10 font-bold text-xl text-white self-center w-screen">
                    {projectsData[params["ID"]].doc || <p>No documentation</p>}
                </section>
            </section>
        </main>
    )
}