import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger
} from "@/Components/ui/accordion"
import { Link } from "@inertiajs/react"
import { IconArrowRight } from "@tabler/icons-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from "react-i18next";

const AccordionSection = () => {
    const { t } = useTranslation();
return (
<div className="relative">
    <img src="/assets/svg/home-1.svg" className='absolute -z-10 -top-[36px] right-[396px]' />
    <div
        className='flex flex-col lg:flex-row justify-between items-center w-full px-2 md:px-4 lg:px-8 xl:px-0 lg:max-w-7xl mx-auto space-x-0 lg:space-x-3'>
        {/* Content */}
        <div className='w-full px-4 lg:w-1/2 pt-10'>
            <img src='assets/svg/deco-line-blue.svg' />
            <h2 className='font-bold text-4xl my-6'>{t("Bangun Kepercayaan dan Berikan Solusi")}</h2>
            <p className='text-md text-slate-600'>{t("ProudIT berkomitmen memberikan layanan IT terbaik dengan pelayanan ramah, Delivery & sharing berkaitan dengan teknologi yang sedang trend dengan Harga yang terbaik, sesuai dengan kebutuhan Perusahaan")}.</p>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <p className="sm:text-md text-slate-800"><span className="font-bold text-xl">P</span>erseverance
                        </p>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-slate-500">{t("Kami memiliki tekad dan semangat pantang menyerah untuk mencapai tujuan kami")}.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        <p className="text-md text-slate-800"><span className="font-bold text-xl">R</span>esilience</p>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-slate-500">{t("Ketangguhan kami menghadapi tantangan adalah landasan kesuksesan kami")}.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        <p className="text-md text-slate-800"><span className="font-bold text-xl">O</span>ptimism</p>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-slate-500">{t("Kami memandang masa depan dengan penuh optimisme dan keyakinan")}.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        <p className="text-md text-slate-800"><span className="font-bold text-xl">U</span>nity</p>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-slate-500">{t("Kami adalah tim yang solid, bersatu, dan saling mendukung")}.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        <p className="text-md text-slate-800"><span className="font-bold text-xl">D</span>edication</p>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-slate-500">{t("Dedikasi kami terhadap pekerjaan adalah kunci kesuksesan kami")}.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        <p className="text-md text-slate-800"><span className="font-bold text-xl">I</span>nnovation</p>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-slate-500">{t("Kami selalu mencari cara baru dan inovatif untuk memajukan bisnis kami")}.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>
                        <p className="text-md text-slate-800"><span className="font-bold text-xl">T</span>ransparency
                        </p>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-slate-500">{t("Kami mengutamakan transparansi dalam semua tindakan dan keputusan kami")}.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        {/* Video */}
        <div className="w-full lg:w-1/2 pt-10 lg:pt-40">
            <div className="swiper-container">
                <Swiper
                    className="has-ratio rounded-2xl shadow-lg w-full h-[240px] sm:h-[360px] md:w-[640px] lg:w-[500px] lg:h-[280px] xl:h-[360px] xl:w-[640px]"
                    modules={[Navigation]}
                    navigation={{hideOnClick: true}}
                >
                    <SwiperSlide>
                        <figure>
                            <video width='100%' height='100%'
                            controls
                            autoPlay
                            muted
                            loop
                            loading='lazy'>
                                <source src="assets/video/accordionvid.mp4" allowFullScreen
                                    style={{ width: '100%', height: '100%' }} type="video/mp4">
                                </source>
                            </video>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure width='100%' height='100%'>
                            <img src="assets/img/accordion1.jpg" style={{ width: '100%', height: '100%' }} loading="lazy"></img>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure width='100%' height='100%'>
                            <img src="assets/img/accordion2.jpg" style={{ width: '100%', height: '100%' }} loading="lazy"></img>
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Link href="/about"
                className="flex mt-4 text-[#1C5AF9] cursor-pointer transition-all hover:translate-x-2 hover:text-indigo-700">
            <p className="text-base ml-2 font-medium">{t("Informasi lebih lanjut")}</p>
            <IconArrowRight className="ml-2" />
            </Link>
        </div>
    </div>
    <img src="/assets/svg/Ellipse 187.svg" className='absolute right-0' />
</div>
)
}

export default AccordionSection
