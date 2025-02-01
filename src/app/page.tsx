import Hero from "@/components/HomePage/Hero";
import RecentAdventures from "@/components/HomePage/RecentAdventures";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col flex-grow min-h-0">
          <Hero />
        </div>
      </div>
      <RecentAdventures />
    </>
  );
}
