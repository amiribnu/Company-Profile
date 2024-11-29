import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TabSection = ({ technology }) => {
    const { t } = useTranslation();
    const page = usePage();
    const origin = page.props.ziggy.url;

    const [items, setItems] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        changeCategory("Cybersecurity");
    }, []);

    const changeCategory = (category) => {
        const filteredItems = technology
            .map((tech) => tech)
            .filter((data) => data.tech_category === category);
        setItems(filteredItems);
        setCategory(category);
    };

    return (
        <section className="py-10 md:py-16">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-12 px-4 lg:px-0">
                    <div className="mb-5">
                        <img
                            className="mx-auto"
                            src="assets/svg/deco-line-blue.svg"
                            alt=""
                        />
                    </div>
                    <h2 className="text-4xl">
                        {t("Bersama Perusahaan Terkemuka")}, <br />
                        <span className="font-bold">
                            {t("Mengukir Jejak Keberhasilan")}
                        </span>
                    </h2>
                </div>

                <div className="px-4 lg:px-0 flex flex-col gap-5">
                    <p className="text-justify md:text-center md:text-lg mb-6 text-slate-600">
                        {t("PT. Sapta Pilar Nusantara bangga telah menjalin kemitraan dengan beberapa perusahaan terkemuka. Kami berkomitmen untuk terus menjalin kemitraan yang kuat untuk menghadirkan solusi teknologi yang relevan dan terdepan bagi Anda, serta mempercepat kesuksesan bisnis Anda dalam era digital yang terus berkembang")}.
                    </p>

                    <div>
                        <Tab.Group>
                            <Tab.List className="mb-10 md:mb-12 font-semibold flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                                <Tab
                                    onClick={() =>
                                        changeCategory("Cybersecurity")
                                    }
                                    className={cn(
                                        "py-1 px-2 outline-none border-none text-slate-700",
                                        category === "Cybersecurity" &&
                                            "bg-gradient-to-r from-[#044DDC] to-[#5ADCE4] text-white rounded-xl"
                                    )}
                                >
                                    Cybersecurity
                                </Tab>
                                <Tab
                                    onClick={() =>
                                        changeCategory("Cloud Services")
                                    }
                                    className={cn(
                                        "py-1 px-2 outline-none border-none text-slate-700",
                                        category === "Cloud Services" &&
                                            "bg-gradient-to-r from-[#044DDC] to-[#5ADCE4] text-white rounded-xl"
                                    )}
                                >
                                    Cloud Services
                                </Tab>
                                <Tab
                                    onClick={() =>
                                        changeCategory("Training Authorized")
                                    }
                                    className={cn(
                                        "py-1 px-2 outline-none border-none text-slate-700",
                                        category === "Training Authorized" &&
                                            "bg-gradient-to-r from-[#044DDC] to-[#5ADCE4] text-white rounded-xl"
                                    )}
                                >
                                    Training Authorized
                                </Tab>
                                <Tab
                                    onClick={() =>
                                        changeCategory("IT Enterprise")
                                    }
                                    className={cn(
                                        "py-1 px-2 outline-none border-none text-slate-700",
                                        category === "IT Enterprise" &&
                                            "bg-gradient-to-r from-[#044DDC] to-[#5ADCE4] text-white rounded-xl"
                                    )}
                                >
                                    IT Enterprise
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="max-w-6xl flex items-center justify-center mx-auto py-2">
                                <Tab.Panel className="flex flex-wrap items-center justify-center gap-x-32 gap-y-10 sm:gap-y-20">
                                    {items.map((item, index) => (
                                        <img
                                            className="h-[100px]"
                                            key={`${item.id} - ${index}`}
                                            src={`${origin}/storage/${item.image}`}
                                            alt={item.name}
                                        />
                                    ))}
                                </Tab.Panel>
                                <Tab.Panel className="flex flex-wrap items-center justify-center gap-x-32 gap-y-10 sm:gap-y-20">
                                    {items.map((item, index) => (
                                        <img
                                            className="h-[100px]"
                                            key={`${item.id} - ${index}`}
                                            src={`${origin}/storage/${item.image}`}
                                            alt={item.name}
                                        />
                                    ))}
                                </Tab.Panel>
                                <Tab.Panel className="flex flex-wrap items-center justify-center gap-x-32 gap-y-10 sm:gap-y-20">
                                    {items.map((item, index) => (
                                        <img
                                            className="h-[100px]"
                                            key={`${item.id} - ${index}`}
                                            src={`${origin}/storage/${item.image}`}
                                            alt={item.name}
                                        />
                                    ))}
                                </Tab.Panel>
                                <Tab.Panel className="flex flex-wrap items-center justify-center gap-x-32 gap-y-10 sm:gap-y-20">
                                    {items.map((item, index) => (
                                        <img
                                            className="h-[100px]"
                                            key={`${item.id} - ${index}`}
                                            src={`${origin}/storage/${item.image}`}
                                            alt={item.name}
                                        />
                                    ))}
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabSection;
