import React from "react";

function NotFound() {
	return (
		<div className="h-screen flex flex-col items-center justify-center text-center font-worksans">
			<h1 className="text-9xl text-red font-extrabold">404</h1>
			<h1 className="text-3xl md:text-5xl text-white font-semibold">Page not found</h1>
		</div>
	);
}

export default NotFound;
