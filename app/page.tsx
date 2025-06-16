"use client";
import React from "react";
import About from "@/components/About";
import Hero from "@/components/Hero";


function Landing() {
	return (
		<div className="h-full relative font-inter text-white bg-[radial-gradient(#e5e7eb10_1px,transparent_1px)] [background-size:26px_26px]">
		<Hero />
		<About />
		</div>
	);
}
export default Landing;
