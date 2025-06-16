"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/dist/CustomEase";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(useGSAP, CustomEase, SplitText);

const splitTextElements = (
	selector: string,
	type = "words,chars",
	addFirstChar = false
) => {
	const elements = document.querySelectorAll(selector);
	elements.forEach((element) => {
		const splitText = new SplitText(element, {
			type,
			wordsClass: "word",
			charsClass: "char",
		});

		if (type.includes("chars")) {
			splitText.chars.forEach((char, index) => {
				const originalText = char.textContent;
				char.innerHTML = `<span>${originalText}</span>`;

				if (addFirstChar && index === 0) char.classList.add("firstChar");
			});
		}
	});
};

function Hero() {
	const heroContainer = useRef<HTMLDivElement>(null);
	useGSAP(
		() => {
			CustomEase.create("hop", ".8, 0, .3, 1");

			splitTextElements(".introTitle h1", "words,chars", true);
			splitTextElements(".outroTitle h1");
			splitTextElements(".tag p", "words");
			splitTextElements(".card h1", "words,chars", true);

			const isMobile = window.innerWidth <= 1000;

			gsap.set(
				[
					".splitOverlay .introTitle .firstChar span",
					".splitOverlay .outroTitle .char span",
				],
				{ y: "0%" }
			);

			gsap.set(".splitOverlay .introTitle .firstChar", {
				x: isMobile ? "7.5rem" : "18rem",
				y: isMobile ? "-1rem" : "-2.75rem",
				fontWeight: "900",
				scale: 0.75,
			});

			gsap.set(".splitOverlay .outroTitle .char", {
				x: isMobile ? "-3rem" : "-12rem",
				fontSize: isMobile ? "4rem" : "10rem",
				fontWeight: "500",
			});

			const t1 = gsap.timeline({ defaults: { ease: "hop" } });
			const tags = gsap.utils.toArray<HTMLElement>(".tag");

			tags.forEach((tag, index: number) => {
				t1.fromTo(
					tag.querySelectorAll("p .word"),
					{
						opacity: 0,
					},
					{
						y: "0%",
						duration: 0.75,
						opacity: 1,
					},
					0.5 + index * 0.1
				);
			});

			t1.to(
				".preloader .introTitle .char span",
				{
					y: "0%",
					duration: 0.75,
					stagger: 0.05,
				},
				0.5
			)
				.to(
					".preloader .introTitle .char:not(.firstChar) span",
					{
						y: "100%",
						duration: 0.75,
						stagger: 0.05,
					},
					2
				)
				.to(
					".preloader .outroTitle .char span",
					{
						y: "0%",
						duration: 0.75,
						stagger: 0.075,
					},
					2.5
				)
				.to(
					".preloader .introTitle .firstChar",
					{
						x: isMobile ? "4rem" : "12rem",
						duration: 1,
					},
					3.5
				)
				.to(
					".preloader .outroTitle .char",
					{
						x: isMobile ? "-3rem" : "-8rem",
						duration: 1,
					},
					3.5
				)
				.to(
					".preloader .introTitle .firstChar",
					{
						x: isMobile ? "5rem" : "10rem",
						y: isMobile ? "1rem" : "-2.75rem",
						fontWeight: isMobile ? "500" :"900",
						scale: 0.75,
						duration: 0.75,
					},
					4.5
				)
				.to(
					".preloader .outroTitle .char",
					{
						x: isMobile ? "-3rem" : "-12rem",
						fontSize: isMobile ? "4rem" : "10rem",
						fontWeight: "500",
						duration: 0.75,
						onComplete: () => {
							gsap.set(".preloader", {
								clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
							});
							gsap.set(".splitOverlay", {
								clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
							});
						},
					},
					4.5
				)
				.to(
					".container",
					{
						clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0% 50%)",
						duration: 1,
					},
					5
				);

			tags.forEach((tag, index) => {
				t1.to(
					tag.querySelectorAll("p .word"),
					{
						y: "100%",
						opacity: 0,
						duration: 0.75,
					},
					5.5 + index * 0.1
				);
			});

			t1.to(
				[".preloader", ".splitOverlay"],
				{
					y: (i) => (i === 0 ? "-50%" : "50%"),
					duration: 1,
				},
				6
			)
				.to(
					".container",
					{
						clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
						duration: 1,
					},
					6
				)
				.to(
					".container .card",
					{
						clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
						duration: 0.75,
					},
					6.25
				)
				.to(
					".container .card h1 .char span",
					{
						y: "0%",
						duration: 0.75,
						stagger: 0.05,
					},
					6.5
				);
		},
		{
			scope: heroContainer,
		}
	);

	return (
			<div className="relative grid place-items-center" ref={heroContainer}>
				<div className="preloader uppercase">
					<div className="introTitle">
						<h1 className="text-7xl font-semibold">rahul pandey</h1>
					</div>
					<div className="outroTitle">
						<h1 className="text-7xl font-semibold">p</h1>
					</div>
				</div>
				<div className="splitOverlay uppercase">
					<div className="introTitle">
						<h1 className="text-7xl font-semibold">rahul pandey</h1>
					</div>
					<div className="outroTitle">
						<h1 className="text-7xl font-semibold">p</h1>
					</div>
				</div>
				<div className="tagsOverlay">
					<div className="tag">
						<p className={`tag absolute top-[10%] left-[20%]`}>
							Full Stack Developer
						</p>
					</div>
					<div className="tag">
						<p className={`tag absolute top-1/4 sm:top-1/3 right-[15%]`}>Undergraduate</p>
					</div>
					<div className="tag">
						<p className={`tag absolute bottom-[10%] right-[30%]`}>
							Software Engineer
						</p>
					</div>
				</div>
				<div className="container">
					<div className="card flex flex-col justify-center gap-4 rounded-sm bg-white">
						<Image src="/my-photo.jpg" height={400} width={400} alt="My Photo" className="w-3/4 h-auto rounded-sm" />
						<h1 className="text-4xl font-semibold text-black">
							Hi, I&apos;m Rahul
						</h1>
					</div>
				</div>
			</div>
	);
}

export default Hero;
