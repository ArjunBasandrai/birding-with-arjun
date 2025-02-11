"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Species {
    name: string;
    link: string;
    image: string;
}

interface BirdListProps {
    genus: string;
    species: Species[];
}

export default function BirdsGrid() {
    const birds: BirdListProps[] = [
        {
            genus: "Accipiter",
            species: [
                {
                    name: "Northern Goshawk",
                    link: "/northern-goshawk",
                    image: "/hero.jpg"
                },
                {
                    name: "Sharp-shinned Hawk",
                    link: "/sharp-shinned-hawk",
                    image: "/hero2.jpg"
                },
                {
                    name: "Cooper's Hawk",
                    link: "/coopers-hawk",
                    image: "/hero3.jpg"
                }
            ]
        },
        {
            genus: "Aquila",
            species: [
                {
                    name: "Golden Eagle",
                    link: "/golden-eagle",
                    image: "/hero3.jpg"
                }
            ]
        },
        {
            genus: "Buteo",
            species: [
                {
                    name: "Red-tailed Hawk",
                    link: "/red-tailed-hawk",
                    image: "/hero.jpg"
                }
            ]
        },
        {
            genus: "Circus",
            species: [
                {
                    name: "Northern Harrier",
                    link: "/northern-harrier",
                    image: "/hero2.jpg"
                }
            ]
        }
    ];

    // State for the search term
    const [searchTerm, setSearchTerm] = useState("");

    // Ref to the search input element
    const searchRef = useRef<HTMLInputElement>(null);

    // Focus the search input on component mount
    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
    }, []);

    // Filter the birds for the index panel
    const filteredBirds = birds
        .map((bird) => {
            // Check if the genus contains the search term
            const genusMatch = bird.genus.toLowerCase().includes(searchTerm.toLowerCase());
            // Check which species names match the search term
            const speciesMatches = bird.species.filter((species) =>
                species.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            // If the genus matches, return the whole group.
            // Otherwise, if any species match, return only those species.
            if (genusMatch) {
                return bird;
            } else if (speciesMatches.length > 0) {
                return { genus: bird.genus, species: speciesMatches };
            }
            return null;
        })
        .filter((bird) => bird !== null) as BirdListProps[];

    return (
        <>
            <div className="max-w-7xl mx-auto mb-10 flex">
                <div className="w-full xl:w-3/4 px-10">
                    {birds.map((bird) => (
                        <div key={bird.genus} className="mt-10" id={bird.genus.toLowerCase().replace(" ", "-")}>
                            <div className="relative w-full flex justify-center items-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-serif text-center z-[2] bg-background px-2 md:px-8">
                                    {bird.genus}
                                </h2>
                                <div className="max-w-6xl mx-auto w-full absolute top-[50%]">
                                    <div className="absolute top-0 left-0 bg-gradient-to-r from-transparent to-primary w-[50%] h-[2px] z-[1]"></div>
                                    <div className="absolute top-0 right-0 bg-gradient-to-l from-transparent to-primary w-[50%] h-[2px] z-[1]"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
                                {bird.species.map((species) => (
                                    <Link
                                        key={species.name}
                                        href={species.link}
                                        className="group block relative rounded-md overflow-hidden shadow-lg transition-transform transform"
                                    >
                                        <div className="relative w-full h-64" id={species.name.toLowerCase().replace(" ", "-")}>
                                            <Image
                                                src={species.image}
                                                alt={species.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 h-[30%] w-full bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                                        <div className="absolute bottom-0 h-[30%] w-full flex items-center justify-center">
                                            <h3 className="text-white text-2xl font-semibold uppercase text-center">
                                                {species.name}
                                            </h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Index */}
                <div className="hidden xl:block xl:w-1/4 p-5 bg-black bg-opacity-[2%]">
                    <input
                        type="text"
                        placeholder="Search for a bird"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        ref={searchRef}
                        className="w-full text-primary-dark p-2 mt-6 mb-4 outline-none"
                    />
                    {filteredBirds.map((bird) => (
                        <div key={bird.genus} className="px-5">
                            <Link href={"#" + bird.genus.toLowerCase().replace(" ", "-")}>
                                <h2 className="text-2xl text-primary-dark py-2 hover:underline">{bird.genus}</h2>
                            </Link>
                            {bird.species.map((species) => (
                                <div key={species.name}>
                                    <Link href={"#" + species.name.toLowerCase().replace(" ", "-")}>
                                        <p className="text-xl text-primary hover:text-primary-dark transition-all duration-300 hover:underline ml-4 py-1">
                                            {species.name}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
