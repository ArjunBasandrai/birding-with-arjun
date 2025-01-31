"use client";

import { useSearchParams } from "next/navigation";

export default function Search() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    return (
        <div>
            <h1>Search Results for: {query}</h1>
        </div>
    );
}
