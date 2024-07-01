import Footer from "./components/Footer";
import ProductsGrid from "./components/ProductsGrid";
import ProductsSidebar from "./components/ProductsSidebar";
import ProductsTopMenu from "./components/ProductsTopMenu";
import ProductsTopSearch from "./components/ProductsTopSearch";

const Products = () => {
  return (
    <>
      <div className="relative max-w-[1200px] mx-auto sm:my-16 my-6 justify-between items-start md:flex gap-10 sm:px-10 px-3">
        <div className="sticky top-24 hidden md:block">
          <ProductsSidebar />
        </div>
        <div className="block md:hidden mb-3 bg-white">
          <ProductsTopSearch />
        </div>
        <div className="grid md:w-[80%] w-full ">
          <div className="">
            <ProductsTopMenu />
          </div>
          <div className="">
            <ProductsGrid />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
