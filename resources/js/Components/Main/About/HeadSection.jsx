import React from "react";

function HeadSection({ title, subTitle, description }) {
    return (
        <section className="container flex flex-col items-center justify-center my-11 text-gray-900 text-center">
            <div>
                <img src="assets/svg/deco-line-blue.svg" alt="" />
            </div>
            <h3 className="text-4xl font-normal mt-6">{title}</h3>
            <span className="text-4xl font-bold mt-4 text-[#0D52DC]">
                {subTitle}
            </span>
            <p className={"max-w-5xl mt-4"}>{description}</p>
        </section>
    );
}

export default HeadSection;
