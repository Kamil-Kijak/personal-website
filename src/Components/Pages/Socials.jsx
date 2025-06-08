
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"
export default function Socials() {
    return (
        <main className="bg-zinc-900 min-h-screen pb-[300px] pt-20">
            <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
                <section className="shadow-2xl shadow-orange-600 m-10 flex justify-center items-center flex-col rounded-2xl pb-5">
                    <FontAwesomeIcon icon={faInstagram} className="text-orange-600 text-8xl relative top-[-30px]"/>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-extrabold text-4xl h-[3rem]">Instagram</h1>
                    <div className="border-t-4 border-orange-400 m-5 w-[80%]"></div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-2xl font-bold">Nickname: kamilkijak</h1>
                    <p className="text-white font-bold text-center mt-5 mx-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate consequatur, velit itaque mollitia beatae facilis, fugiat suscipit excepturi, quas saepe illo modi qui ullam labore ipsum sit! Amet, neque consectetur.</p>
                    <a href="https://www.instagram.com/kamilkijak/" target="_blank" className="text-white px-4 py-3 bg-gradient-to-r from-orange-400 to-orange-600
                                                        font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-5 text-md
                                                        cursor-pointer"><FontAwesomeIcon icon={faEye}/> View account</a>
                </section>
            </section>
        </main>
    )
}