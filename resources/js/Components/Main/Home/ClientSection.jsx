import { useTranslation } from "react-i18next";

const ClientSection = () => {
  const { t } = useTranslation();
  return (
    <div className='mt-[85px] relative'>
      <div className='w-full px-2 md:px-4 lg:px-8 xl:px-0 lg:max-w-7xl mx-auto mb-[40px]'>
        <div className='px-4'>
          <img src='assets/svg/deco-line-blue.svg' />
          <h2 className='text-4xl mt-6 mb-4'>{t("Kepercayaan Anda")}</h2>
          <h2 className='font-black text-4xl'>{t("Pilar Kesuksesan Kami")}</h2>
        </div>
      </div>
      <img src="/assets/svg/home-1.svg" className='absolute top-[130px] right-[506px]' />
      <div className='flex items-center shadow-lg mb-5 md:mb-10 lg:mb-20 bg-[#F7F7FA] w-full h-[150px] relative overflow-hidden'>
        <ul className='animate-slide-left brands py-10 flex space-x-[80px] items-center'>
            <img className='h-[70px]' src="/assets/img/PT GDE.png" alt="PT GDE" />
            <img className='h-[70px]' src="/assets/img/Telkom Indonesia.png" alt="Telkom Indonesia" />
            <img className='h-[70px]' src="/assets/img/Telkom Akses.png" alt="Telkom Akses" />
            <img className='h-[70px]' src="/assets/img/Infomedia.png" alt="Infomedia" />
            <img className='h-[70px]' src="/assets/img/MNC VISION.png" alt="MNC VISION" />
            <img className='h-[70px]' src="/assets/img/Kemendag.png" alt="Kemendag" />
            <img className='h-[70px]' src="/assets/img/Bank BRI.png" alt="Bank BRI" />
            <img className='h-[70px]' src="/assets/img/PT Eltran.png" alt="PT Eltran" />

            <img className='h-[70px]' src="/assets/img/PT GDE.png" alt="PT GDE" />
            <img className='h-[70px]' src="/assets/img/Telkom Indonesia.png" alt="Telkom Indonesia" />
            <img className='h-[70px]' src="/assets/img/Telkom Akses.png" alt="Telkom Akses" />
            <img className='h-[70px]' src="/assets/img/Infomedia.png" alt="Infomedia" />
            <img className='h-[70px]' src="/assets/img/MNC VISION.png" alt="MNC VISION" />
            <img className='h-[70px]' src="/assets/img/Kemendag.png" alt="Kemendag" />
            <img className='h-[70px]' src="/assets/img/Bank BRI.png" alt="Bank BRI" />
            <img className='h-[70px]' src="/assets/img/PT Eltran.png" alt="PT Eltran" />

            <img className='h-[70px]' src="/assets/img/PT GDE.png" alt="PT GDE" />
            <img className='h-[70px]' src="/assets/img/Telkom Indonesia.png" alt="Telkom Indonesia" />
            <img className='h-[70px]' src="/assets/img/Telkom Akses.png" alt="Telkom Akses" />
            <img className='h-[70px]' src="/assets/img/Infomedia.png" alt="Infomedia" />
            <img className='h-[70px]' src="/assets/img/MNC VISION.png" alt="MNC VISION" />
            <img className='h-[70px]' src="/assets/img/Kemendag.png" alt="Kemendag" />
            <img className='h-[70px]' src="/assets/img/Bank BRI.png" alt="Bank BRI" />
            <img className='h-[70px]' src="/assets/img/PT Eltran.png" alt="PT Eltran" />
        </ul>
      </div>
    </div>
  )
}

export default ClientSection
