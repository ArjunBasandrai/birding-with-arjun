import BirdsGrid from "@/components/BirdsPage/BirdsGrid";
import BirdsHero from "@/components/BirdsPage/BirdsHero";
import Footer from "@/components/Footer";
import Contact from "@/components/HomePage/Contact";
import Navbar from "@/components/Navbar";

export default function BirdList() {
    return (
        <>
            <Navbar />
            <BirdsHero />
            <BirdsGrid  />
            <Contact />
            <Footer />
        </>
    );
}