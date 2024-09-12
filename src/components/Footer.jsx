import Container from "./Container";

function Footer() {
  return (
    <>
      <div className="h-[72px] px-4 sm:px-[120px] py-6 bg-dark-100  border-t-[1px] border-solid border-white">
        <Container>
          <div className="flex justify-between text-white">
            <div>
              <p className="font-bold">Cars Sport</p>
            </div>
            <div>
              <p className="underline cursor-pointer">Polityka prywatności</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
