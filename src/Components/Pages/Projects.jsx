
import ProjectLink from "../Elements/ProjectLink"
import spaceshootimg1 from "../../img/projects/spaceshoot/1.png"
import spaceshootimg2 from "../../img/projects/spaceshoot/2.png"
import spaceshootimg3 from "../../img/projects/spaceshoot/3.png"
import spaceshootimg4 from "../../img/projects/spaceshoot/4.png"

import solitaireimg1 from "../../img/projects/solitaire/1.png"
import solitaireimg2 from "../../img/projects/solitaire/2.png"
import solitaireimg3 from "../../img/projects/solitaire/3.png"
import solitaireimg4 from "../../img/projects/solitaire/4.png"
import solitaireimg5 from "../../img/projects/solitaire/5.png"


export default function Projects() {
    return (
        <main className="bg-zinc-900 min-h-screen pb-[300px]">
            <section className="mx-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-20 gap-x-10 gap-y-20">
                <ProjectLink
                    link="/project/spaceshoot"
                    imagesUrls={[
                        spaceshootimg1,
                        spaceshootimg2,
                        spaceshootimg3,
                        spaceshootimg4
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
                />
                <ProjectLink
                    link="/project/solitaire"
                    imagesUrls={[
                        solitaireimg1,
                        solitaireimg2,
                        solitaireimg3,
                        solitaireimg4,
                        solitaireimg5
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
                />
            </section>
        </main>
    )
}