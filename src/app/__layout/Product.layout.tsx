import Product from "../__components/Product";

export function ProductLayout() {
  return (
    <div className="">
      <Product 
        image="/product/tshirt.png"
        title="T-Shirt with tape Detail"
        slug="t-shirt-with-tape-detail"
        price={120} rating={4.5} isSale={false} salePercent={0}      ></Product>
    </div>
  )
}