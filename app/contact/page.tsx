import React from "react";

function Page() {
	return (
		<div className="font-dmsans bg-[radial-gradient(#e5e7eb10_1px,transparent_1px)] [background-size:26px_26px] flex flex-col items-center text-white p-16 gap-8">
			<h1 className="text-4xl sm:text-6xl font-semibold mb-6">
				Contact Me
			</h1>
			<form
				className="flex flex-col items-center font-dmsans text-3xl w-3/4"
				action="https://formsubmit.co/4680f053eacf8a81b23fc5f9f4b7b70c"
				method="POST">
					<input type="text" name="_honey" style={{ display: "none" }}></input>
                    <input type="hidden" name="_autoresponse" value="Message Received!" className="hidden"></input>
				<p className="text-center">
                    <input type="hidden" name="_next" value="https://rahulpandey.tech/thanks"></input>
					Hi Rahul, I&apos;m{" "}
					<input
						type="text"
                        name="name"
						className="m-3 bg-transparent border-b border-white outline-none placeholder:text-center placeholder:font-extralight placeholder:text-white/60 text-white/60"
                        placeholder="Your Name"
					/>
                    , and you can reach out to me at
                    <input type="email" name="email" className="m-3 bg-transparent border-b border-white outline-none placeholder:text-center placeholder:font-extralight placeholder:text-white/60 text-white/60"
                    placeholder="Your Email" />. I wanted to say -
				</p>
                <textarea name="message" rows={3} className="border-b border-white outline-none w-3/4 text-white/60 font-extralight my-4" />
                <button type="submit" className="my-6 bg-white rounded-[4px] text-black p-2 text-2xl font-medium">Send Message</button>
			</form>
		</div>
	);
}

export default Page;
