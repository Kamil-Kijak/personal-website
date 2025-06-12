
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom";

import ProfilePicture from "../../img/ProfilePicture.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function NavMenu({onHideSidebar}) {
    const screenShadow = useRef(null);
    const sideCard = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            screenShadow.current.classList.add("opacity-75")
            sideCard.current.classList.remove("transform-[translateX(-100%)]");
        }, 10);
        const handleKeyDown = (event) => {
            if(event.key == "Escape") {
                hideSideBar();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return (() => {
            window.removeEventListener("keydown", handleKeyDown);
        })
    }, []);

    const hideSideBar = () => {
        setTimeout(() => {
            screenShadow.current.classList.remove("opacity-75")
            sideCard.current.classList.add("transform-[translateX(-100%)]");
        }, 10);
        setTimeout(() => {
            onHideSidebar && onHideSidebar()
        }, 500) 
    }

    return (
        <>
            <nav ref={sideCard} className="overflow-y-scroll sm:overflow-y-hidden fixed top-0 bottom-0 transform-[translateX(-100%)]
             z-15 bg-black w-[320px] rounded-r-4xl border-r-zinc-800 border-r-8 duration-500 transition-all">
                <section className="flex flex-col items-center p-5">
                    <section className="flex flex-col items-center">
                        <span className=" text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Kamil Kijak</span>
                        <img src={ProfilePicture} alt="profile picture" className="mt-6 rounded-full w-[200px] h-[200px]"/>
                        <button className="text-white px-5 py-4 bg-gradient-to-r from-blue-700 to-purple-700
                         font-bold rounded-2xl hover:scale-125 transition-transform duration-200 ease-in-out mt-8 text-xl
                          cursor-pointer"><FontAwesomeIcon icon={faDownload} /> Download CV</button>
                    </section>
                    <div className="w-full border-t-4 border-t-white mt-4"></div>
                </section>
                <section className="flex flex-col items-start ml-5 px-5 gap-3">
                    <Link to="/" onClick={() => {
                        hideSideBar()
                    }}>
                        <section className="flex items-center cursor-pointer hover:translate-x-6 duration-200 transition-transform ease-in-out">
                            <div className="w-5 h-5 rounded-full bg-blue-600 mr-5"></div>
                            <span className="text-white text-3xl font-bold">Home</span>
                        </section>
                    </Link>
                    <Link to="/aboutMe" onClick={() => {
                        hideSideBar()
                    }}>
                        <section className="flex items-center cursor-pointer hover:translate-x-6 duration-200 transition-transform ease-in-out">
                            <div className="w-5 h-5 rounded-full bg-purple-600 mr-5"></div>
                            <span className="text-white text-3xl font-bold">About Me</span>
                        </section>
                    </Link>
                    <Link to="/projects" onClick={() => {
                        hideSideBar()
                    }}>
                        <section className="flex items-center cursor-pointer hover:translate-x-6 duration-200 transition-transform ease-in-out">
                            <div className="w-5 h-5 rounded-full bg-yellow-500 mr-5"></div>
                            <span className="text-white text-3xl font-bold">Projects</span>
                        </section>
                    </Link>
                    <Link to="/skills" onClick={() => {
                        hideSideBar()
                    }}>
                        <section className="flex items-center cursor-pointer hover:translate-x-6 duration-200 transition-transform ease-in-out">
                            <div className="w-5 h-5 rounded-full bg-green-600 mr-5"></div>
                            <span className="text-white text-3xl font-bold">Skills</span>
                        </section>
                    </Link>
                    <Link to="/achivements" onClick={() => {
                        hideSideBar()
                    }}>
                        <section className="flex items-center cursor-pointer hover:translate-x-6 duration-200 transition-transform ease-in-out">
                            <div className="w-5 h-5 rounded-full bg-red-600 mr-5"></div>
                            <span className="text-white text-3xl font-bold">Achivements</span>
                        </section>
                    </Link>
                    <Link to="/socials" onClick={() => {
                        hideSideBar()
                    }}>
                        <section className="flex items-center cursor-pointer hover:translate-x-6 duration-200 transition-transform ease-in-out">
                            <div className="w-5 h-5 rounded-full bg-orange-600 mr-5"></div>
                            <span className="text-white text-3xl font-bold">Social Media</span>
                        </section>
                    </Link>
                </section>
                 <section className="flex flex-col items-center p-5">
                    <div className="w-full border-t-4 border-t-white mt-4"></div>
                    <span className="text-zinc-600 font-bold mt-3">© Copyright Kamil Kijak</span>
                </section>
            </nav>
            <section ref={screenShadow} onClick={hideSideBar} className="z-12 fixed top-0 bottom-0 left-0 right-0 opacity-0 bg-black duration-500 ease-out transition-all">

            </section>
        </>
    )
}