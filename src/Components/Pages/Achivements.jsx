
import AchivementLink from "../Elements/AchivementLink"

export default function Achivements({}) {
    return (
        <main className="bg-zinc-900 min-h-screen pb-[300px]">
            <section className="mx-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-20 gap-x-10 gap-y-20">
                <AchivementLink
                    link="./documents/certificates/c_sharp_basic certificate.pdf"
                    title="C# basic certificate"
                    imageUrl="./src/img/achivements/cs_basic.png"
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
                    link="./documents/certificates/sql_intermediate certificate.pdf"
                    title="SQL intermediate certificate"
                    imageUrl="./src/img/achivements/sql_intermediate.png"
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
                    link="./documents/certificates/javascript_intermediate certificate.pdf"
                    title="JS intermediate certificate"
                    imageUrl="./src/img/achivements/js_intermediate.png"
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
                    link="./documents/certificates/js-certificate.pdf"
                    title="JS certificate"
                    imageUrl="./src/img/achivements/javascript.png"
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
                    link="./documents/certificates/css-certificate.pdf"
                    title="CSS certificate"
                    imageUrl="./src/img/achivements/css.png"
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