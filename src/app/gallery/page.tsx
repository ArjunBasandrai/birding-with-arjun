import Footer from "@/components/Footer";
import Contact from "@/components/HomePage/Contact";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

function Albums({ title, albums }: { title: string; albums: string[][] }) {
    return (
        <div className="w-full pt-10 px-2 sm:px-3 md:px-4 lg:px-7 xl:px-10">
            <div className="relative w-full flex items-center mb-8">
                <h2 className="text-5xl xl:text-4xl font-serif inline-block z-[2] bg-background pr-3 xl:pr-8">{title} Albums</h2>
                <div className="mx-auto w-full absolute top-[50%] hidden md:block">
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-transparent to-primary w-full h-[2px] z-[1]"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {albums.map((album, index) => (
                    <div key={index} className="mb-5 group">
                        <Link href={"/gallery/" + album[2]} className="block w-full h-full">
                            <div className="relative h-[500px] overflow-hidden">
                                <Image
                                    src={album[1]}
                                    alt={album[0]}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-300"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            </div>
                            <h3 className="text-center text-xl mt-2 px-4 text-black group-hover:text-primary-dark transition-all duration-300">{album[0]}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Gallery() {
    const landscape_albums = [
        ["Ladakh 2024 Landscapes", "/hero.jpg", "link"],
        ["Andaman & Nicobar Islands 2025 Landscapes", "/hero.jpg", "link"],
        ["Spiti 2019 Landscapes", "/hero.jpg", "link"],
        ["Kashmir 2024 Landscapes", "/hero.jpg", "link"],
        ["Rajasthan 2021 Landscapes", "/hero.jpg", "link"],
    ];
    const bird_albums = [
        ["Birds of Phillaur", "/hero.jpg", "link"],
        ["Birds of South Andaman Islands", "/hero.jpg", "link"],
        ["Birds of Pulicat", "/hero.jpg", "link"],
        ["Birds of Shimla", "/hero.jpg", "link"],
        ["Birds of Nilgiris", "/hero.jpg", "link"],
        ["Birds of Kashmir", "/hero.jpg", "link"],
        ["Birds of Rajasthan", "/hero.jpg", "link"],
    ];
    const butterfly_albums = [
        ["Butterflies of Kashmir", "/hero.jpg", "link"],
        ["Butterflies of Pondicherry", "/hero.jpg", "link"],
        ["Butterflies of Gujarat", "/hero.jpg", "link"],
        ["Butterflies of Phillaur", "/hero.jpg", "link"],
        ["Butterflies of Andaman & Nicobar Islands", "/hero.jpg", "link"],
        ["Butterflies of Shimla", "/hero.jpg", "link"],
    ];

    return (
        <>
            <Navbar />
            <Albums title="Birds" albums={bird_albums} />
            <Albums title="Landscapes" albums={landscape_albums} />
            <Albums title="Butterflies" albums={butterfly_albums} />
            <Contact />            
            <Footer />
        </>
    );
}
