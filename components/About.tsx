"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BsCardText } from "react-icons/bs";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const aboutCards = [
	{
		alt: "College",
		text: "I'm a 2nd year undergraduate student at Jadavpur University, pursuing a B.E. in Information Technology.",
	},
	{
		alt: "Coding",
		text: "I like building websites, and hope to explore app dev and some low level stuff in the future.",
	},
	{
		alt: "Hobbies",
		text: "I love travelling and playing or watching sports.",
	},
	{
		alt: "College Clubs",
		text: "I'm a Coordinator at JU E-Cell, and a member of the Tech Team at IEEE JUSB - mostly building websites in both roles.",
	},
];

function About() {
	const container = useRef<HTMLDivElement>(null);

	const n = aboutCards.length;
	const items = useRef<HTMLParagraphElement[]>(new Array(n));

	useGSAP(
		() => {
			items.current.forEach((item) => {
				// Fade in (bottom → center)
				gsap.fromTo(
					item,
					{ opacity: 0.01 },
					{
						opacity: 1,
						scrollTrigger: {
							trigger: item,
							start: "top bottom",
							end: "top 45%",
							scrub: true,
						},
					}
				);

				// Fade out (center → top)
				gsap.fromTo(
					item,
					{ opacity: 1 },
					{
						opacity: 0.05,
						scrollTrigger: {
							trigger: item,
							start: "top 45%",
							end: "top 40%",
							scrub: true,
						},
					}
				);
			});
		},
		{ scope: container }
	);

	return (
		<div ref={container} className="flex px-3 gap-3 py-16">
			<div className="sticky top-1/2 self-start flex items-center justify-center h-fit w-1/2">
				<h1
					className="text-5xl text-center sm:text-7xl font-dmsans font-semibold -translate-y-1/2"
					id="about">
					About Me
				</h1>
			</div>
			<div className="flex flex-col items-center gap-8 text-lg">
				{aboutCards.map((card, ind) => (
					<p
						ref={(el) => {
							items.current[ind] = el as HTMLParagraphElement;
						}}
						key={card.alt}
						className="sm:w-3/4">
						{card.text}
					</p>
				))}
			</div>
		</div>
	);
}

export default About;
