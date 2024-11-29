import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section className="my-12 md:my-20">
      <div className="max-w-7xl mx-auto text-center shadow-md hover:shadow-xl duration-300 transition-all">
        <div className="bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7] rounded-lg py-10 px-2 md:p-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h2 className="text-center lg:text-start font-medium tracking-tight text-4xl">
              {t("Tertarik untuk bekerjasama dengan kami?")} <br />
              {t("Tingkatkan kualitas IT Services")}
              <br />
              {t("Perusahaan anda sekarang!")}
            </h2>

            <div className="flex flex-col gap-6 mt-10 lg:mt-0">
              <img
                className="mx-auto rotate-180"
                src="assets/svg/splash-hubungi.svg"
                alt=""
              />
              <a
                className="bg-gradient-to-r from-[#044DDC] to-[#5ADCE4] rounded-md text-lg text-white font-bold px-6 py-4 hover:shadow-xl duration-300 transition-all"
                href="/about#contact"
              >
                {t("Hubungi kami sekarang!")}
              </a>
              <img
                className="mx-auto"
                src="assets/svg/splash-hubungi.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
