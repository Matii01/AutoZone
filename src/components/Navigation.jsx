import { useEffect, useState } from "react";

function Navigation() {
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
        className={`py-4 gap-2 z-10 sm:block hidden mx-auto max-w-[1440px] bg-primary-gray ${
          isFixed && "fixed top-0 left-0 right-0"
        }`}
      >
        <div className="flex justify-between px-4 mx-auto max-w-[1200px]">
          <div className="my-auto">
            <img src="./svg/logo.svg" alt="Company Logo" />
          </div>
          <div className="w-[144px] flex my-auto justify-center font-robotoflex text-base">
            <ul className="flex gap-4 z-10">
              <li>
                <a href="#gallery">Galeria zdjęć</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="gap-2 flex justify-end text-white z-10">
            <button className="bg-primary-blue w-[158px] h-[47px] rounded-lg text-[15px] font-robotoflex">
              Zadzwoń do nas
            </button>
          </div>
        </div>
      </nav>

      <nav
        className={`py-4 gap-2 z-10 sm:hidden bg-primary-gray  ${
          isFixed && "fixed top-0 left-0 right-0"
        }`}
      >
        <div className="flex justify-between items-center px-4">
          <div className="my-auto">
            <img
              src="./svg/logo.svg"
              alt="Company Logo"
              className="w-[120px] h-auto md:w-[150px]"
            />
          </div>

          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              aria-label="Toggle navigation menu"
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
            } flex flex-col gap-4 mt-4 my-auto  font-robotoflex text-sm`}
          >
            <ul className="flex flex-col gap-4 text-xl ">
              <li>
                <a href="#gallery">Galeria zdjęć</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <button className="py-[12px] w-full  bg-primary-blue text-primary-gray font-roboto-flex font-semibold text-[15px] leading-[150%] tracking-[-0.02em] rounded-lg ">
                  Zadzwoń do nas
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
