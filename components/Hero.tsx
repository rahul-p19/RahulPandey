"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Hero() {
	const container = useRef<HTMLDivElement>(null);

	const text = "Hi, I'm Rahul";
	const splitText = text.split("").map((ch) => (ch === " " ? "\u00A0" : ch));

	useGSAP(
		() => {
			gsap.to(".text-char", {
				y: 0,
				stagger: 0.08,
				delay: 0.8,
				duration: 0.5,
			});

			gsap.from("img", {
				scale: 1.6,
				y: "10%",
				duration: 2,
				ease: "expo.inOut",
				delay: 0,
			});
		},
		{ scope: container }
	);

	return (
		<div
			className="h-screen flex justify-center items-center overflow-clip"
			ref={container}>
			<div className="flex flex-col items-center gap-y-6 w-4/5 sm:w-1/2">
				<Image
					src="/my-photo.jpg"
					alt="A picture of me"
					width={400}
					height={400}
					className="w:4/5 sm:w-2/3 lg:w-1/2 h-auto rounded-lg object-contain"
				/>
				<h1 className="font-inter hover:text-red transition-colors duration-150 font-semibold text-5xl sm:text-6xl title text-center flex">
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
		</div>
	);
}

export default Hero;