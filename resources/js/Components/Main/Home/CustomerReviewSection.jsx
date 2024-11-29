import useScript from "@/hooks/useScript"

const CustomerReviewSection = () => {
  useScript('https://cdn.trustindex.io/loader.js?e8dea8819a15934c4196d245792')

  return (
    <section className='relative px-4 md:px-6 lg:px-10 xl:py-[34px] xl:px-[54px] shadow rounded-md flex flex-col items-start justify-center max-w-7xl mx-auto xl:w-[1336px] h-[678px] bg-gradient-to-b from-[#F2FDFF80] to-[#95D3E0AB]'>
      <div className="flex flex-col items-start justify-center">
        <h2 className='text-[37px]'>Review Customer</h2>
        <h2 className='text-[35px] font-bold'>Tentang ProudIT</h2>
        <img src="assets/svg/deco-line-blue.svg" className="mt-[20px] mb-4" />
      </div>
      <div>
        <div id="reviews" />
      </div>
      <img src="assets/img/bg-customer-review.png" className='absolute -z-10 left-0 bottom-0 w-[60%]' alt="" />
    </section>
  )
}

export default CustomerReviewSection