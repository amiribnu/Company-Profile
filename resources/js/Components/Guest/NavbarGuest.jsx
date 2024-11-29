import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ChevronDown, Menu } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import ApplicationLogo from "../ApplicationLogo";
import { Button } from "../ui/button";
import NavLink from "./NavLinkGuest";
import { useTranslation } from "react-i18next";

export default function NavbarGuest() {
    const { t, i18n } = useTranslation();
    const [top, setTop] = useState(true);
    const [drawer, setDrawer] = useState(false);
    const [language, setLanguage] = useState(localStorage.getItem("language"));

    useEffect(() => {
        const scrollHeader = () => {
            window.scrollY > 10 ? setTop(false) : setTop(true);
        };

        const language = localStorage.getItem("language");
        if (language) {
            i18n.changeLanguage(language);
        }

        window.addEventListener("scroll", scrollHeader);
        return () => window.removeEventListener("scroll", scrollHeader);
    }, [top]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
        localStorage.setItem("language", lng);
    };

    // useEffect(() => {
    //     const scrollHeader = () => {
    //         window.scrollY > 10 ? setTop(false) : setTop(true);
    //     };

    //     window.addEventListener("scroll", scrollHeader);
    //     return () => window.removeEventListener("scroll", scrollHeader);
    // }, [top]);

    // const pages = [
    //     {
    //         name: "Beranda",
    //         url: "/",
    //         route: "home.index",
    //     },
    //     {
    //         name: "Tentang Kami",
    //         url: "/about",
    //         route: "about.index",
    //     },
    //     {
    //         name: "Layanan IT",
    //         url: "/it-services",
    //         route: "it-services.index",
    //     },
    //     {
    //         name: "Training",
    //         url: "/training",
    //         route: "training.index",
    //     },
    //     {
    //         name: "Kerja Sama",
    //         url: "/partnership",
    //         route: "partnership.index",
    //     },
    //     {
    //         name: "Blog",
    //         url: "/blog",
    //         route: "post.index",
    //     },
    //     {
    //         name: "Karir",
    //         url: "/career",
    //         route: "career.index",
    //     },
    //     {
    //         name: "Kontak Kami",
    //         url: "/contact-us",
    //         route: "contact.index",
    //     },
    // ];

    return (
        <header
            className={`bg-white transition-all fixed w-full top-0 z-30 ${
                !top && `shadow-lg`
            }`}
        >
            <nav
                className={`mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 transition-all duration-300 ${
                    !top ? "h-[70px] md:h-[75px] py-0" : "h-[80px] md:h-[85px]"
                }`}
                aria-label="Global"
            >
                <div className="relative -left-2 md:-left-1 lg:-left-4 lg:flex-1">
                    <Link href="/">
                        <ApplicationLogo className="h-11" />
                    </Link>
                </div>
                {/* Mobile View */}
                <div className="flex items-center justify-center space-x-3 lg:hidden">
                    {language === "en" ? (
                        <button onClick={() => changeLanguage("id")}>
                            <img
                                src="/assets/svg/language/lang-indo.svg"
                                alt="English"
                                className="inline-block w-7 h-7"
                            />
                        </button>
                    ) : (
                        <button onClick={() => changeLanguage("en")}>
                            <img
                                src="/assets/svg/language/lang-inggris.svg"
                                alt="English"
                                className="inline-block w-7 h-7"
                            />
                        </button>
                    )}
                    <Sheet open={drawer} onOpenChange={setDrawer}>
                        <SheetTrigger>
                            <Menu className="text-[#3A86FF]" />
                        </SheetTrigger>
                        <SheetContent side="top">
                            <div className="flex flex-col items-start mt-10 space-y-4">
                                <button onClick={() => setDrawer(false)}>
                                    <NavLink
                                        className="font-bold"
                                        href="/"
                                        active={route().current("home.index")}
                                    >
                                        {t("Beranda")}
                                    </NavLink>
                                </button>
                                <button onClick={() => setDrawer(false)}>
                                    <NavLink
                                        className="font-bold"
                                        href="/about"
                                        active={route().current("about.index")}
                                    >
                                        {t("Tentang Kami")}
                                    </NavLink>
                                </button>
                                <Collapsible>
                                    <CollapsibleTrigger>
                                        <p className="inline-flex items-center text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out focus:outline-none">
                                            {t("Layanan TI")}{" "}
                                            <ChevronDown className="w-4 h-4 text-blue-600" />
                                        </p>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="flex flex-col ml-2 space-y-2 text-sm font-medium text-gray-600">
                                        <a
                                            href="/#solution"
                                            onClick={() => setDrawer(false)}
                                            className="mt-3"
                                        >
                                            {t("Konsultan TI")}
                                        </a>
                                        <a
                                            href="/#solution"
                                            onClick={() => setDrawer(false)}
                                        >
                                            {t("Pelatihan & Sertifikasi TI")}
                                        </a>
                                        <a
                                            href="/#solution"
                                            onClick={() => setDrawer(false)}
                                        >
                                            {t("Layanan Cloud")}
                                        </a>
                                        <a
                                            href="/#solution"
                                            onClick={() => setDrawer(false)}
                                        >
                                            {t("Aplikasi Perangkat Lunak")}
                                        </a>
                                        <a
                                            href="/#solution"
                                            onClick={() => setDrawer(false)}
                                        >
                                            {t("Konsultan TI")}
                                        </a>
                                        <a
                                            href="/#solution"
                                            onClick={() => setDrawer(false)}
                                        >
                                            {t("Keamanan Siber TI")}
                                        </a>
                                    </CollapsibleContent>
                                </Collapsible>
                                <button onClick={() => setDrawer(false)}>
                                    <NavLink
                                        className="font-bold"
                                        href="https://training.proud-it.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t("Pelatihan")}
                                    </NavLink>
                                </button>
                                {/* <button onClick={() => setDrawer(false)}>
                                    <NavLink
                                        className="font-bold"
                                        href="/about#contact"
                                    >
                                        Kerja Sama
                                    </NavLink>
                                </button> */}
                                <button onClick={() => setDrawer(false)}>
                                    <NavLink
                                        className="font-bold"
                                        href="/blog"
                                        active={route().current("blog.index")}
                                    >
                                        {t("Blog")}
                                    </NavLink>
                                </button>
                                <button onClick={() => setDrawer(false)}>
                                    <NavLink
                                        className="font-bold"
                                        href="https://www.linkedin.com/company/proudit-official"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t("Karier")}
                                    </NavLink>
                                </button>
                            </div>
                            <Link
                                href="/about#contact"
                                className="flex items-center justify-center"
                            >
                                <Button
                                    variant="primary"
                                    onClick={() => setDrawer(false)}
                                >
                                    {t("Kontak")}
                                </Button>
                            </Link>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                    <NavLink
                        className="font-bold"
                        href="/"
                        active={route().current("home.index")}
                    >
                        {t("Beranda")}
                    </NavLink>
                    <NavLink
                        className="font-bold"
                        href="/about"
                        active={route().current("about.index")}
                    >
                        {t("Tentang Kami")}
                    </NavLink>
                    <div className="inline-flex text-sm">
                        <Popover className="relative">
                            <Popover.Button className="flex transition-all hover:text-blue-400">
                                <span>{t("Layanan TI")}</span>
                                <ChevronDownIcon
                                    className="w-5 h-5 ml-2 text-blue-600 transition duration-150 ease-in-out group-hover:text-opacity-80"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute z-10 w-screen max-w-sm p-4 mt-4 bg-white rounded-md shadow-md outline-slate-300">
                                    <div className="grid grid-cols-2 gap-2">
                                        <a
                                            href="/#solution"
                                            className="flex items-center gap-2 p-4 rounded-md hover:bg-slate-100"
                                        >
                                            <img
                                                className="w-10 h-10"
                                                src="/assets/img/1-home-img-it-consultant.png"
                                                alt=""
                                            />
                                            <span className="font-bold text-gray-900">
                                                {t("Konsultan TI")}
                                            </span>
                                        </a>
                                        <a
                                            href="/#solution"
                                            className="flex items-center gap-2 p-4 rounded-md hover:bg-slate-100"
                                        >
                                            <img
                                                className="w-10 h-10"
                                                src="/assets/img/2-home-img-software-application.png"
                                                alt=""
                                            />
                                            <span className="font-bold text-gray-900">
                                                {t("Aplikasi Perangkat Lunak")}
                                            </span>
                                        </a>
                                        <a
                                            href="/#solution"
                                            className="flex items-center gap-2 p-4 rounded-md hover:bg-slate-100"
                                        >
                                            <img
                                                className="w-10 h-10"
                                                src="/assets/img/3-home-img-it-training.png"
                                                alt=""
                                            />
                                            <span className="font-bold text-gray-900">
                                                {t(
                                                    "Pelatihan & Sertifikasi TI"
                                                )}
                                            </span>
                                        </a>
                                        <a
                                            href="/#solution"
                                            className="flex items-center gap-2 p-4 rounded-md hover:bg-slate-100"
                                        >
                                            <img
                                                className="w-10 h-10"
                                                src="/assets/img/4-home-img-it-product.png"
                                                alt=""
                                            />
                                            <span className="font-bold text-gray-900">
                                                {t("Konsultan TI")}
                                            </span>
                                        </a>
                                        <a
                                            href="/#solution"
                                            className="flex items-center gap-2 p-4 rounded-md hover:bg-slate-100"
                                        >
                                            <img
                                                className="w-10 h-10"
                                                src="/assets/img/5-home-img-cloud-service.png"
                                                alt=""
                                            />
                                            <span className="font-bold text-gray-900">
                                                {t("Layanan Cloud")}
                                            </span>
                                        </a>
                                        <a
                                            href="/#solution"
                                            className="flex items-center gap-2 p-4 rounded-md hover:bg-slate-100"
                                        >
                                            <img
                                                className="w-10 h-10"
                                                src="/assets/img/6-home-img-it-cybersecurity.png"
                                                alt=""
                                            />
                                            <span className="font-bold text-gray-900">
                                                {t("Keamanan Siber TI")}
                                            </span>
                                        </a>
                                    </div>

                                    <img src="/solutions.jpg" alt="" />
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                    <NavLink
                        className="font-bold"
                        href="https://training.proud-it.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("Pelatihan")}
                    </NavLink>
                    {/* <NavLink
                        className="font-bold"
                        href="/about#contact"
                    >
                        Kerja Sama
                    </NavLink> */}
                    <NavLink
                        className="font-bold"
                        href="/blog"
                        active={route().current("blog.index")}
                    >
                        {t("Blog")}
                    </NavLink>
                    <NavLink
                        className="font-bold"
                        href="https://www.linkedin.com/company/proudit-official"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("Karier")}
                    </NavLink>
                    <NavLink
                        className="font-bold"
                        href="/about#contact"
                        active={route().current("contact.index")}
                    >
                        {t("Kontak")}
                    </NavLink>
                    {language === "en" ? (
                        <button onClick={() => changeLanguage("id")}>
                            <img
                                src="/assets/svg/language/lang-inggris.svg"
                                alt="English"
                                className="inline-block w-7 h-7"
                            />
                        </button>
                    ) : (
                        <button onClick={() => changeLanguage("en")}>
                            <img
                                src="/assets/svg/language/lang-indo.svg"
                                alt="Indoneisa"
                                className="inline-block w-7 h-7"
                            />
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
}
