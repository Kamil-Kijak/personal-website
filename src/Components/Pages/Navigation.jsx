

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
            "/":"Home",
            "/aboutMe": "About Me",
            "/projects":"Projects",
            "/achivements": "Achivements",
            "/timeline":"Time line",
            "/socialMedia":"Social Media"
        }
        SetTitle(titles[location.pathname] || "Home")
    })
    return (
        <section className="w-screen">
            <Header onToggleNavbarClicked={() => {SetActive(!active)}} title={title}></Header>
            {active && <NavMenu onHideSidebar={() => {SetActive(false)}}></NavMenu>}
        </section>
    )
}