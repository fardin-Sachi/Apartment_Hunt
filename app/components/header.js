"use client"
import React from "react";
import Searchbar from "./searchbar";
import Navbar from "./navbar";

export default function Header() {
    return(
        <div>
            <Navbar />
            <Searchbar />
        </div>
    )
}