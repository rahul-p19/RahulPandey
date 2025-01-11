import React, {useRef} from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";

function Landing() {
	return (
		<div className="landing-bg h-full text-white">
		<Hero />
		<About />
		</div>
	);
}
export default Landing;
