
import { faCircleInfo, faBriefcase, faTrophy, faStar} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {

    return(
        <main className="bg-zinc-900 min-h-screen">
            <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-zinc-900 to-zinc-950">
                <FontAwesomeIcon icon={faStar} className="text-blue-700 text-8xl mb-6"/>
                <span className="md:text-8xl text-6xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Welcome!</span>
                <span className="text-5xl font-extrabold text-zinc-600 mt-10">To My site</span>
            </section>
            <section className="flex flex-col justify-center items-center">
                <section className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faCircleInfo} className="text-blue-700 text-6xl"/>
                    <span className="text-white text-6xl font-bold">My Info</span>
                    <div className="w-full border-t-4 border-t-white mt-4"></div>
                </section>
                <section className="sm:mx-50 md:mx-25 mx-5 mt-5">
                    <span className="text-white text-wrap font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste magnam error placeat sequi corporis est rem minus laudantium animi nemo, expedita nihil vel, neque suscipit itaque. Ipsam voluptatibus excepturi vitae!</span>
                </section>
                <section className="flex flex-col items-center mt-30">
                    <FontAwesomeIcon icon={faBriefcase} className="text-red-700 text-6xl"/>
                    <span className="text-white text-6xl font-bold">Preferences</span>
                    <div className="w-full border-t-4 border-t-white mt-4"></div>
                </section>
                <section className="sm:mx-50 md:mx-25 mx-5 mt-5">
                    <span className="text-white text-wrap font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste magnam error placeat sequi corporis est rem minus laudantium animi nemo, expedita nihil vel, neque suscipit itaque. Ipsam voluptatibus excepturi vitae!</span>
                </section>
                <section className="flex flex-col items-center mt-30">
                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-6xl"/>
                    <span className="text-white text-6xl font-bold">Goal</span>
                    <div className="w-full border-t-4 border-t-white mt-4"></div>
                </section>
                <section className="sm:mx-50 md:mx-25 mx-5 my-5 ">
                    <span className="text-white text-wrap font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste magnam error placeat sequi corporis est rem minus laudantium animi nemo, expedita nihil vel, neque suscipit itaque. Ipsam voluptatibus excepturi vitae!</span>
                </section>
            </section>
        </main>
    )
}