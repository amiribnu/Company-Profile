import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import HeroSection from "@/Components/Main/Home/HeroSection";
import ServiceSection from "@/Components/Main/Home/ServiceSection";
import AccordionSection from "@/Components/Main/Home/AccordionSection";
import ClientSection from "@/Components/Main/Home/ClientSection";
import CustomerReviewSection from "@/Components/Main/Home/CustomerReviewSection";
import CustomerReviewSection2 from "@/Components/Main/Home/CustomerReviewSection2";
import BlogSection from "@/Components/Main/Home/BlogSection";
import SolutionSection from "@/Components/Main/Home/SolutionSection";
import ContactSection from "@/Components/Main/Home/ContactSection";
import TabSection from "@/Components/Main/Home/TabSection";

export default function Index(props) {
    return (
        <div>
            <Head>
                <title>Home</title>

                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-BRRD6D3YTK"
                ></script>

                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-BRRD6D3YTK');
                    `}
                </script>

                <script>
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '322186577180666');
                        fbq('track', 'PageView');
                    `}
                </script>

                <noscript>
                    {`
                        <img height="1" width="1" style="display:none"
                        src="https://www.facebook.com/tr?id=322186577180666&ev=PageView&noscript=1"
                        />
                    `}
                </noscript>
            </Head>

            {/* Content */}
            <HeroSection />
            <ServiceSection />
            <AccordionSection />
            <ClientSection />
            {/* <CustomerReviewSection /> */}
            <CustomerReviewSection2 />
            <SolutionSection />
            <TabSection technology={props.technology} />
            <BlogSection />
            <ContactSection />
        </div>
    );
}

Index.layout = (page) => <MainLayout children={page} />;
