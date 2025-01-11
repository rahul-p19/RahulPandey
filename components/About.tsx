"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const aboutCards = [
	{
		image: "/college.jpg",
		alt: "College",
		text: "I'm a 2nd year undergraduate student at Jadavpur University, pursuing a B.E. in Information Technology.",
	},
	{
		image: "/coding.jpg",
		alt: "Coding",
		text: "I like building websites, and hope to explore app dev and some low level stuff in the future.",
	},
	{
		image: "/mussoorie.jpg",
		alt: "Mussoorie",
		text: "I love travelling and playing or watching sports.",
	},
];

function About() {
	const aboutContainerRef = useRef<HTMLDivElement | null>(null);
	const processRef = useRef<HTMLDivElement | null>(null);
	const processItemsRef = useRef<(HTMLDivElement | null)[]>([]);

	const text = "About Me";
	const splitText = text.split("").map((ch) => (ch === " " ? "\u00A0" : ch));

	useGSAP(
		() => {
			gsap.to(".text-char", {
				y: 0,
				stagger: 0.08,
				duration: 0.5,
				scrollTrigger: {
					trigger: aboutContainerRef.current,
					start: "10% bottom",
				},
			});

			gsap.to(processRef.current, {
				xPercent: -33.5 * (processItemsRef.current.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: processRef.current,
					start: "100% bottom",
					markers: false,
					scrub: 1,
					pin: true,
					end: () => "+="+ processRef.current?.offsetWidth,
				},
			});
		},
		{
			scope: aboutContainerRef,
		}
	);

	return (
		<div
			className="flex flex-col gap-y-12 py-6 min-h-screen w-full overflow-x-hidden"
			id="about"
			ref={aboutContainerRef}>
			<div className="flex w-screen justify-center">
				<h1 className="font-inter text-white hover:text-red transition-colors duration-150 font-semibold text-5xl sm:text-6xl title text-center flex">
					{splitText.map((ch, ind) => {
						return (
							<div
								key={ind}
								className="text-char translate-y-28 transition-transform duration-500">
								{ch}
							</div>
						);
					})}
				</h1>
			</div>
			<div className="overflow-hidden">
				<div className="process" ref={processRef}>
					{aboutCards.map((card, ind) => (
						<div key={ind} ref={(ref)=>{processItemsRef.current[ind]=ref;}}
						className="w-screen flex justify-center">
							<div className="h-[70vh] w-[80vw] sm:w-[40vw] md:w-[23vw] flex flex-col gap-y-8">
								<Image src={card.image} alt={card.alt} width={400} height={400} className="h-1/2 w-auto"/>
								<p className="font-worksans text-lg text-center">{card.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default About;
