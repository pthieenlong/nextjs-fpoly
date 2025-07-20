import Link from "next/link";
import Product from "../__components/Product";
import { IProduct } from "../product/__model/product.model";

export function ProductLayout({
  title,
  href,
  products,
}: {
  title: string;
  href: string;
  products: IProduct[];
}) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] uppercase font-extrabold text-center">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <Product
            image={product.images[0]}
            name={product.name}
            slug={product.slug}
            price={product.price}
            rating={product.rating}
            isSale={product.isSale}
            salePercent={product.salePercent}
            key={product.slug}
            className="h-[250px] w-full"
          ></Product>
        ))}
      </div>
      <div className="hover:bg-black hover:text-white transition-all font-bold py-3 sm:py-4 px-8 sm:px-14 rounded-full w-fit border border-black flex items-center text-center place-self-center">
        <Link href={href}>View All</Link>
      </div>
    </div>
  );
}
