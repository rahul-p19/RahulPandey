import React from "react";

async function NotFound() {
	const res = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
	const joke = await res.json();
	return (
		<div className="h-screen flex flex-col items-center justify-center text-center font-worksans">
			<h1 className="text-9xl text-red font-extrabold">404</h1>
			<h1 className="text-3xl md:text-5xl text-white font-semibold">Page not found</h1>
			<h2 className="text-red mt-4 mb-2 text-2xl font-semibold">Here&apos;s a random joke instead</h2>
			<h3 className="text-white text-lg px-2">{joke.joke}</h3>

		</div>
	);
}

export default NotFound;
