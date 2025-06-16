"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowUpLong, FaBars } from "react-icons/fa6";
import Link from "next/link";

function Menu() {
	const container = useRef<HTMLDivElement>(null);
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const tl = useRef<any>();

	useGSAP(()=>{
		gsap.set(".menu-link-item-holder",{y:75, opacity: 0});

		tl.current = gsap.timeline({paused: true})
		.to(".menu-overlay", {
			duration: 1.25,
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			ease: 'power4.inOut'
		})
		.to(".menu-link-item-holder",{
			y:0 ,
			opacity: 1,
			duration: 1,
			stagger: 0.1,
			ease: "power4.inOut",
			delay: -0.75
		})


	},{scope: container})

	useEffect(()=>{
		if(menuOpen) tl.current.play();
		else tl.current.reverse();
	},[menuOpen])

	const menuLinks = [
		{ path: "/", label: "Home" },
		{ path: "/#about", label: "About" },
		{ path: "/contact", label: "Contact" },
		{ path: "/projects", label: "Projects" },
	];

	const socials = [
		{
			path: "https://www.linkedin.com/in/rahul-pandey2005/",
			label: "LinkedIn",
		},
		{ path: "https://github.com/rahul-p19", label: "GitHub" },
		{ path: "https://leetcode.com/u/rahul-p19/", label: "LeetCode" },
	];

	return (
		<div ref={container}>
			<button
				className="text-white  hover:text-red transition-colors duration-150 text-xl fixed top-6 right-6 z-[31]"
				onClick={()=>{setMenuOpen(true)}}>
				<FaBars />
			</button>
			<div
				className={`menu-overlay h-full w-full p-2 sm:p-4 fixed z-50 flex-col justify-between items-center bg-red flex`}>
				<button
					className="fixed top-6 right-8 text-xl font-bold"
					onClick={()=>{setMenuOpen(false)}}>
					&#x2715;
				</button>
				<nav className="flex flex-col w-3/4 m-20">
					{menuLinks.map((link, ind) => (
						<Link
							href={link.path}
							key={ind}
							onClick={()=>setMenuOpen(false)}
							className="menu-link-item-holder w-fit text-4xl sm:text-6xl font-medium font-worksans uppercase">
							{link.label}
						</Link>
					))}
				</nav>
				<nav className="w-4/5 flex mb-4 sm:mb-0 justify-between font-worksans font-medium uppercase">
					{socials.map((social, ind) => (
						<Link href={social.path} key={ind} className="flex items-center" target="_blank">
							<span>{social.label}</span>
							<FaArrowUpLong className="text-[0.7rem] rotate-45" />
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
}

export default Menu;
