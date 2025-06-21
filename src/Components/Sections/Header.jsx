
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header({onToggleNavbarClicked, title}) {

    return (
        <nav className="bg-black flex py-2 items-center justify-between fixed top-0 left-0 right-0 border-b-4 border-b-white z-10">
            <section className="mx-5 hover:rotate-90 duration-200 transition-transform ease-in-out">
                <FontAwesomeIcon icon={faBars} className="text-white scale-150 cursor-pointer" onClick={onToggleNavbarClicked} />
            </section>
            <section className="ml-2">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">{title || "Home"}</span>
            </section>
            <section className="mx-2">
                <span className="sm:block hidden text-3xl mr-3 font-bold text-blue-700">Kamil Kijak Website</span>
            </section>
        </nav>
    )
}