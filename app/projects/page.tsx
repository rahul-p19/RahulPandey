'use client';
import React, {useRef} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "InfinitIEEE",
		preview: "/projects/quiz-confirmation.jpg",
		image: "/projects/quiz-question.jpg",
        stack: "TailwindCSS, NextJS, TypeScript, ExpressJS, Prisma, PostgreSQL",
		deployment: "https://hello.ieee-jaduniv.in",
		repository: "https://github.com/rahul-p19/quiz-app",
        description: [
			"Live quiz website for Hello IEEE, an offline event organised by IEEE JUSB.",
            "Implemented an ExpressJS server to broadcast live questions to users, using Server Sent Events.",
            "Developed role-based authentication using AuthJS for 500+ users.",
			"Built an admin control panel to control live quiz questions.",
			"Implemented quiz frontend using LocalStorage for persistent data."
        ]
    },
    {
		title: "E-Summit'24",
		preview: "/projects/esummit-logo.svg",
		image: "/projects/esummit-hero.png",
        stack: "TailwindCSS, NextJS, TypeScript, Prisma, PostgreSQL",
		deployment: "https://esummit.juecell.com",
		repository: "",
        description: [
			"Implemented admin section to view and manage registrations.",
            "Worked on user registration for 470+ users.",
        ]
    },
];

function Page() {
    const projectContainerRef = useRef<HTMLDivElement | null>(null);
	const projectRightImages = useRef<(HTMLDivElement | null)[]>([]);
	const projectLeftImages = useRef<(HTMLDivElement | null)[]>([]);

	const text = "Projects";
	const splitText = text.split("").map((ch) => (ch === " " ? "\u00A0" : ch));

	useGSAP(
		() => {

			gsap.to(".text-char", {
				y: 0,
				stagger: 0.08,
				duration: 0.5,
				scrollTrigger: {
					trigger: projectContainerRef.current,
					start: "10% bottom",
				},
			});

			projectRightImages.current.forEach((img)=>{
				gsap.to(img, {
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
					delay: 1,
					duration: 0.5,
					scrollTrigger: {
						trigger: img,
						start: "top 75%",
						end: "bottom 85%",
						scrub: true
					}
				})
			})
			
			projectLeftImages.current.forEach((img)=>{
				gsap.to(img, {
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
					delay: 1,
					duration: 0.5,
					scrollTrigger: {
						trigger: img,
						start: "top 75%",
						end: "bottom 80%",
						scrub: true
					}
				})
			})

		},
		{
			scope: projectContainerRef,
		}
	);

	return (
		<div
			className="flex flex-col gap-y-12 py-6 min-h-screen w-full overflow-x-hidden bg-[radial-gradient(#e5e7eb10_1px,transparent_1px)] [background-size:26px_26px]"
			id="about"
			ref={projectContainerRef}>
			<div className="flex justify-center">
				<h1 className="font-inter text-white hover:text-red transition-colors duration-150 font-semibold text-6xl pt-6 pb-3 title text-center flex">
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
			<div className='flex flex-col gap-y-3 items-center px-3 sm:px-0 text-center'>
			<h2 className='text-xl font-inter text-white w-fit'>Some of the projects that I&apos;ve worked on so far</h2>
			<h3 className='font-inter text-white w-fit'>Find more at <Link href={"https://github.com/rahul-p19"} target='_blank' className='hover:text-red text-white underline underline-offset-2'>my GitHub.</Link></h3>
			</div>
			<div className="project-container flex flex-col gap-y-16 items-center">
				{projects.map((project,ind)=>
					<div key={ind} className='w-full grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-0 items-center text-white'>
							<Image src={project.preview} alt={project.title} width={200} height={150} className='justify-self-center sm:justify-self-end left-image' ref={(ref)=>{projectLeftImages.current[ind]=ref}} />
							<h1 className='font-inter text-5xl font-bold pl-8'>{project.title}</h1>
							<div className='flex flex-col gap-y-6 items-center justify-center text-center px-4'>
								<h3 className='text-xl font-inter'>Tech Stack: {project.stack}</h3>
								<ul className='list-disc list-inside font-inter flex flex-col gap-y-2'>
									{project.description.map((point,idx)=>
										<li key={idx}>{point}</li>
									)}
								</ul>
								<div className='flex justify-around w-full font-worksans underline underline-offset-2'>
									{ project.deployment!=="" && 
									<Link href={project.deployment} target='_blank' className='hover:text-red'>Live Link</Link>}
									{ project.repository!=="" &&
									<Link href={project.repository} target='_blank' className='hover:text-red'>Source Code</Link>}
								</div>
							</div>
							<Image src={project.image} alt={project.title} width={600} height={300} className='px-3 sm:px-0 aspect-auto right-image' ref={(ref)=>{projectRightImages.current[ind]=ref}} />
					</div>
				)}
			</div>
		</div>
    );
}

export default Page