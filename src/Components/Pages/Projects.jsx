
import ProjectLink from "../Elements/ProjectLink"


export default function Projects() {
    return (
        <main className="bg-zinc-900 min-h-screen pb-[300px]">
            <section className="mx-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-20 gap-x-10 gap-y-20">
                <ProjectLink
                    link="/project/spaceshoot"
                    imagesUrls={[
                        "./src/img/projects/spaceshoot/1.png",
                        "./src/img/projects/spaceshoot/2.png",
                        "./src/img/projects/spaceshoot/3.png",
                        "./src/img/projects/spaceshoot/4.png"
                    ]}
                    title="Spaceshoot game"
                    subtitle={
                        <div className="md:text-base text-xs">
                            <div className="border-t-4 border-cyan-300 m-5"></div>
                            <p className="text-white font-bold mx-5">Game created in <span className="text-cyan-400 font-extrabold">C#</span> programming language
                            using XNA framework for creating games. Game is about <span className="text-blue-700 font-extrabold">survive waves of enemies as spaceship.</span>
                            </p>
                        </div>
                    }
                ></ProjectLink>
                <ProjectLink
                    link="/project/solitaire"
                    imagesUrls={[
                        "./src/img/projects/solitaire/1.png",
                        "./src/img/projects/solitaire/2.png",
                        "./src/img/projects/solitaire/3.png",
                        "./src/img/projects/solitaire/4.png",
                        "./src/img/projects/solitaire/5.png"
                    ]}
                    title="Solitaire game"
                    subtitle={
                        <div className="md:text-base text-xs">
                            <div className="border-t-4 border-red-700 m-5"></div>
                            <p className="text-white font-bold mx-5">Game created in <span className="text-cyan-400 font-extrabold">C#</span> programming language
                             in vanilla console. Game is a <span className="text-blue-700 font-extrabold">classic solitaire game</span> about stack all of cards in four stacks.
                            </p>
                        </div>
                    }
                ></ProjectLink>
            </section>
        </main>
    )
}