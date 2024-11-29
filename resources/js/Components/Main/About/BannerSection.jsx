import { useTranslation } from "react-i18next";

function BannerSection(props) {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-[url('/assets/img/bg-about-main.jpg')] bg-center bg-cover mx-auto pt-10 lg:pt-20">
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
                <div className={`text-center`}>
                    <div className={`container px-4 mx-auto`}>
                        <div className={`max-w-4xl mx-auto text-center`}>
                            <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                                {t("about.banner.h1")}
                            </h1>
                            <p className="max-w-4xl mx-auto mb-10 text-lg text-gray-300">
                                {t("about.banner.p")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;
