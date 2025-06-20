

import { useEffect, useState } from "react"
import Header from "../Sections/Header"
import NavMenu from "../Sections/NavMenu"
import { useLocation } from "react-router-dom";

export default function Navigation() {

    const [active, SetActive] = useState(false);
    const [title, SetTitle] = useState("Home");
    const location = useLocation();
    useEffect(() => {
        const titles = {
            "":"Home",
            "aboutMe": "About Me",
            "projects":"Projects",
            "achivements": "Achivements",
            "skills":"Skills",
            "socials":"Social Media",
            "project":"Project"
        }
        SetTitle(titles[location.pathname.split("/")[1]] || "Home")
    })
    return (
        <section className="w-screen">
            <Header
                onToggleNavbarClicked={() => {
                    SetActive(!active)
                    document.body.style.overflow = "hidden"
                }}
                title={title}
            ></Header>
            {active &&
            <NavMenu
                onHideSidebar={() => {
                    SetActive(false)
                }}
            ></NavMenu>}
        </section>
    )
}