import { useTranslation } from "react-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg h-[350px] w-screen md:w-[350px] transition-all group hover:-translate-y-2 hover:outline-2 hover:outline hover:outline-blue-500 hover:shadow-2xl">
            <div>
                <img src={`/assets/img/${icon}`} alt={icon} />
            </div>
            <h3 className="font-semibold text-xl py-4 group-hover:text-blue-600">
                {title}
            </h3>
            <p className="text-slate-700 text-md">{description}</p>
        </div>
    );
};

const ServiceSection = () => {
    const { t } = useTranslation();

    const serviceData = [
        {
            icon: "IT Consultant.png",
            title: t("about.services.cards.card1.title"),
            description: t("about.services.cards.card1.description"),
        },
        {
            icon: "IT Product Hardware.png",
            title: t("about.services.cards.card2.title"),
            description: t("about.services.cards.card2.description"),
        },
        {
            icon: "IT Cybersecurity.png",
            title: t("about.services.cards.card3.title"),
            description: t("about.services.cards.card3.description"),
        },
        {
            icon: "IT Software Application.png",
            title: t("about.services.cards.card4.title"),
            description: t("about.services.cards.card4.description"),
        },
        {
            icon: "IT Consultant.png",
            title: t("about.services.cards.card5.title"),
            description: t("about.services.cards.card5.description"),
        },
        {
            icon: "IT Software Application.png",
            title: t("about.services.cards.card6.title"),
            description: t("about.services.cards.card6.description"),
        },
    ];

    return (
        <>
            <div className="w-full pb-20 mt-10">
                <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    grabCursor
                    className="mySwiper"
                    style={{ paddingTop: 20, paddingBottom: 70 }}
                >
                    <div className="mb-20">
                        {serviceData.map((data, index) => (
                            <SwiperSlide
                                className="service-swiper-slide"
                                key={`${index} - ${data.title}`}
                            >
                                <ServiceCard
                                    icon={data.icon}
                                    title={data.title}
                                    description={data.description}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default ServiceSection;
