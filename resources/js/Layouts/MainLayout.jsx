import FooterGuest from "@/Components/Guest/FooterGuest";
import NavbarGuest from "@/Components/Guest/NavbarGuest";
import { Head } from "@inertiajs/react";

export default function Main({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.png" />
            </Head>

            <NavbarGuest />

            <div className="min-h-screen mx-auto">{children}</div>

            <FooterGuest />

            <div className="fixed z-50 bottom-6 right-6 lg:bottom-14 lg:right-14 xl:bottom-16 xl:right-bottom-16">
                <a target="_blank" href="https://wa.me/6282128350067">
                    <button className="px-4 py-4 font-bold text-white transition-all bg-green-500 rounded-full shadow-lg hover:bg-green-600 animate-slow-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-whatsapp"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                        </svg>
                    </button>
                </a>
            </div>
        </>
    );
}
