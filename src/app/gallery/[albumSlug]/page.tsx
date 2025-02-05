import Footer from "@/components/Footer";
import MasonryGrid from "@/components/GalleryPage/MasonryGrid";
import Navbar from "@/components/Navbar";

export default function Album() {
    return (
        <>
            <Navbar />
            <div className="w-full p-10">
                <div className="relative w-full flex items-center mb-8">
                    <h1 className="text-5xl xl:text-4xl font-serif inline-block z-[2] bg-background pr-3 xl:pr-8">Ladakh 2024 Landscapes</h1>
                    <div className="mx-auto w-full absolute top-[50%] hidden md:block">
                        <div className="absolute top-0 right-0 bg-gradient-to-l from-transparent to-primary w-full h-[2px] z-[1]"></div>
                    </div>
                </div>
                <MasonryGrid />
            </div>
            <Footer />
        </>
    );
}