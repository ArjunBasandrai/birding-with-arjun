"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faSearch,
    faTimes,
    faBars,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

function NavLink({ href, text }: { href: string; text: string }) {
    return (
        <div className="w-full border-b border-gray-500/20 xl:border-0">
            <Link
                href={href}
                className="block px-4 py-2 text-black xl:text-gray-200/80 text-md xl:text-sm uppercase hover:text-primary transition-colors duration-200 xl:hover:bg-transparent hover:bg-gray-100/30"
            >
                {text}
            </Link>
        </div>
    );
}

interface DropDownLinkProps {
    href: string;
    text: string;
    links: string[][];
}

function DropDownLink({ href, text, links }: DropDownLinkProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleMobileToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!(event.target as HTMLElement).closest(".dropdown-text")) {
            setMobileOpen((prev) => !prev);
        }
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setMobileOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    links.sort();

    return (
        <div ref={dropdownRef}>
            <div className="block xl:hidden w-full border-b border-gray-500/20">
                <button
                    onClick={handleMobileToggle}
                    className="group flex items-center uppercase text-md xl:text-sm text-black justify-between w-full px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                >
                    <Link
                        href={`/${href}`}
                        className="dropdown-text"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {text}
                    </Link>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`ml-1 text-[12px] transition-transform duration-300 ${
                            mobileOpen ? "rotate-180 text-primary" : ""
                        } group-hover:text-primary`}
                    />
                </button>
                <div
                    className={`overflow-hidden transition-all duration-300 ${
                        mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    {links.map((child) => (
                        <Link
                            key={child[0]}
                            href={href + child[1]}
                            className="block px-7 py-2 text-black text-md xl:text-sm uppercase hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                        >
                            {child[0]}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="relative hidden xl:block group mx-4">
                <Link
                    href={`/${href}`}
                    className="group-hover:text-primary text-gray-200/80 transition-colors duration-200 uppercase"
                >
                    <div className="flex items-center text-md xl:text-sm">
                        {text}
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            className="ml-1 text-[12px] text-gray-200/80 group-hover:text-primary transition-transform duration-300 group-hover:rotate-180"
                        />
                    </div>
                    <div className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-primary transition-all duration-200 group-hover:w-full group-hover:left-0" />
                </Link>
                <div className="absolute left-0 mt-2 w-80 bg-black/90 origin-top transform scale-y-0 opacity-0 transition-all duration-200 group-hover:scale-y-100 group-hover:opacity-100">
                    {links.map((child) => (
                        <Link
                            key={child[0]}
                            href={href + child[1]}
                            className="block px-4 py-3 hover:text-primary transition-colors duration-200 text-gray-200/80 border-b border-gray-500/20 uppercase text-md xl:text-sm"
                        >
                            {child[0]}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Navbar() {
    const [searchBar, setSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toggleSearch();
        if (!searchQuery.trim()) return;
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    };

    const toggleSearch = () => {
        setSearchQuery("");
        setSearchBar(!searchBar);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        if (searchBar && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchBar]);

    return (
        <nav className="relative w-full bg-black z-[10] px-4 xl:px-36 py-6">
            <div className="relative w-full">
                <div className="flex h-full items-center">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-gray-200/80 text-xl cursor-pointer block xl:hidden"
                        onClick={toggleMobileMenu}
                    />
                    <div className="flex-1">
                        <h1 className="text-white text-4xl font-ImperialScript text-center xl:text-left">
                            Birding With Arjun
                        </h1>
                    </div>
                    <div className="flex-1 justify-end h-full items-center xl:flex hidden">
                        <NavLink href="/" text="Home" />
                        <NavLink href="#" text="Blog" />

                        <DropDownLink
                            href="destinations"
                            text="Destinations"
                            links={[
                                ["Punjab", "/punjab"],
                                ["Himachal Pradesh", "/himachalpradesh"],
                                ["Ladakh", "/ladakh"],
                                ["Andaman & Nicobar Islands", "/andamanandnicobarislands"],
                            ]}
                        />

                        <NavLink href="#" text="Birds" />
                        <NavLink href="/gallery" text="Gallery" />
                        <NavLink href="/about" text="About" />
                        <NavLink href="/contact" text="Contact" />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="text-gray-200/80 hover:text-primary transition-all duration-200 text-sm ml-4 cursor-pointer"
                            onClick={toggleSearch}
                        />
                    </div>
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="text-gray-200/80 hover:text-primary transition-all duration-200 text-md ml-4 cursor-pointer block xl:hidden"
                        onClick={toggleSearch}
                    />
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
                                className="bg-transparent text-white w-full focus:outline-none"
                            />
                            <button type="submit" className="hidden" />
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="ml-4 text-[20px] text-gray-200/80 hover:text-primary transition-all transform hover:rotate-180 duration-200 cursor-pointer"
                                onClick={toggleSearch}
                            />
                        </form>
                    </div>
                )}
                </div>
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={closeMobileMenu}
                />
            )}

            <div
                className={`fixed top-0 left-0 h-screen bg-white text-black py-6 px-4 w-[85%] xl:hidden z-50 transform ${mobileMenuOpen ? "translate-x-0 mobile-navbar-shadow" : "-translate-x-full"
                    } transition-transform duration-300`}
            >
                <Link href="/" className="block">
                    <h1 className="text-black text-4xl font-ImperialScript text-center xl:text-left mt-10 mb-2 py-2">
                        Birding With Arjun
                    </h1>
                </Link>

                <div className="flex">
                    <div className="flex w-full justify-center space-x-4 mb-20">
                        <Link href="https://www.instagram.com/birdingwitharjun" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="text-black/60 hover:text-pink-500 text-xl transition-colors duration-200" />
                        </Link>
                        <Link href="https://www.facebook.com/arjun.basandrai" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} className="text-black/60 hover:text-blue-500 text-xl transition-colors duration-200" />
                        </Link>
                        <Link href="https://github.com/ArjunBasandrai" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="text-black/60 hover:text-black text-xl transition-colors duration-200" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/arjun-basandrai" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="text-black/60 hover:text-blue-500 text-xl transition-colors duration-200" />
                        </Link>
                        <Link href="mailto:birdingwitharjun@example.com">
                            <FontAwesomeIcon icon={faEnvelope} className="text-black/60 hover:text-red-500 text-xl transition-colors duration-200" />
                        </Link>
                    </div>

                </div>

                <NavLink href="/" text="Home" />
                <NavLink href="#" text="Blog" />

                <DropDownLink
                    href="destinations"
                    text="Destinations"
                    links={[
                        ["Punjab", "/punjab"],
                        ["Himachal Pradesh", "/himachalpradesh"],
                        ["Ladakh", "/ladakh"],
                        ["Andaman & Nicobar Islands", "/andamanandnicobarislands"],
                    ]}
                />

                <NavLink href="#" text="Birds" />
                <NavLink href="/gallery" text="Gallery" />
                <NavLink href="/about" text="About" />
                <NavLink href="/contact" text="Contact" />
            </div>
        </nav>
    );
}
