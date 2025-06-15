
import polandFlag from "../../img/languages/polandFlag.avif"
import usaFlag from "../../img/languages/usaFlag.jpeg"

export default function Skills() {
    return (
        <main className="bg-zinc-900 min-h-screen pb-[100px] pt-20 px-10">
            <section className="flex flex-col justify-center items-center">
                <section className="flex flex-col items-center mt-10">
                    <span className="text-cyan-500 text-6xl font-extrabold text-center">Education</span>
                    <div className="w-[80%] border-t-4 border-t-white mt-4"></div>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-blue-600 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">2023 - 2028 - Learning in Polish technical school on <span className="underline decoration-2">programist profile</span></p>
                    </section>
                </section>
                <section className="flex flex-col items-center mt-20">
                    <span className="text-green-700 text-6xl font-extrabold text-center">language skills</span>
                    <div className="w-[80%] border-t-4 border-t-white mt-4"></div>
                    <section className="flex flex-col items-start">
                        <section className="flex lg:flex-row flex-col items-center justify-center mt-10">
                            <img src={polandFlag} className="rounded-full w-[150px] h-[150px]" draggable="false"/>
                            <h1 className="text-white text-3xl font-bold text-center m-5">Polish - home language</h1>
                        </section>
                        <section className="flex lg:flex-row flex-col items-center justify-center mt-10">
                            <img src={usaFlag} className="rounded-full w-[150px] h-[150px]" draggable="false"/>
                            <h1 className="text-white text-3xl font-bold text-center m-5">English - B1 language level</h1>
                        </section>
                    </section>
                </section>
                <section className="flex flex-col items-center mt-20">
                    <span className="text-red-500 text-6xl font-extrabold text-center">Work experience</span>
                    <div className="w-[80%] border-t-4 border-t-white mt-4"></div>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        {/* <div className="w-5 h-5 rounded-full bg-red-600 mr-5"></div> */}
                        <p className="text-white text-2xl font-bold text-center">I don't have any one yet!</p>
                    </section>
                </section>
                <section className="flex flex-col items-center mt-30">
                    <span className="text-fuchsia-600 text-6xl font-extrabold text-center">tech skills</span>
                    <div className="w-[80%] border-t-4 border-t-white mt-4"></div>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-sky-600 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">C# - advanced language skills, experience in game making using XNA and apps in console for example: <span className="underline decoration-2">Console solitaire, spaceshoot</span></p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-yellow-400 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">JS - advanced language skills, experience in vanilla and basic in react projects. Backend in node.js</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-yellow-600 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">Python - basic skills in vanilla python. I want to learn app creation</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-red-700 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">SQL - advanced skills, experience with design databases</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-green-600 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">MongoDB - beginner skill with creating databases</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-purple-800 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">PHP - basic skills, experience in creating backend, connecting database, creating functionality</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-cyan-300 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">Tailwind - advanced skills in styling elements on sites. <span className="underline decoration-2">This site have been stylied using Tailwind</span></p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-orange-800 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">HTML, CSS - great experience with building all sites</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-blue-600 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">React.js - basic skills and basic experience with small projects. <span className="underline decoration-2">This site have been built using react</span></p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-lime-500 mr-5"></div>
                        <p className="text-white text-2xl font-bold text-center">Node.js and Express.js - basic skills experience with creating backend to frontend</p>
                    </section>
                </section>
            </section>
        </main>
    )
}