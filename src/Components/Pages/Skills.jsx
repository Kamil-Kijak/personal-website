
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
                        <div className="w-5 h-5 rounded-full bg-blue-600 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center">2023 - 2028 - Learning in Polish technical school on <span className="underline decoration-2">programist profile</span></p>
                    </section>
                </section>
                <section className="flex flex-col items-center mt-20">
                    <span className="text-green-700 text-6xl font-extrabold text-center">language skills</span>
                    <div className="w-[80%] border-t-4 border-t-white mt-4"></div>
                    <section className="flex flex-col lg:items-start items-center justify-center">
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
                        {/* <div className="w-5 h-5 rounded-full bg-red-600 mr-5 lg:mb-0 mb-3"></div> */}
                        <p className="text-white text-2xl font-bold text-center">I don't have any one yet!</p>
                    </section>
                </section>
                <section className="flex flex-col items-center mt-30">
                    <span className="text-yellow-500 text-6xl font-extrabold text-center">Useful skills</span>
                    <div className="w-[80%] border-t-4 border-t-white mt-4"></div>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-yellow-500 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">problem solving - I love solve problems with code, technicals problems and also teamwork problems</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-red-600 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">critical thinking - I think logically to break the problem with my code that I write and give best solution which I know</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-purple-600 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">creative ideas - I love implement my ideas to project, I have many creative ideas to increase quality of project</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-green-600 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">teamwork - I like work with others on projects for better version of project</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-orange-600 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">self-improvement - I love improve all time my skills. I want to be better and better with many tech things</p>
                    </section>
                </section>
                <section className="flex flex-col items-center mt-30">
                    <span className="text-fuchsia-600 text-6xl font-extrabold text-center">tech skills</span>
                    <div className="w-[80%] border-t-4 border-t-white mt-4"></div>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-sky-600 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">C# - advanced language skills, experience in game making using XNA and apps in console for example: <span className="underline decoration-2">Console solitaire, spaceshoot</span></p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-yellow-400 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">JS - advanced language skills, experience in vanilla and basic in react projects. Backend in node.js</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-yellow-600 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">Python - basic skills in vanilla python. I want to learn more advanced frameworks</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-red-700 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">SQL - advanced skills, experience with design databases, operating with data</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-green-600 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">MongoDB - beginner skills with creating and operating databases, collections</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-purple-800 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">PHP - advanced skills, experience in creating backend, connecting database, creating functionality</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-cyan-300 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">Tailwind - advanced skills in stylizing elements on sites. <span className="underline decoration-2">This site have been stylized using Tailwind</span></p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-orange-800 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">HTML, CSS - great experience with building sites and stylizing it</p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-blue-600 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">React.js - basic skills and basic experience with small projects. <span className="underline decoration-2">This site have been built using react</span></p>
                    </section>
                    <section className="flex lg:flex-row flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-lime-500 mr-5 lg:mb-0 mb-3"></div>
                        <p className="text-white text-2xl font-bold text-center w-[90%]">Node.js and Express.js - basic skills experience with creating backend code and rest api for applications and systems</p>
                    </section>
                </section>
            </section>
        </main>
    )
}