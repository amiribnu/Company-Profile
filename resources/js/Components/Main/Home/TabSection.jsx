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

                    
                </div>
            </div>
        </section>
    );
};

export default TabSection;
