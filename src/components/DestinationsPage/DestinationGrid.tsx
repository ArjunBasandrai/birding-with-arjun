import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Destination {
    region: string;
    locations: {
        name: string;
        image: string;
        link: string;
    }[];
}

export default function DestinationGrid() {
    const destinations: Destination[] = [
        {
            region: "North India",
            locations: [
                { name: "Ladakh", image: "/hero2.jpg", link: "/destinations/ladakh" },
                { name: "Punjab", image: "/hero3.jpg", link: "/destinations/punjab" },
                { name: "Himachal Pradesh", image: "/hero.jpg", link: "/destinations/himachal-pradesh" },
                { name: "Uttarakhand", image: "/hero3.jpg", link: "/destinations/uttarakhand" }
            ]
        },
        {
            region: "West India",
            locations: [
                { name: "Gujarat", image: "/hero.jpg", link: "/destinations/gujarat" },
                { name: "Goa", image: "/hero2.jpg", link: "/destinations/goa" }
            ]
        },
        {
            region: "South India",
            locations: [
                { name: "Andaman & Nicobar Islands", image: "/hero3.jpg", link: "/destinations/andaman-nicobar-islands" },
                { name: "Tamil Nadu", image: "/hero.jpg", link: "/destinations/tamil-nadu" },
                { name: "Karnataka", image: "/hero3.jpg", link: "/destinations/karnataka" }
            ]
        },
        {
            region: "International",
            locations: [
                { name: "Thailand", image: "/hero.jpg", link: "/destinations/thailand" },
                { name: "United Arab Emirates", image: "/hero2.jpg", link: "/destinations/united-arab-emirates" }
            ]
        }
    ];

    const region_names: string[] = destinations.map(destination => destination.region);

    return (
        <>
            <div className="px-16 md:px-8 xl:px-0">
                <div className="w-full max-w-5xl mx-auto py-4 px-2 mt-10 box-shadow flex flex-col items-center justify-center space-y-2">
                    <h3 className="text-black text-2xl xl:text-3xl font-bold">Jump to section:</h3>
                    <div className="ml-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center justify-center w-full">
                        {region_names.map((region_name, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && <span className="text-black hidden md:block text-4xl">•</span>}
                                <Link href={`#${region_name.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="text-primary text-xl xl:text-2xl uppercase font-bold hover:text-primary-dark transition-all duration-300">
                                    {region_name}
                                </Link>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <div className="pt-8 px-4 md:p-10 md:pb-2">
                {destinations.map((destination, index) => (
                    <div key={index} className="mb-8" id={destination.region.toLowerCase().replace(" ", "-")}>
                        <div className="relative w-full flex justify-center items-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-serif text-center z-[2] bg-background px-2 md:px-8">{destination.region}</h2>
                            <div className="max-w-6xl mx-auto w-full absolute top-[50%]">
                                <div className="absolute top-0 left-0 bg-gradient-to-r from-transparent to-primary w-[50%] h-[2px] z-[1]"></div>
                                <div className="absolute top-0 right-0 bg-gradient-to-l from-transparent to-primary w-[50%] h-[2px] z-[1]"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden max-w-6xl mx-auto px-0 xl:px-6">
                            {destination.locations.map((location, index) => (
                                <Link key={index} href={location.link} className="group block relative rounded-md overflow-hidden shadow-lg transition-transform transform">
                                    <div className="relative w-full h-64">
                                        <Image
                                            src={location.image}
                                            alt={location.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 h-[30%] w-full bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                                    <div className="absolute bottom-0 h-[30%] w-full flex items-center justify-center">
                                        <h3 className="text-white text-2xl font-semibold uppercase text-center">{location.name}</h3>
                                    </div>

                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
