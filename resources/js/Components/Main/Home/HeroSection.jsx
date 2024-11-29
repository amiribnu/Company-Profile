import { Button } from '@/Components/ui/button'
import { Link } from '@inertiajs/react'
import { useTranslation } from "react-i18next";


const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full px-2 md:px-4 lg:px-8 xl:px-0 lg:max-w-7xl mx-auto lg:pt-20'>
      <div className='flex flex-col lg:flex-row items-center lg:justify-between space-x-2'>
        {/* Heading */}
        <div className='w-full px-4 lg:w-1/2 flex flex-col items-start pt-28 sm:pt-32 xl:pt-0'>
          <h2 className='text-gray-900 sm:font-medium text-xl sm:text-3xl mb-2'>{t("Mitra dalam solusi")} <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#66C3F7] to-90% to-[#1C5AF9]'>{t("IT Services dan")}</span></h2>
          <h1 className='font-extrabold text-4xl md:text-5xl'>{t("Tingkatkan")} <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#66C3F7] to-90% to-[#1C5AF9]'>{t("Bisnis Digital")} </span>{t("Anda")}</h1>
          <p className='mt-4 mb-8 sm:mt-8 sm:mb-12 text-sm sm:text-lg text-slate-600'>{t("Pelajari cara mengadopsi dan mengadaptasi teknologi terbaru, sehingga bisnis Anda tidak ketinggalan dan unggul dalam persaingan")}.</p>
          <Link href='/about#contact'>
            <Button size="lg" variant="primary">
              {t("Mulai")}!
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div className='w-full lg:w-1/2'>
          <img src='assets/img/1-home-main.png' alt='PT Sapta Pilar Nusantara' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
