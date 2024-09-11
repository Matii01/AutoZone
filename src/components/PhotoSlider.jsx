function PhotoSlider() {
  return (
    <>
      <div className="py-20 ">
        <div className="gap-12 flex px-4 xl:px-0">
          {slides.map((item, index) => (
            <img
              className="object-cover"
              key={index}
              src={`${item.url}`}
              style={{ maxWidth: "100%" }}
            />
          ))}
        </div>

        <div className="flex">
          <div className="flex mt-10 m-auto">
            <img src="./img/Active.png" className="me-2" />
            <img src="./img/Muted.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoSlider;

const slides = [
  {
    url: "./img/car1.png",
  },
  {
    url: "./img/car2.png",
  },
  {
    url: "./img/car3.png",
  },
];
