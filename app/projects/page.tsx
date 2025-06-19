"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import projects from "./projects.json";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

function Page() {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [isAnimating, setIsAnimating] = useState(false);

	useGSAP( () => { initialiseCards() },{ scope: sliderRef });

	const initialiseCards = () => {
		const isMobile = window.innerWidth < 640; 
		if (sliderRef.current) {
			const cards = Array.from(
				sliderRef.current?.querySelectorAll(".slider-card")
			);
			gsap.to(cards, {
				y: (i) => isMobile ? -15 + 20 * i + "%" : - 35 + 15 * i + "%",
				z: (i) => 5 * i,
				duration: 1,
				ease: "power3.out",
				stagger: -0.1,
			});
		}
	};

	const handleClick = () => {
		if (isAnimating) return;
		setIsAnimating(true);

		const slider = sliderRef.current;
		if (!slider) return;
		const cards = Array.from(slider.querySelectorAll(".slider-card"));
		const lastCard = cards.pop();
		if (!lastCard) return;

		gsap.to(lastCard, {
			y: "+=150%",
			duration: 0.75,
			ease: "power3.inOut",
			onStart: () => {
				setTimeout(() => {
					slider.prepend(lastCard);
					initialiseCards();
					setTimeout(() => {
						setIsAnimating(false);
					}, 1000);
				}, 300);
			},
		});
	};

	return (
		<div
			className="slider-container relative w-full min-h-[75svh] sm:h-[180vh] overflow-hidden bg-[radial-gradient(#e5e7eb10_1px,transparent_1px)] [background-size:26px_26px]"
			onClick={() => handleClick()}>
				<h1 className="text-white text-4xl sm:text-5xl font-inter absolute top-5 left-1/2 -translate-x-1/2 font-bold">Projects</h1>
			<div
				className="slider absolute top-[12vh] sm:top-0 w-full min-h-[60vh] sm:h-[180vh] overflow-hidden"
				ref={sliderRef}>
				{projects.map((project) => (
					<div
						key={project.id}
						className="slider-card overflow-hidden bg-black rounded-[7px] flex flex-col items-center border border-zinc-500/30 w-[80%] sm:w-[65%] h-[275px] sm:h-[500px]">
						<div className="grid grid-cols-3 items-center px-2 sm:px-6 text-white w-full font-dmsans py-2 border-b border-b-zinc-500/30 text-sm sm:text-base">
							{project.deployment ? (
								<Link href={project.deployment} className="w-fit" target="_blank">Live Link</Link>
							) : (<Link href={project.demo} className="w-fit" target="_blank">Demo</Link>)}
							<p className="font-medium text-center justify-self-center text-base sm:text-lg">
								{project.title}
							</p>
							{project.repository && (
								<Link href={project.repository} className="justify-self-end w-fit text-right" target="_blank">
									Repo
								</Link>
							)}
						</div>

						<div className="image-container w-full">
							<Image
								src={project.image}
								alt={project.title}
								height={500}
								width={500}
								className="w-full h-auto"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Page;
