
import AchivementLink from "../Elements/AchivementLink"

import pdf1 from "../../documents/certificates/c_sharp_basic certificate.pdf"
import pdf2 from "../../documents/certificates/sql_intermediate certificate.pdf"
import pdf3 from "../../documents/certificates/javascript_intermediate certificate.pdf"
import pdf4 from "../../documents/certificates/js-certificate.pdf"
import pdf5 from "../../documents/certificates/css-certificate.pdf"

import img1 from "../../img/achivements/cs_basic.png"
import img2 from "../../img/achivements/sql_intermediate.png"
import img3 from "../../img/achivements/js_intermediate.png"
import img4 from "../../img/achivements/javascript.png"
import img5 from "../../img/achivements/css.png"

export default function Achivements({}) {
    return (
        <main className="bg-zinc-900 min-h-screen pb-[300px]">
            <section className="mx-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-20 gap-x-10 gap-y-20">
                <AchivementLink
                    link={pdf1}
                    title="C# basic certificate"
                    imageUrl={img1}
                    subtitle={
                        <div className="md:text-base text-xs">
                            <div className="border-t-4 border-cyan-500 m-5"></div>
                            <p className="text-white font-bold mx-5">
                                C# basic certificate issued by <span className="text-green-600">HackerRank</span> which presents my skill in C# language
                            </p>
                        </div>
                    }
                />
                <AchivementLink
                    link={pdf2}
                    title="SQL intermediate certificate"
                    imageUrl={img2}
                    subtitle={
                        <div className="md:text-base text-xs">
                            <div className="border-t-4 border-purple-700 m-5"></div>
                            <p className="text-white font-bold mx-5">
                                SQL intermediate certificate issued by <span className="text-green-600">HackerRank</span> which presents my skill in SQL
                            </p>
                        </div>
                    }
                />
                <AchivementLink
                    link={pdf3}
                    title="JS intermediate certificate"
                    imageUrl={img3}
                    subtitle={
                        <div className="md:text-base text-xs">
                            <div className="border-t-4 border-yellow-500 m-5"></div>
                            <p className="text-white font-bold mx-5">
                                JavaScript intermediate certificate issued by <span className="text-green-600">HackerRank</span> which presents my skill in JavaScript
                            </p>
                        </div>
                    }
                />
                <AchivementLink
                    link={pdf4}
                    title="JS certificate"
                    imageUrl={img4}
                    subtitle={
                        <div className="md:text-base text-xs">
                            <div className="border-t-4 border-yellow-500 m-5"></div>
                            <p className="text-white font-bold mx-5">
                                JavaScript certificate issued by <span className="text-blue-900">FreeCodeCamp</span> which presents my skill in JavaScript algorithms and data structures
                            </p>
                        </div>
                    }
                />
                <AchivementLink
                    link={pdf5}
                    title="CSS certificate"
                    imageUrl={img5}
                    subtitle={
                        <div className="md:text-base text-xs">
                            <div className="border-t-4 border-sky-300 m-5"></div>
                            <p className="text-white font-bold mx-5">
                                Web design and CSS certificate issued by <span className="text-blue-900">FreeCodeCamp</span> which presents my skill in responsible web design using CSS
                            </p>
                        </div>
                    }
                />
            </section>
        </main>
    )
}