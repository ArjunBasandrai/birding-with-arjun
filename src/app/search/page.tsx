"use client";

import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    return <h1>Search Results for: {query}</h1>;
}

export default function Search() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<h1>Loading...</h1>}>
                <SearchContent />
            </Suspense>
        </>
    );
}
