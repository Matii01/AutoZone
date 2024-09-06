function PhotoSlider() {
  return (
    <>
      <div className="py-20">
        <div className="gap-12 flex overflow-hidden">
          <img src="./img/car1.png" />
          <img src="./img/car2.png" />
          <img src="./img/car3.png" />
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
