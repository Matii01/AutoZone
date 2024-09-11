function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between mx-auto px-4 py-[60px] md:py-[120px] gap-[48px] isolate w-full  h-auto bg-[#F7F7F7] z-4 ">
        <div className="hidden md:block md:relative">
          <div className="md:absolute md:h-screen -top-[199px] left-0 w-[668px] h-[659px]">
            <div>
              <img
                src="./svg/Subtract.svg"
                className="object-cover w-[668px] h-[659px]"
              />
            </div>
          </div>
        </div>
        {/* <div className="hidden md:block absolute w-[300px] h-[300px] md:w-[668.05px] md:h-[659px] left-[50%] md:left-[700px] top-[-79px] transform -translate-x-[50%] md:translate-x-0 z-0">
          <div className="absolute left-0 right-[1.35%] top-[10%] bottom-[-1.37%] z-1">
            <img
              src="./svg/Subtract.svg"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}

        <div className="container flex flex-col justify-center items-start p-0 gap-[48px] w-full max-w-[1200px] z-10">
          <div className="flex flex-col items-start p-0 gap-[32px] w-full max-w-[1200px] z-10">
            <h1 className="text-[40px] sm:text-[50px] md:text-[76.29px] leading-[110%] tracking-[-0.04em] text-[#282828] font-bebas uppercase">
              Sprzedajemy samochody
              <br />z europy
            </h1>

            <p className="w-full max-w-[100%] md:max-w-[602px] text-[14px] md:text-[16px] leading-[150%] font-robotoCondensed text-[#282828]">
              Kup komfortowy pojazd, aby każda podróż
              <br /> była wyjątkowym przeżyciem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[24px] w-full max-w-[1200px] h-auto z-10">
            <button className="flex justify-center items-center px-[24px] py-[12px] w-full sm:w-[148px] bg-[#0147FF] text-[#F7F7F7] font-roboto-flex font-semibold text-[15px] leading-[150%] tracking-[-0.02em] rounded-[8px]">
              Zobacz zdjęcia
            </button>

            <button className="flex justify-center items-center px-[24px] py-[12px] w-full sm:w-[158px] border border-[#0147FF] text-[#0147FF] font-roboto-flex font-semibold text-[15px] leading-[150%] tracking-[-0.02em] rounded-[8px]">
              Zadzwoń do nas
            </button>
          </div>
          <div className="hidden md:block md:relative h-auto pb-32 ">
            <div className="md:absolute w-screen h-auto md:h-screen md:-top-48 md:left-64 ">
              <div>
                <img className="absolute bg-cover" src="./img/shadow.png" />
                <img className="absolute bg-cover" src="./img/Hero.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
