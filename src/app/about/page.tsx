import AboutHero from "@/components/AboutPage/Hero";
import Profile from "@/components/AboutPage/Profile";
import Footer from "@/components/Footer";
import Contact from "@/components/HomePage/Contact";
import Navbar from "@/components/Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <AboutHero />
            <Profile />
            <Contact />
            <Footer />
        </>
    );
}