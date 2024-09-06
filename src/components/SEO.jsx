import Container from "./Container";
import SEOElement from "./SEO-element";

function SEO() {
  return (
    <>
      <div className="px-4 sm:px-[88px] py-[88px]  bg-[#282828] flex items-center gap-20">
        <Container>
          {/* grid grid-cols-2 gap-20 */}
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

/*
 <Container>
    <div className="h-[185px] text-white flex flex-wrap">
    <div className="basis-full md:basis-1/2 ">
        <SEOElement />
    </div>
    <div className="basis-full md:basis-1/2 ">
        <SEOElement />
    </div>
    </div>
</Container>
*/
