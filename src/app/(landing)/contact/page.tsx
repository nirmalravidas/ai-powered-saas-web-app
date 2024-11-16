"use client";

import axios from "axios";

export default function Contact() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        try {
            const response = await axios.post("https://api.web3forms.com/submit", {
                access_key: process.env.WEB3_FORMS_ACCESS_KEY,
                name: form.name.valueOf,
                email: form.email.value,
                message: form.message.value,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            if (response.data.success) {
                console.log(response.data);
            } else {
                console.error("Error submitting form:", response.data);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    return (
       <>
           <div className="flex flex-col items-start max-w-sm mx-auto h-dvh overflow-hidden pt-4 md:pt-20">
                <div className="flex flex-col items-start gap-y-6 py-8 w-full px-0.5">
                    <h2 className="text-2xl font-semibold">
                        Contact
                    </h2>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div>
                            <label htmlFor="name" className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                autoCapitalize="off"
                                placeholder="Your name..."
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus-visible:border-foreground shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                autoComplete="off"
                                placeholder="Your email address..."
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus-visible:border-foreground shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="font-medium">
                                Message
                            </label>
                            <textarea name="message" required placeholder="Your message here..." className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus-visible:border-foreground shadow-sm rounded-lg"></textarea>
                        </div>
                        <button type="submit" name="redirect" value="https://rexhorizon.com/contact-thankyou" className="w-full px-4 py-2 text-black font-medium bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-lg duration-150">
                            Submit
                        </button>
                        
                    </form>
                </div>
            </div>
       </>
    );
}
