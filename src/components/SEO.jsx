import Container from "./Container";
import SEOElement from "./SEO-element";

function SEO() {
  return (
    <>
      <div className="px-4 sm:px-[88px] py-[88px]  bg-dark-100 flex items-center gap-20">
        <Container>
          <div className=" text-white grid grid-cols-1 md:grid-cols-2 gap-20">
            <SEOElement />
            <SEOElement />
          </div>
        </Container>
      </div>
    </>
  );
}

export default SEO;
