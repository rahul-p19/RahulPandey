import React, {useRef} from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";

function Landing() {
	return (
		<div className="h-full text-white bg-[radial-gradient(#e5e7eb10_1px,transparent_1px)] [background-size:26px_26px]">
		<Hero />
		<About />
		</div>
	);
}
export default Landing;
