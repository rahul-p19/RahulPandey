import React from "react";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";

function Footer() {
	const socials = [
		{
			path: "https://www.linkedin.com/in/rahul-pandey2005/",
			label: "LinkedIn",
		},
		{ path: "https://github.com/rahul-p19", label: "GitHub" },
		{ path: "https://leetcode.com/u/rahul-p19/", label: "LeetCode" },
	];

    const menuLinks = [
		{ path: "/", label: "Home" },
		{ path: "/#about", label: "About" },
		{ path: "/projects", label: "Projects" },
	];

	return (
		<footer className="bg-red overflow-clip flex flex-col px-[10vw]" id="contact">
			<div className="flex justify-center sm:justify-between items-center py-6">
                <div className="flex flex-col items-center sm:items-start">
                    <h2 className="font-dmsans font-bold text-4xl sm:text-5xl my-6">Rahul Pandey</h2>
                </div>
                <nav className="hidden sm:flex flex-col">
					{menuLinks.map((link, ind) => (
						<Link
							href={link.path}
							key={ind}
							className="text-3xl font-medium font-worksans uppercase text-right">
							{link.label}
						</Link>
					))}
				</nav>
            </div>
			<nav className="flex justify-between pb-4 font-worksans font-medium uppercase border-t-2 border-t-black pt-2">
				{socials.map((social, ind) => (
					<Link
						href={social.path}
						key={ind}
						className="flex items-center"
						target="_blank">
						<span>{social.label}</span>
						<FaArrowUpLong className="text-[0.7rem] rotate-45" />
					</Link>
				))}
			</nav>
		</footer>
	);
}

export default Footer;
