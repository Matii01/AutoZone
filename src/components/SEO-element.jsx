import { useState } from "react";

function SEOElement() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-normal font-bebas text-[25px]">
          Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla
          commodo.
        </p>
        <div className="flex flex-col text-sm gap-6">
          <p
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              !isOpen ? "line-clamp-2" : ""
            }`}
          >
            Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec
            egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
            venenatis eros ipsum ac arcu. Vestibulum et ligula porttitor,
            facilisis orci at, elementum nulla. Sed a enim in erat condimentum
            fringilla. Nullam ullamcorper arcu sit amet ante tincidunt faucibus.
          </p>
          <div>
            {/* Toggle button with icon */}
            <button
              className="text-start text-sm flex items-center pb-2 border-b-2 border-solid border-white"
              onClick={toggle}
            >
              Rozwiń
              <svg
                className={`ms-1  ${isOpen ? "rotate-180" : ""}`}
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8.44461L1.07955 7.35086L5.58239 11.8537L5.58239 0.191772L7.14489 0.191773L7.14489 11.8537L11.6335 7.35086L12.7273 8.44461L6.36364 14.8083L0 8.44461Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SEOElement;

/*<p className="">
            Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec
            egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
            venenatis eros ipsum ac arcu. Vestibulum et
          </p>
*/

/* 
<button className="text-start text-sm">
            <div className="flex">
              Rozwiń
              <img src="img/arrow.png" />
            </div>
          </button>*/
