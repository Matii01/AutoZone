import { useEffect, useRef, useState } from "react";

function Navigation() {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const offset = window.scrollY;
    if (offset > 79) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  return (
    <>
      <nav
        ref={ref}
        className={`py-4 gap-2 z-10 sm:block hidden transition-all duration-300 ease-in-out ${
          isFixed && "fixed  w-[1320px]"
        }`}
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <div
          className="flex justify-between px-4"
          style={{ maxWidth: "1200px" }}
        >
          <div className="my-auto">
            <img src="./svg/logo.svg" />
          </div>
          <div className="w-[144px] gap-6 flex my-auto justify-center z-10 font-robotoflex text-base">
            <p>Galeria zdjęć</p>
            <p>FaQ</p>
          </div>
          <div className="gap-2 flex justify-end text-white z-10">
            <button className="bg-[#0147ff]  w-[158px] h-[47px] rounded-lg text-[15px] font-robotoflex">
              Zadzwoń do nas
            </button>
          </div>
        </div>
      </nav>

      <nav className="py-4 gap-2 z-10 sm:hidden">
        <div className="flex justify-between items-center px-4">
          <div className="my-auto">
            <img
              src="./svg/logo.svg"
              alt="Logo"
              className="w-[120px] h-auto md:w-[150px]"
            />
          </div>

          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center px-4">
          <div
            className={`w-full  ${
              isOpen ? "block" : "hidden"
            } flex flex-col gap-4 mt-4 my-auto z-10 font-robotoflex text-sm`}
          >
            <p className="cursor-pointer text-xl">Galeria zdjęć</p>
            <p className="cursor-pointer text-xl">FaQ</p>
            <button className="flex justify-center items-center  py-[12px] w-full sm:w-[148px] bg-[#0147FF] text-[#F7F7F7] font-roboto-flex font-semibold text-[15px] leading-[150%] tracking-[-0.02em] rounded-[8px]">
              Zadzwoń do nas
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
