import { usePage } from "@inertiajs/react";
import { IconBrandTiktok } from "@tabler/icons-react";
import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Youtube,
    YoutubeIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const FooterGuest = () => {
    // const origin = window.location.origin
    const { t } = useTranslation();
    const page = usePage();
    const origin = page.props.ziggy.url;

    return (
        <div className="border-t-2 border-blue-300 md:pt-[50px]">
            <div className="flex flex-col xl:flex-row xl:items-start p-4 md:p-8 lg:p-16 xl:p-0 space-y-10 lg:space-y-0 lg:space-x-[50px]">
                <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row xl:w-1/2">
                    <div className="flex flex-col items-center justify-center space-y-5 lg:w-1/2">
                        <img src="/assets/img/ProudIT Footer.png" />
                        <p className="text-[#718096] text-md max-w-[270px] text-center">
                            {t(
                                "Penyelenggara resmi ujian sertifikasi internasional"
                            )}
                        </p>
                        {/* <img src="/assets/img/img-footer.png" className="w-[98px]" /> */}
                    </div>

                    <div className="lg:w-1/2 space-y-[16px]">
                        <h4 className="text-[#3A86FF] text-lg font-bold">
                            {t("Kantor Bandung")}
                        </h4>
                        <div className="flex items-start space-x-4 group">
                            <div>
                                <MapPin className="text-[#3A86FF] group-hover:-translate-y-1 transition-all" />
                            </div>
                            <a
                                href="https://maps.app.goo.gl/n2g5HwFs1Fpcohp88"
                                target="_blank"
                                className="underline text-slate-500 text-sm hover:text-[#3A86FF]"
                            >
                                Komplek Bumi Panyawangan, Jl. Kamper II No.26,
                                Cimekar, Kec. Cileunyi, Kabupaten Bandung, Jawa
                                Barat{" "}
                            </a>
                        </div>
                        <div className="flex items-start space-x-4 group">
                            <Mail className="text-[#3A86FF] group-hover:-translate-y-1 transition-all" />
                            <div className="flex flex-col">
                                <a
                                    href="https://mail.google.com/mail/u/0/?fs=1&to=Info@proud-it.com&su=Your%20Subject&body=Your%20Messages&tf=cm"
                                    target="_blank"
                                    className="text-slate-500 text-sm underline hover:text-[#3A86FF]"
                                >
                                    Info@proud-it.com
                                </a>
                                <a
                                    href="https://mail.google.com/mail/u/0/?fs=1&to=partnership@proud-it.com&su=Your%20Subject&body=Your%20Messages&tf=cm"
                                    target="_blank"
                                    className="text-slate-500 text-sm underline hover:text-[#3A86FF]"
                                >
                                    partnership@proud-it.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 group">
                            <Phone className="text-[#3A86FF] group-hover:-translate-y-1 transition-all" />
                            <a
                                href="https://wa.me/6282128350067"
                                target="_blank"
                                className="text-slate-500 underline text-sm hover:text-[#3A86FF]"
                            >
                                +62-821-2835-0067
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:w-1/2 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:justify-between lg:pt-20 xl:pt-0 xl:space-x-[50px]">
                    <div className="xl:w-[25%] flex flex-col space-y-[16px]">
                        <h4 className="text-[#3A86FF] text-lg font-bold">
                            {t("Solusi TI")}
                        </h4>
                        <a
                            href="/"
                            className="text-sm font-medium text-slate-600 transition-all hover:text-[#3A86FF]"
                        >
                            {t("Konsultan TI")}
                        </a>
                        <a
                            href="/"
                            className="text-sm font-medium text-slate-600 transition-all hover:text-[#3A86FF]"
                        >
                            {t("Pelatihan & Sertifikasi TI")}
                        </a>
                        <a
                            href="/"
                            className="text-sm font-medium text-slate-600 transition-all hover:text-[#3A86FF]"
                        >
                            {t("Perusahaan Produk TI")}
                        </a>
                        <a
                            href="/"
                            className="text-sm font-medium text-slate-600 transition-all hover:text-[#3A86FF]"
                        >
                            {t("Keamanan Siber TI")}
                        </a>
                        <a
                            href="/"
                            className="text-sm font-medium text-slate-600 transition-all hover:text-[#3A86FF]"
                        >
                            {t("Pengembangan Perangkat Lunak")}
                        </a>
                        <a
                            href="/"
                            className="text-sm font-medium text-slate-600 transition-all hover:text-[#3A86FF]"
                        >
                            {t("Layanan Cloud")}
                        </a>
                    </div>

                    <div className="space-y-[16px] xl:w-[75%]">
                        {/* <div className="space-y-[16px]">
              <h4 className="text-[#3A86FF] text-lg font-bold">Join a Newsletter</h4>
              <p className="text-sm text-slate-500">Subscribe to our Newslatter</p>
            </div>
            <form>
              <div className="flex flex-col items-start mb-8 lg:flex-row lg:space-x-4">
                <input type="email" placeholder="Enter Your Email" className="h-[52px] w-[276px] p-3 border-2 rounded-sm border-[#76AEFF] outline-none focus:border-blue-600" />
                <button type="submit" className="bg-[#3A86FF] shadow hover:shadow-lg py-3 px-5 lg:py-[12px] lg:px-[40px] text-white rounded-lg mt-5 lg:mt-0 hover:bg-sky-600 transition-all">
                  Subscribe
                </button>
              </div>
            </form> */}
                        <div className="space-y-[16px]">
                            <h4 className="text-[#3A86FF] text-lg font-bold">
                                {t("Ikuti Kami")}
                            </h4>
                            <div className="flex space-x-3">
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/@proudit.official"
                                    className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all rounded-full w-[50px] h-[50px] p-2"
                                >
                                    <Youtube className="text-[#3a65ff] mx-auto mt-2 h-6" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/proudit.official/"
                                    className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all rounded-full w-[50px] h-[50px] p-2"
                                >
                                    <Instagram className="text-[#3a65ff] mx-auto mt-2 h-6" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://id.linkedin.com/company/proudit-official"
                                    className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all rounded-full w-[50px] h-[50px] p-2"
                                >
                                    <Linkedin className="text-[#3a65ff] mx-auto mt-2 h-6" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.tiktok.com/@proudit.official"
                                    className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all rounded-full w-[50px] h-[50px] p-2"
                                >
                                    <IconBrandTiktok className="text-[#3a65ff] mx-auto mt-2 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-5 md:mt-[36px] mb-[29px] space-y-[22px] items-center justify-center">
                <img src="/assets/svg/blue-divider.svg" className="w-[90%]" />
                <p className="text-xs text-center text-slate-600">
                    © 2023 Copyright by PT. Sapta Pilar Nusantara. All rights
                    reserved.
                </p>
            </div>
        </div>
    );
};

export default FooterGuest;
