import React from "react";

const ContentCard = ({ children }) => {
    return (
        <section className="grid grid-cols-1 my-16 md:my-20 md:grid-cols-2 gap-5 max-w-7xl px-6 mx-auto">
            {children}
        </section>
    );
};

const CCText = ({ children, variant }) => {
    return (
        <div
            className={`${variant == "kiri" && "order-2 md:order-1"} ${
                variant == "kanan" && "order-3 md:order-2"
            }`}
        >
            {children}
        </div>
    );
};

const CCMedia = ({ children, variant }) => {
    return (
        <div
            className={`${variant == "kanan" && "order-1 md:order-2"} ${
                variant == "kiri" && "order-2 md:order-1"
            }`}
        >
            {children}
        </div>
    );
};

const CCTitle = ({ children }) => {
    return <h3 className="text-[28px] font-semibold">{children}</h3>;
};

const CCDescription = ({ children, className }) => {
    return (
        <p className={`text-lg font-normal text-[#2D3748] mt-7 ${className}`}>
            {children}
        </p>
    );
};

const CCTestimonial = ({ children }) => {
    return (
        <div className="flex space-x-4 mt-5 max-w-sm">
            <img src="assets/svg/deco-line2.svg" alt="" />
            <p className="text-transparent bg-clip-text  bg-gradient-to-l from-[#F76680] to-[#57007B]">
                "{children}"
            </p>
        </div>
    );
};

const CCPeople = ({ profile, name, position }) => {
    return (
        <div className="flex items-center space-x-2 mt-6">
            <img src={profile} alt="" className="h-10 w-10 rounded-full" />
            <div className="flex flex-col">
                <p className="text-lg font-semibold text-[#2D3748]">{name}</p>
                <p className="text-sm text-[#2D3748]">{position}</p>
            </div>
        </div>
    );
};

const CCImage = ({ image }) => {
    return (
        <img src={image} alt="image" className="w-full bg-cover rounded-md" />
    );
};

const CCVideo = ({ video }) => {
    return (
        <video
            autoPlay
            muted
            loop
            className="h-full w-full object-cover rounded-md"
        >
            <source src={video} type="video/mp4" />
        </video>
    );
};

const CCElipse = ({ className, variant }) => {
    const renderVariant1 = () => {
        return (
            <img
                src="assets/svg/ellipse2.svg"
                alt="Ellipse2"
                className={`absolute -z-10 ${className}`}
            />
        );
    };
    const renderVariant2 = () => {
        return (
            <img
                src="assets/svg/ellipse.svg"
                alt="Ellipse"
                className={`absolute -z-10 ${className}`}
            />
        );
    };

    return (
        <div>
            {variant === 1 && renderVariant1()}
            {variant === 2 && renderVariant2()}
        </div>
    );
};

ContentCard.Text = CCText;
ContentCard.Media = CCMedia;
ContentCard.Title = CCTitle;
ContentCard.Description = CCDescription;
ContentCard.Testimonial = CCTestimonial;
ContentCard.People = CCPeople;
ContentCard.Image = CCImage;
ContentCard.Video = CCVideo;
ContentCard.Ellipse = CCElipse;

export default ContentCard;
