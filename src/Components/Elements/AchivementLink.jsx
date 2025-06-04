import { useRef} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye } from "@fortawesome/free-solid-svg-icons";

export default function AchivementLink({imageUrl = "", title = "achivement", subtitle = <p>desc</p>, link = "/"}) {

    const desc = useRef(null);

    return (
        <section className="w-[1fr] h-[300px] relative hover:z-5 z-2" onMouseEnter={() => {
            desc.current.classList.add("top-[90%]");
            desc.current.classList.remove("top-0");
        }} onMouseLeave={() => {
            desc.current.classList.remove("top-[90%]");
            desc.current.classList.add("top-0");
        }}>
            <img src={imageUrl} className="rounded-2xl w-[100%] h-[300px] z-4 relative bg-contain overflow-hidden transition-transform duration-200 ease-in-out"/>
            <section ref={desc} className="absolute w-[100%] h-[100%] top-0 z-2 transition-[top] duration-400 ease-in-out bg-black rounded-b-3xl rounded-t-2xl">
                <h1 className="text-center h-[2.8rem] text-4xl font-extrabold mt-10 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">{title}</h1>
                {subtitle}
                <div className="flex justify-center">
                    <a href={link} target="_blank" className="text-white px-4 py-3 bg-gradient-to-r from-blue-700 to-purple-700
                                    font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-5 text-md
                                    cursor-pointer"><FontAwesomeIcon icon={faEye} /> View achivement</a>
                </div>
            </section>
        </section>
    )
}