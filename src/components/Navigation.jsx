function Navigation() {
  return (
    <>
      <nav className="py-4 gap-2 z-10">
        <div className="flex justify-between px-4">
          <div className="my-auto">
            <img src="./svg/logo.svg" />
          </div>
          <div className="w-[144px] gap-6 flex my-auto justify-center z-10 font-robotoflex text-base">
            <p>Galeia zdjęć</p>
            <p>FaQ</p>
          </div>
          <div className="gap-2 flex justify-end text-white z-10">
            {/* 158 x 47 */}
            <button className="bg-[#0147ff]  w-[158px] h-[47px] rounded-lg text-[15px] font-robotoflex">
              Zadzwoń do nas
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

/*
 <nav className="py-4 gap-2 z-10 ">
        <div className="flex justify-between max-w-[1200px] mx-auto px-4">
          <div className="my-auto">
            <img src="./svg/logo.svg" />
          </div>
          <div className="w-[144px] gap-6 flex my-auto justify-center z-10 font-robotoflex text-base">
            <p>Galeia zdjęć</p>
            <p>FaQ</p>
          </div>
          <div className="gap-2 flex justify-end text-white z-10">
            <button className="bg-[#0147ff]  w-[158px] h-[47px] rounded-lg text-[15px] font-robotoflex">
              Zadzwoń do nas
            </button>
          </div>
        </div>
      </nav> */
