import Image from "next/image";
import Link from "next/link";

interface RecentAdventuresProps {
    data: {
        title: string;
        img: string;
        href: string;
    }[];
}

export default function RecentAdventures() {
    const data: RecentAdventuresProps["data"] = [
        { title: "Andaman & Nicobar Islands 2025", img: "hero.jpg", href: "/andaman" },
        { title: "Ladakh 2024", img: "hero.jpg", href: "/ladakh" },
        { title: "Ooty & Conoor 2024", img: "hero.jpg", href: "/fishing" },
    ];

    return (
        <>
            <section className="bg-white text-black py-14 xl:px-10">
                <div className="relative w-full flex justify-center items-center">
                    <h2 className="text-5xl xl:text-4xl font-serif inline-block text-center z-[2] bg-white px-8">My recent adventures</h2>
                    <div className="max-w-6xl mx-auto w-full absolute top-[50%] hidden xl:block">
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-transparent to-primary w-[50%] h-[2px] z-[1]"></div>
                        <div className="absolute top-0 right-0 bg-gradient-to-l from-transparent to-primary w-[50%] h-[2px] z-[1]"></div>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row w-full xl:max-w-6xl mx-auto mt-12 gap-0">
                    {data.map((element, index) => (
                        <div key={index} className={`flex-1 flex flex-col items-center ${index != data.length - 1 ? "mb-8" : "mb-0"} xl:mb-0`}>
                            <Link href={element["href"]} key={index}>
                                <div className="w-[22.25rem] h-80 xl:w-80 xl:h-80 relative group overflow-hidden">
                                    <Image
                                        src={`/${element["img"]}`}
                                        alt={`Adventure ${index + 1}`}
                                        fill
                                        priority
                                        className="object-cover group-hover:scale-110 transition-all duration-200"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full z-[10] bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                                </div>
                                <div className="mt-4 text-center font-serif max-w-60 mx-auto text-black hover:text-primary-dark transition-all duration-300">
                                    <h3 className="text-2xl font-medium">{element["title"]}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}