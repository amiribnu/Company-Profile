import { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactUsSection() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Halo admin ProudIT, saya dengan __ (txtnama) dengan nomor __ (txt nomor) dan email ___ (txt email)  berminat ingin mengetahui __ ( txt pesan)

        const whatsappMessage = `Halo admin ProudIT, saya ${formData.name} dengan nomor ${formData.phone} dan email ${formData.email}. berminat ingin mengetahui ${formData.message}`;

        const url = `https://api.whatsapp.com/send?phone=6282128350067&text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(url, "_blank");
    };

    return (
        <section id="contact" className={"w-full relative bg-[#EDEDF2B2]"}>
            <img
                src={`assets/img/line-about-main.png`}
                className={`absolute -z-10 bottom-0 right-0`}
            />
            <div
                className={`flex flex-col max-w-7xl md:flex-row mx-auto justify-between items-center p-10 md:p-20  h-[596px] w-full`}
            >
                <div className={`w-full md:w-1/2`}>
                    <p className={`text-xl md:text-4xl mb-2 md:mb-14`}>
                        {t("about.contact.title1")}
                        <span className={`font-bold`}>
                            {t("about.contact.title2")}
                            <span className={`text-[#1547AB]`}>
                                {t("about.contact.title3")}
                            </span>
                        </span>
                    </p>
                    <span className={`text-lg md:text-2xl`}>
                        {t("about.contact.followUs")}
                    </span>
                    <div
                        className={`flex space-x-5 md:space-x-10 mt-5 h-6 md:h-10`}
                    >
                        <a
                            href="https://www.youtube.com/@proudit.official"
                            target="_blank"
                        >
                            <img src={`assets/img/icon-youtube.png`} />
                        </a>
                        <a
                            href="https://instagram.com/proudit.official?igshid=NTc4MTIwNjQ2YQ"
                            target="_blank"
                        >
                            <img src={`assets/img/icon-instagram.png`} />
                        </a>
                        <a
                            href="https://id.linkedin.com/company/proudit-official"
                            target="_blank"
                        >
                            <img src={`assets/img/icon-linkedin.png`} />
                        </a>
                        <a
                            href="https://www.tiktok.com/@proudit.official"
                            target="_blank"
                        >
                            <img src={`assets/img/icon-tiktok.png`} />
                        </a>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className={`w-full md:w-1/2 mt-10 md:mt-0 md:ml-5 space-y-5`}
                >
                    <div className={`flex space-x-5 md:space-x-10`}>
                        <input
                            className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400`}
                            placeholder={t("about.contact.placeholder.phone")}
                            type="number"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                })
                            }
                        />
                        <input
                            className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400`}
                            placeholder={t("about.contact.placeholder.name")}
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <input
                        className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400`}
                        placeholder={t("about.contact.placeholder.email")}
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    <textarea
                        className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400`}
                        rows={`3`}
                        placeholder={t("about.contact.placeholder.message")}
                        type="text"
                        required
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value,
                            })
                        }
                    />
                    <button
                        type="submit"
                        className={`py-3 px-10 inline-flex justify-center items-center gap-2 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-[#044DDC] to-[#5ADCE4]`}
                    >
                        {t("about.contact.sendButton")}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactUsSection;
