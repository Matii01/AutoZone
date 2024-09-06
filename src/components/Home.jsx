function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between mx-auto px-4  py-[60px] md:py-[120px] gap-[48px] isolate w-full  h-auto bg-[#F7F7F7] z-4">
        {/* <!-- Absolute Positioned Background Element --> */}
        <div className="absolute w-[300px] h-[300px] md:w-[668.05px] md:h-[659px] left-[50%] md:left-[700px] top-[-79px] transform -translate-x-[50%] md:translate-x-0 z-0">
          <div className="absolute left-0 right-[1.35%] top-[10%] bottom-[-1.37%] z-1">
            <img
              src="./img/Subtract.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* <!-- Text Section --> */}
        <div className="container flex flex-col justify-center items-start p-0 gap-[48px] w-full max-w-[1200px] z-10">
          <div className="flex flex-col items-start p-0 gap-[32px] w-full max-w-[1200px] z-10">
            {/* <!-- Headline --> */}
            <h1 className="text-[40px] sm:text-[50px] md:text-[76.29px] leading-[110%] tracking-[-0.04em] text-[#282828] font-bebas uppercase">
              Sprzedajemy samochody
              <br />z europy
            </h1>

            {/* <!-- Description --> */}
            <p className="w-full max-w-[100%] md:max-w-[602px] text-[14px] md:text-[16px] leading-[150%] font-roboto-condensed text-[#282828]">
              Kup komfortowy pojazd, aby każda podróż
              <br /> była wyjątkowym przeżyciem.
            </p>
          </div>

          {/* <!-- Button Section --> */}
          <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[24px] w-full max-w-[1200px] h-auto z-10">
            <button className="flex justify-center items-center px-[24px] py-[12px] w-full sm:w-[148px] bg-[#0147FF] text-[#F7F7F7] font-roboto-flex font-semibold text-[15px] leading-[150%] tracking-[-0.02em] rounded-[8px]">
              Zobacz zdjęcia
            </button>

            <button className="flex justify-center items-center px-[24px] py-[12px] w-full sm:w-[158px] border border-[#0147FF] text-[#0147FF] font-roboto-flex font-semibold text-[15px] leading-[150%] tracking-[-0.02em] rounded-[8px]">
              Zadzwoń do nas
            </button>
          </div>

          {/* <!-- Cars Image Section --> */}
          <div className="absolute w-[1064px] max-w-[1064px] h-[404.37px] left-[455px] top-[358px]">
            <div className="absolute w-[1064px] h-[404.37px]  bg-[url('./img/shadow.png')] opacity-[0.7]"></div>

            <div className="absolute w-[1064px] h-[404.37px]  bg-[url('./img/Hero.png')]"></div>
          </div>
          {/* <div className="relative w-full max-w-[1064px] h-auto z-0 mt-[50px]">
            <div className="absolute w-full h-[404.37px] bg-[url('./img/shadow.png')] opacity-[0.7]"></div>
            <div className="absolute w-full h-[404.37px] bg-[url('./img/Hero.png')]"></div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
