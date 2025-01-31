"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

function NavLink({ href, text }: { href: string, text: string }) {
    return (
        <Link
            href={href}
            className="hover:text-green-500/75 transition-colors duration-200 text-gray-200/80 text-sm mx-4 uppercase"
        >{text}</Link>
    );
}

function DropDownLink({ href, text, links }: {
    href: string,
    text: string,
    links: string[]
}
) {
    links.sort();
    return (
        <div className="relative group mx-4">
            <Link
                href={href}
                className="group-hover:text-green-500/75 text-gray-200/80 transition-colors duration-200 uppercase"
            >
                <div className="flex items-center text-sm">
                    {text}
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className="ml-1 text-[12px] text-gray-200/80 group-hover:text-green-500/75 transition-all transform group-hover:rotate-180 duration-200"
                    />
                </div>
                <div className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-green-500 transition-all duration-200 group-hover:w-full group-hover:left-0"></div>
            </Link>

            <div className="absolute left-0 mt-2 w-80 bg-black/90 origin-top transform scale-y-0 opacity-0 transition-all duration-200 group-hover:scale-y-100 group-hover:opacity-100">
                {links.map((child) => (
                    <Link
                        key={child}
                        href="#"
                        className="block px-4 py-3 hover:text-green-500/75 transition-colors duration-200 text-gray-200/80 border-b border-gray-500/20 uppercase text-sm"
                    >
                        {child}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default function Navbar() {
    const [searchBar, setSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const router = useRouter();

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searched Value:", searchQuery);
        toggleSearch();
        if (!searchQuery.trim()) return;
        router.push(`/search/${encodeURIComponent(searchQuery.toLowerCase())}`);
    };

    const toggleSearch = () => {
        setSearchBar(!searchBar);
    }

    useEffect(() => {
        if (searchBar && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchBar]);

    return (
        <nav className="relative w-full bg-black z-[10] px-36 py-6">
            <div className="relative w-full">
                <div className='flex h-full items-center'>
                    <div className="flex-1">
                        <h1 className="text-white text-4xl font-ImperialScript">Birding With Arjun</h1>
                    </div>

                    <div className="flex-1 flex justify-end h-full items-center">
                        <NavLink href="#" text="Home" />
                        <NavLink href="#" text="Blog" />

                        <DropDownLink href="#" text="Destinations" links={["Punjab", "Himachal Pradesh", "Ladakh", "Andaman & Nicobar Islands"]} />

                        <NavLink href="#" text="Birds" />
                        <NavLink href="#" text="Gallery" />
                        <NavLink href="#" text="About" />
                        <NavLink href="#" text="Contact" />

                        {/* // TODO: Add search functionality */}
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="text-gray-200/80 hover:text-green-500/75 transition-all duration-200 text-sm ml-4 cursor-pointer"
                            onClick={toggleSearch}
                        />
                    </div>
                </div>
                {searchBar && (
                    <div className="absolute inset-0 bg-black flex items-center text-white justify-end border-b border-gray-500">
                        <form onSubmit={handleSearchSubmit} className="flex w-full items-center">
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search something here..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent text-white w-full px-4 focus:outline-none"
                            />
                            <button type="submit" className="hidden"></button>
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="ml-4 text-[20px] text-gray-200/80 hover:text-green-500/75 transition-all transform hover:rotate-180 duration-200 cursor-pointer"
                                onClick={toggleSearch}
                            />
                        </form>
                    </div>
                )}

            </div>
        </nav>
    );
}