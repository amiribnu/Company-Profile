import React from "react";
import { Head } from "@inertiajs/react";
import { IconMail, IconPhone, IconMap2 } from "@tabler/icons-react";
import MainLayout from "@/Layouts/MainLayout";

export default function Index(props) {
    return (
        <div>
            <Head>
                <title>Contact</title>

                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-BRRD6D3YTK"
                ></script>

                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-BRRD6D3YTK');
                    `}
                </script>

                <script>
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '322186577180666');
                        fbq('track', 'PageView');
                    `}
                </script>

                <noscript>
                    {`
                        <img height="1" width="1" style="display:none"
                        src="https://www.facebook.com/tr?id=322186577180666&ev=PageView&noscript=1"
                        />
                    `}
                </noscript>
            </Head>

            {/* Content */}
            <div className="pt-40">
                <h1 className="mb-4 text-3xl font-bold">Contact</h1>

                <div className="flex space-x-10">
                    <div className="bg-[#F2F4F8] w-1/2">
                        <div className="px-5 py-14">
                            <div className="flex justify-between w-full mb-3 space-x-5">
                                <div className="w-1/2">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between w-full mb-3 space-x-5">
                                <div className="w-1/2">
                                    <label
                                        htmlFor="phone"
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label
                                        htmlFor="company"
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                    >
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            </div>
                            <div className="w-full mb-3">
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-bold text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    className="w-full rounded-md"
                                ></textarea>
                            </div>
                            <div>
                                <button className="px-4 py-2 font-bold text-white bg-blue-500 border-2 border-blue-500">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <h3 className="mb-4 text-2xl font-bold">
                            Get in touch today
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit nulla adipiscing tincidunt interdum tellus du.
                        </p>
                        <ul className="mt-12 space-y-3">
                            <li className="flex space-x-2">
                                <IconMail /> <span>contact@company.com</span>
                            </li>
                            <li className="flex space-x-2">
                                <IconPhone /> <span>(123) 456 - 789</span>
                            </li>
                            <li className="flex space-x-2">
                                <IconMap2 />{" "}
                                <span>
                                    794 Mcallister St San Francisco, 94102
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

Index.layout = (page) => <MainLayout children={page} />;
