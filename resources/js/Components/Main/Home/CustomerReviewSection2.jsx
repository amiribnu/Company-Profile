import { useTranslation } from "react-i18next";

const cardData = [
  {
    url: "https://maps.app.goo.gl/fcPfPvqn5yrJwEfu8",
    picture: "/assets/img/2-customer.png",
    name: "DD Hassel Putra Q",
    text: 'Ga nyesel ikutan workshop ini, gila sih se berkualitas ini cmn bayar seikhlas nya aja, ilmunya ga setengah" salut untuk usaha nya dalam mengadakan training, jangan direm bosku, gass tross',
  },
  {
    url: "https://g.co/kgs/Beo1VC",
    picture: "/assets/img/1-customer.png",
    name: "Lumino Energy",
    text: "Perusahaan kami (Limino) Kemarin mengadakan pelatihan Fortigate disini trainernya bagus dan paham. Cocok juga untuk pelatihan pemerintah dan perusahaan",
    toLeft: true
  },
  {
    url: "https://maps.app.goo.gl/NSocDPPbvimXD8ca8",
    picture: "/assets/img/3-customer.png",
    name: "Kim Indra",
    text: "Materi Trainingnya Bagus dan trainer nya juga sangat profesional dan juga asik, ga ngebosenin ketika menyampaikan materi, dan juga biaya training yg sangat terjangkau,",
  },
]

const CustomerReviewSection2 = () => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-4 pb-6 lg:py-0 px-4 md:px-6 lg:px-10 xl:py-[34px] xl:px-[54px] shadow rounded-md flex flex-col lg:flex-row justify-evenly lg:justify-between items-center max-w-7xl mx-auto xl:w-[1336px] sm:h-[678px] bg-gradient-to-b from-[#F2FDFF80] to-[#95D3E0AB]">
      {/* Heading */}
      <div>
        <div className="hidden lg:block">
          <h2 className="text-[37px]">Review Customer</h2>
          <h2 className="text-[35px] font-bold">{t("Tentang ProudIT")}</h2>
        </div>
        <img className="my-4 mx-auto lg:mx-0" src="assets/svg/deco-line-blue.svg" />
        <div className="my-4">
          <div className="flex space-x-4">
            <img src="assets/svg/logos_google.svg" alt="Google" />
            <span className="text-[30px]">Rating</span>
          </div>
          <div className="flex space-x-[10px]">
            <span className="font-semibold">5.0</span>
            <img src="assets/svg/5stars.svg" className="w-28 md:w-32" alt="Stars" />
            <span>136 reviews</span>
          </div>
        </div>
        <a className="hidden lg:block" href="https://www.google.com/maps/place/Proud+IT+Training+Bandung+%7C+Kursus+Web,+Cybersecurity,+IT+Networking,+Microsoft+Office+%26+Digital+Marketing/@-6.9508611,107.7306821,17z/data=!4m16!1m7!3m6!1s0x2e68c326c4079cb3:0xa6427539b72253d7!2sProud+IT+Training+Bandung+%7C+Kursus+Web,+Cybersecurity,+IT+Networking,+Microsoft+Office+%26+Digital+Marketing!8m2!3d-6.9508611!4d107.733257!16s%2Fg%2F11pccw3wyw!3m7!1s0x2e68c326c4079cb3:0xa6427539b72253d7!8m2!3d-6.9508611!4d107.733257!9m1!1b1!16s%2Fg%2F11pccw3wyw?entry=ttu" target="_blank">
          <button className="bg-gradient-to-r from-[#044DDC] to-[#5ADCE4] rounded-md text-lg text-white font-bold px-6 py-4 mt-12 hover:shadow-xl duration-300 transition-all">
            {t("Tulis Review")}
          </button>
        </a>
      </div>

      {/* Card */}
      <div className="flex flex-col gap-4">
        {cardData.map((data, index) => (
          <div key={index}>
            <CustomerReviewCard {...data} />
          </div>
        ))}
      </div>

      <img
        src="assets/img/bg-customer-review.png"
        className="absolute -z-10 left-0 bottom-0 w-[60%]"
        alt=""
      />
    </section>
  );
};

const CustomerReviewCard = ({ url, picture, name, text, key, toLeft }) => {
    const { t } = useTranslation();
  return (
    <a href={url} target="_blank">
      <div className={`relative py-3 px-4 bg-white rounded-md shadow-xl hover:shadow-2xl duration-300 transition-all cursor-pointer sm:h-[160px] lg:w-[500px] xl:w-[602.244px] ${toLeft && " lg:right-12"}`}>
        {/* Profile */}
        <div className="flex justify-between">
          {/* Profile image */}
          <div className="flex space-x-3 items-center">
            <img
              alt="Customer picture"
              src={picture}
              className="w-8 h-8 md:w-9 md:h-9"
            />
            <p className="font-bold">{name}</p>
          </div>
          {/* Stars */}
          <div className="items-center">
            <img src="assets/svg/5stars.svg" className="w-24 md:w-28" alt="Stars" />
          </div>
        </div>
        {/* Review text */}
        <p className="mt-2 text-sm xl:text-base">
          {text}
        </p>
        <p className="absolute hidden sm:block bottom-4 right-4 text-sm text-slate-500">{t("Baca Selengkapnya")}</p>
      </div>
    </a>
  )
}

export default CustomerReviewSection2;
