
import PolandFlag from "../../img/aboutMe/polandFlag.jpg"
import Programming from "../../img/aboutMe/programming.jpg"
import Hobbies from "../../img/aboutMe/hobbies.jpg"
import Success from "../../img/aboutMe/success.jpg"
import Mind from "../../img/aboutMe/mind.jpg"

export default function AboutMe() {
    return (
        <main className="bg-zinc-900 min-h-screen pt-20 px-15">
            <section className="mt-40 pt-5 md:mx-8 shadow-xl shadow-red-700 rounded-2xl">
                <section className="flex flex-row md:justify-start justify-center items-center">
                    <span className="md:text-6xl text-4xl h-[5rem] md:ml-8 ml-0 self-center text-transparent bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text font-extrabold ">My origin</span>
                </section>
                <section className="md:mt-10 p-5 border-t-4 border-red-700
                 rounded-2xl flex flex-col md:flex-row justify-between items-center">
                    <span className="text-white font-bold text-xl basis-3/4 mr-0 md:mr-10 text-center md:text-left text-shadow-red-900 text-shadow-lg">
                        I am from Poland. Also my home language is Polish. I live near a Cracow city in small town, but I want to make carrier in Cracow city.
                         I have good plans about it.
                    </span>
                    <img src={PolandFlag} className="rounded-2xl basis-1/4 h-[200px] w-[400px] md:mt-0 mt-10"/>
                </section>
            </section>
            <section className="mt-40 pt-5 md:mx-8 shadow-xl shadow-purple-500 rounded-2xl">
                <section className="flex flex-row md:justify-start justify-center">
                    <span className="md:text-6xl text-4xl h-[5rem] md:ml-8 ml-0 self-center text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-700 bg-clip-text font-extrabold ">Character</span>
                </section>
                <section className="md:mt-10 p-5 border-t-4 border-purple-500
                 rounded-2xl flex flex-col md:flex-row justify-between items-center">
                    <span className="text-white font-bold text-xl basis-3/4 mr-0 md:mr-10 text-center md:text-left text-shadow-fuchsia-900 text-shadow-lg">
                        I always prefer cooperation to solve problems. I am very productive and
                         I like to starting a something new with projects. I can also find a good solution of the problem.
                         Also i can be a solo-worker i like work on my own with problems or project.
                         I have culture and i also can understand other people.
                    </span>
                    <img src={Mind} className="rounded-2xl basis-1/4 h-[200px] w-[400px] md:mt-0 mt-10"/>
                </section>
            </section>
            <section className="mt-40 pt-5 md:mx-8 shadow-xl shadow-cyan-500 rounded-2xl">
                <section className="flex flex-row md:justify-start justify-center">
                    <span className="md:text-6xl text-4xl h-[5rem] md:ml-8 ml-0 self-center text-transparent bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text font-extrabold ">Why IT?</span>
                </section>
                <section className="md:mt-10 p-5 border-t-4 border-cyan-500
                 rounded-2xl flex flex-col md:flex-row justify-between items-center">
                    <span className="text-white font-bold text-xl basis-3/4 mr-0 md:mr-10 text-center md:text-left text-shadow-blue-900 text-shadow-lg">
                        Tech things is always my main passion because i love logical things as Math and problem solving, also i know about computers and i was interested about how computers work. So i choose IT brand because I like it.
                    </span>
                    <img src={Programming} className="rounded-2xl basis-1/4 h-[200px] w-[400px] md:mt-0 mt-10"/>
                </section>
            </section>
            <section className="mt-40 pt-5 md:mx-8 shadow-xl shadow-orange-500 rounded-2xl">
                <section className="flex flex-row md:justify-start justify-center">
                    <span className="md:text-6xl text-4xl h-[5rem] md:ml-8 ml-0 self-center text-transparent bg-gradient-to-r from-orange-700 to-yellow-700 bg-clip-text font-extrabold ">My hobbies</span>
                </section>
                <section className="md:mt-10 p-5 border-t-4 border-orange-500
                 rounded-2xl flex flex-col md:flex-row justify-between items-center">
                    <span className="text-white font-bold text-xl basis-3/4 mr-0 md:mr-10 text-center md:text-left text-shadow-orange-900 text-shadow-lg">
                        I have many different hobbies. One of them is game programming I think that this
                         is a very creative to create own games, this required large amount of skills and patience, also i like playing games sometimes for relax,
                          create a pixelart style paintings. Also i like a create new different thinks and works with there.
                    </span>
                    <img src={Hobbies} className="rounded-2xl basis-1/4 h-[200px] w-[400px] md:mt-0 mt-10"/>
                </section>
            </section>
            <section className="mt-40 pt-5 md:mx-8 shadow-xl shadow-yellow-500 rounded-2xl">
                <section className="flex flex-row md:justify-start justify-center">
                    <span className="md:text-6xl text-4xl h-[5rem] md:ml-8 ml-0 self-center text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text font-extrabold ">My future</span>
                </section>
                <section className="md:mt-10 p-5 border-t-4 border-yellow-500
                 rounded-2xl flex flex-col md:flex-row justify-between items-center">
                    <span className="text-white font-bold text-xl basis-3/4 mr-0 md:mr-10 text-center md:text-left text-shadow-yellow-900 text-shadow-lg">
                        My target is be more productive and improve my skills, also i want to create something big with this learned skills
                        I try to be productive to complete all my plans for life and be satisfacted with my complete work and projects.
                    </span>
                    <img src={Success} className="rounded-2xl basis-1/4 h-[200px] w-[400px] md:mt-0 mt-10"/>
                </section>
            </section>
            <section className="mt-20 h-20 w-full"> </section>
        </main>
    )
}