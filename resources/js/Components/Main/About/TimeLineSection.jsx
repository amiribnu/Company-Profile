import React from 'react';

function TimeLineSection(props) {
    return (
        <section className="container mx-auto">
            {/* Mobile */}
            <div className={"w-full grid grid-cols-5 md:hidden"}>
                {/* 1 */}
                <div className={"relative col-span-1 w-full h-full flex justify-center items-center"}>
                    <div className={"h-full w-1 bg-gradient-to-r from-[#F76680] to-[#57007B]"}></div>
                    <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] z-10 text-white text-center"></div>
                </div>
                <div className={"col-span-4 w-full h-full mt-10"}>
                    <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                        <div className={"p-4 md:p-5"}>
                            <div className={"flex"}>
                                <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                    #1
                                </div>
                                <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                    Dibangun 2011
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500">
                                We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className={"relative col-span-1 w-full h-full flex justify-center items-center"}>
                    <div className={"h-full w-1 bg-gradient-to-r from-[#F76680] to-[#57007B]"}></div>
                    <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] z-10 text-white text-center"></div>
                </div>
                <div className={"col-span-4 w-full h-full mt-10"}>
                    <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                        <div className={"p-4 md:p-5"}>
                            <div className={"flex"}>
                                <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                    #2
                                </div>
                                <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                    Sprint planning
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500">
                                Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className={"relative col-span-1 w-full h-full flex justify-center items-center"}>
                    <div className={"h-full w-1 bg-gradient-to-r from-[#F76680] to-[#57007B]"}></div>
                    <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] z-10 text-white text-center"></div>
                </div>
                <div className={"col-span-4 w-full h-full mt-10"}>
                    <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                        <div className={"p-4 md:p-5"}>
                            <div className={"flex"}>
                                <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                    #3
                                </div>
                                <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                    Tech architecture
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500">
                                We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className={"relative col-span-1 w-full h-full flex justify-center items-center"}>
                    <div className={"h-full w-1 bg-gradient-to-r from-[#F76680] to-[#57007B]"}></div>
                    <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] z-10 text-white text-center"></div>
                </div>
                <div className={"col-span-4 w-full h-full mt-10"}>
                    <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                        <div className={"p-4 md:p-5"}>
                            <div className={"flex"}>
                                <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                    #4
                                </div>
                                <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                    Standups & weekly demos
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500">
                                Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 5 */}
                <div className={"relative col-span-1 w-full h-full flex justify-center items-center"}>
                    <div className={"h-full w-1 bg-gradient-to-r from-[#F76680] to-[#57007B]"}></div>
                    <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] z-10 text-white text-center"></div>
                </div>
                <div className={"col-span-4 w-full h-full mt-10"}>
                    <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                        <div className={"p-4 md:p-5"}>
                            <div className={"flex"}>
                                <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                    #5
                                </div>
                                <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                    Code reviews
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500">
                                Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells
                            </p>
                        </div>
                    </div>
                </div>

                {/* 6 */}
                <div className={"relative col-span-1 w-full h-full flex justify-center items-center"}>
                    <div className={"h-full w-1 bg-gradient-to-r from-[#F76680] to-[#57007B]"}></div>
                    <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] z-10 text-white text-center"></div>
                </div>
                <div className={"col-span-4 w-full h-full mt-10"}>
                    <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                        <div className={"p-4 md:p-5"}>
                            <div className={"flex"}>
                                <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                    #6
                                </div>
                                <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                    Iterative delivery
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500">
                                We divide the implementation process into several checkpoints rather than a single deadline.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Desktop */}
            <div className={"hidden md:block"}>
                <div className={"w-full grid grid-cols-12"}>
                    <div className={"col-span-3 w-full h-full"}>
                        <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                            <div className={"p-4 md:p-5"}>
                                <div className={"flex"}>
                                    <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                        #1
                                    </div>
                                    <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                        Dibangun 2011
                                    </h3>
                                </div>
                                <p className="text-sm mt-2 text-gray-500">
                                    We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={"col-span-3 w-full h-full ml-10"}>
                        <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                            <div className={"p-4 md:p-5"}>
                                <div className={"flex"}>
                                    <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                        #3
                                    </div>
                                    <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                        Tech architecture
                                    </h3>
                                </div>
                                <p className="text-sm mt-2 text-gray-500">
                                    We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={"col-span-3 w-full h-full ml-20"}>
                        <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                            <div className={"p-4 md:p-5"}>
                                <div className={"flex"}>
                                    <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                        #5
                                    </div>
                                    <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                        Code reviews
                                    </h3>
                                </div>
                                <p className="text-sm mt-2 text-gray-500">
                                    Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 my-5">
                    <img src="assets/svg/line.svg" alt="line" className={"col-span-11"} />
                    <img
                        src="assets/svg/trophy-about-main.svg"
                        alt=""
                        className="ml-3 col-span-1"
                    />
                </div>

                <div className={"w-full grid grid-cols-11 gap-10"}>
                    <div className={"col-span-1"}></div>
                    <div className={"col-span-3 w-full h-full"}>
                        <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                            <div className={"p-4 md:p-5"}>
                                <div className={"flex"}>
                                    <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                        #2
                                    </div>
                                    <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                        Sprint planning
                                    </h3>
                                </div>
                                <p className="text-sm mt-2 text-gray-500">
                                    Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={"col-span-3 w-full h-full"}>
                        <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                            <div className={"p-4 md:p-5"}>
                                <div className={"flex"}>
                                    <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                        #4
                                    </div>
                                    <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                        Standups & weekly demos
                                    </h3>
                                </div>
                                <p className="text-sm mt-2 text-gray-500">
                                    Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={"col-span-3 w-full h-full"}>
                        <div className={"group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"}>
                            <div className={"p-4 md:p-5"}>
                                <div className={"flex"}>
                                    <div className="text-transparent bg-clip-text font-bold text-lg bg-gradient-to-l from-[#F76680] to-[#57007B] mr-3">
                                        #6
                                    </div>
                                    <h3 className="group-hover:text-blue-600 text-left font-semibold text-gray-800">
                                        Iterative delivery
                                    </h3>
                                </div>
                                <p className="text-sm mt-2 text-gray-500">
                                    We divide the implementation process into several checkpoints rather than a single deadline.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TimeLineSection;
