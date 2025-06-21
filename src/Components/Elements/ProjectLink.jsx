import { useEffect, useRef, useState } from "react"
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye } from "@fortawesome/free-solid-svg-icons";

export default function ProjectLink({imagesUrls = [], title = "project", subtitle = <p>desc</p>, link = "/"}) {

    const [pictureIndex, SetPictureIndex] = useState(0);
    const desc = useRef(null);
    const button = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            SetPictureIndex(prev => {
                if(prev + 1 >= imagesUrls.length) {
                    return 0;
                } else {
                    return prev + 1;
                }
            })
        }, 2000 - Math.random() * 500);
        return () => {clearInterval(interval)}
    }, [])
    return (
        <section className="w-[1fr] h-[300px] relative hover:z-5" onMouseEnter={() => {
            desc.current.classList.add("top-[90%]");
            desc.current.classList.remove("top-0");
            desc.current.classList.add("z-4");
            setTimeout(() => {
                button.current.classList.remove("hidden")
            }, 10)
        }} onMouseLeave={() => {
            desc.current.classList.remove("top-[90%]");
            desc.current.classList.add("top-0");
             desc.current.classList.remove("z-4");
             button.current.classList.add("hidden")
        }}>
            <img src={imagesUrls[pictureIndex]} className="rounded-2xl w-[100%] h-[300px] z-2 relative"  draggable="false"/>
            <section ref={desc} className="absolute w-[100%] h-[100%] top-0 transition-[top] duration-400 ease-in-out rounded-b-3xl rounded-t-2xl bg-gradient-to-b from-zinc-800 to-black">
                <h1 className="text-center lg:text-4xl text-3xl font-extrabold mt-10 text-blue-700">{title}</h1>
                {subtitle}
                <div className="flex justify-center">
                    <button ref={button} onClick={() => navigate(link)} className="hidden text-white px-4 py-3 bg-gradient-to-r from-blue-700 to-purple-700
                                    font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-5 text-md
                                    cursor-pointer"><FontAwesomeIcon icon={faEye} /> View project</button>
                </div>
            </section>
        </section>
    )
}