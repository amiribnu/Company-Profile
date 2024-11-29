import BannerSection from "@/Components/Main/About/BannerSection.jsx";
import CertificateSection from "@/Components/Main/About/CertificateSection.jsx";
import ContactUsSection from "@/Components/Main/About/ContactUsSection.jsx";
import HeadSection from "@/Components/Main/About/HeadSection.jsx";
import ServiceSection from "@/Components/Main/About/ServiceSection.jsx";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function Index({ certificate }) {
    const { t } = useTranslation();

    return (
        <div>
            <Head>
                <title>About</title>

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

            {/* Banner */}
            <BannerSection />

            {/* Head 3 */}
            <HeadSection
                title={t("about.certification.title")}
                subTitle={t("about.certification.subTitle")}
                description={t("about.certification.description")}
            />

            <CertificateSection certificate={certificate} />

            {/* Head 4 */}
            <HeadSection subTitle={t("about.services.subTitle")} />

            <ServiceSection />

            {/* Contact Us */}
            <ContactUsSection />
        </div>
    );
}

Index.layout = (page) => <MainLayout children={page} />;
