
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header() {
    return (
        <nav className="bg-black flex py-2 items-center fixed top-0 left-0 right-0 border-b-4 border-b-zinc-700">
            <section className="ml-5 basis-1/6">
                <FontAwesomeIcon icon={faBars} className="text-white scale-150" />
            </section>
            <section className="mx-2 basis-5/6 flex justify-evenly">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Kamil Kijak Website</span>
            </section>
        </nav>
    )
}