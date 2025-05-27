

import { useState } from "react"
import Header from "../Sections/Header"
import NavMenu from "../Sections/NavMenu"

export default function Navigation() {

    const [active, SetActive] = useState(false);
    const [title, SetTitle] = useState("Home");
    return (
        <section className="w-screen">
            <Header onToggleNavbarClicked={() => {SetActive(!active)}} title={title}></Header>
            {active && <NavMenu onHideSidebar={() => {SetActive(false)}} onChangePage={(title) => SetTitle(title)}></NavMenu>}
        </section>
    )
}