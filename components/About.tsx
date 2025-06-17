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
		id: 1,
		title: "College and Coding",
		text: "I'm a 3rd year undergraduate at the Department of Information Technology, Jadavpur University. I've done coursework on key topics like Object Oriented Programming, Database Management Systems, Computer Networks, etc. and have learnt multiple languages - C, C++, Java, and a bit of Assembly too. I also do web development - frontend as well as backend. I'm currently trying to learn more about scalable and distributed systems.",
	},
	{
		id: 2,
		title: "College Clubs",
		text: "I've worked on many websites for college events, giving me an insight into handling real users, working as a part of a team and dealing with deployments. I'm the Technical Lead at the IEEE JU Student Branch, and a Core Member at JU E-Cell. I was also the Technical Lead for Srijan'25 - Jadavpur University's Annual Techno-Management Fest.",
	},
	{
		id: 3,
		title: "Hobbies",
		text: "Apart from coding, I'm really into sports. Although I'm not very good at them, I play many sports, and enjoy watching them too (whatever's live on TV). I also enjoy travelling and exploring new places.",
	},
];

function About() {
	const container = useRef<HTMLDivElement>(null);

	const n = aboutCards.length;
	const items = useRef<HTMLParagraphElement[]>(new Array(n));

	useGSAP(
		() => {
			items.current.forEach((item) => {
				gsap.set(item, { opacity: 0.05 });

				// Fade in (bottom → center)
				gsap.fromTo(
					item,
					{ opacity: 0.05 },
					{
						opacity: 1,
						scrollTrigger: {
							trigger: item,
							start: "top 60%",
							end: "top 45%",
							scrub: true,
						},
					}
				);

				// Fade out (center → top)
				gsap.to(item, {
					opacity: 0.05,
					scrollTrigger: {
						trigger: item,
						start: "top 30%",
						end: "top 25%",
						scrub: true,
					},
				});
			});
		},
		{ scope: container }
	);

	return (
		<div ref={container} className="flex flex-col items-center sm:flex-row px-3 gap-3 py-16">
			<div className="sm:sticky top-1/2 self-start flex items-center justify-center h-fit w-full sm:w-1/2">
				<h1
					className="text-5xl text-center sm:text-7xl font-dmsans font-semibold -translate-y-1/2"
					id="about">
					About Me
				</h1>
			</div>
			<div className="flex flex-col sm:w-3/5 items-center gap-8 text-lg">
				{aboutCards.map((card, ind) => (
					<p
						ref={(el) => {
							items.current[ind] = el as HTMLParagraphElement;
						}}
						key={card.id}
						className="w-4/5 sm:w-3/4 opacity-5">
						{card.text}
					</p>
				))}
			</div>
		</div>
	);
}

export default About;
