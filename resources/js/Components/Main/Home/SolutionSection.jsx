import { useTranslation } from "react-i18next";

const SolutionSection = () => {
  const { t } = useTranslation();
  return (
    <section id="solution" className="bg-[#F7F7FA] py-8 md:py-10 lg:py-12 mt-5 md:mt-[60px] border-y-2">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="mb-5">
            <img
              className="mx-auto"
              src="assets/svg/deco-line-blue.svg"
              alt=""
            />
          </div>
          <h2 className="text-4xl">
            {t("Layanan kami dan")} <br />
            <span className="font-bold">{t("Solusi IT")}</span>
          </h2>
        </div>

        <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* items */}
          <div className="bg-white px-5 py-5 rounded-md outline outline-1 outline-slate-300">
            <div className="text-left flex flex-col lg:flex-row gap-6">
              <img
                className="w-fit h-fit"
                src="assets/img/1-home-img-it-consultant.png"
                alt=""
              />
              <div className="flex flex-col gap-4 justify-items-end">
                <div>
                  <h4 className="font-bold mb-3">
                    {t("about.services.cards.card1.title")}
                  </h4>
                  <p className="text-sm text-justify">
                    {t("about.services.cards.card1.description")}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between"></div>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-5 rounded-md outline outline-1 outline-slate-300">
            <div className="text-left flex flex-col lg:flex-row gap-6 h-full">
              <img
                className="w-fit h-fit"
                src="assets/img/2-home-img-software-application.png"
                alt=""
              />
              <div className="flex flex-col h-full gap-4 justify-between">
                <div>
                  <h4 className="font-bold mb-3">
                    {t("about.services.cards.card4.title")}
                  </h4>
                  <p className="text-sm text-justify">
                    {t("about.services.cards.card4.description")}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between"></div>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-5 rounded-md outline outline-1 outline-slate-300">
            <div className="text-left flex flex-col lg:flex-row gap-6 h-full">
              <img
                className="w-fit h-fit"
                src="assets/img/3-home-img-it-training.png"
                alt=""
              />
              <div className="flex flex-col gap-4 justify-between">
                <div>
                  <h4 className="font-bold mb-3">
                    {t("about.services.cards.card5.title")}
                  </h4>
                  <p className="text-sm text-justify">
                    {t("about.services.cards.card5.description")}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between"></div>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-5 rounded-md outline outline-1 outline-slate-300">
            <div className="text-left flex flex-col lg:flex-row gap-6 h-full">
              <img
                className="w-fit h-fit"
                src="assets/img/4-home-img-it-product.png"
                alt=""
              />
              <div className="flex flex-col gap-4 justify-between">
                <div>
                  <h4 className="font-bold mb-3">
                    {t("about.services.cards.card2.title")}
                  </h4>
                  <p className="text-sm text-justify">
                    {t("about.services.cards.card2.description")}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between"></div>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-5 rounded-md outline outline-1 outline-slate-300">
            <div className="text-left flex flex-col lg:flex-row gap-6 h-full">
              <img
                className="w-fit h-fit"
                src="assets/img/5-home-img-cloud-service.png"
                alt=""
              />
              <div className="flex flex-col gap-4 justify-between">
                <div>
                  <h4 className="font-bold mb-3">
                    {t("about.services.cards.card6.title")}
                  </h4>
                  <p className="text-sm text-justify">
                    {t("about.services.cards.card6.description")}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between"></div>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-5 rounded-md outline outline-1 outline-slate-300">
            <div className="text-left flex flex-col lg:flex-row gap-6 h-full">
              <img
                className="w-fit h-fit"
                src="assets/img/6-home-img-it-cybersecurity.png"
                alt=""
              />
              <div className="flex flex-col gap-4 justify-between">
                <div>
                  <h4 className="font-bold mb-3">
                  {t("about.services.cards.card3.title")}
                  </h4>
                  <p className="text-sm text-justify">
                    {t("about.services.cards.card3.description")}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
