import { useState } from "react";
import PhotoSlider from "./PhotoSlider";
import Container from "./Container";

function Gallery() {
  const [osobowe, setOsobowe] = useState(true);
  const selected =
    "font-semibold text-primary-blue border-b border-solid border-primary-blue";

  function changeCars(value) {
    setOsobowe(value);
  }

  return (
    <>
      <Container>
        <div className="h-[207px] flex flex-col px-4 xl:px-0 gap-6 pt-20 ">
          <div className="">
            <p className="text-primary-blue text-xl font-robotoCondensed ">
              Prezentacja firmy
            </p>
            <p className="text-4xl font-bebas text-dark-200 ">
              Zobacz naszą Galerię zdjęć
            </p>
          </div>
          <div className="flex gap-12 font-robotoflex text-[15px]">
            <p
              className={`${osobowe && selected} cursor-pointer`}
              onClick={() => changeCars(true)}
            >
              Samochody osobowe
            </p>
            <p
              className={`${!osobowe && selected} cursor-pointer`}
              onClick={() => changeCars(false)}
            >
              Samochody dostawcze
            </p>
          </div>
        </div>
      </Container>
      <PhotoSlider />
    </>
  );
}

export default Gallery;
