import DestinationGrid from "@/components/DestinationsPage/DestinationGrid";
import DestinationsHero from "@/components/DestinationsPage/DestinationsHero";
import Footer from "@/components/Footer";
import Contact from "@/components/HomePage/Contact";
import Navbar from "@/components/Navbar";

export default function Destinations() {
    return (
        <>
            <Navbar />
            <DestinationsHero />
            <DestinationGrid />
            <Contact />
            <Footer />
        </>
    );
}