import Link from "next/link";
import Product, { IProduct } from "../__components/Product";

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
    <div className="max-w-[1280px] m-auto flex flex-col gap-5">
      <h1 className="text-[48px] uppercase font-extrabold text-center">
        {title}
      </h1>
      <div className="flex justify-between items-center">
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
          ></Product>
        ))}
      </div>
      <div className="hover:bg-black hover:text-white transition-all font-bold py-4 px-14 rounded-4xl w-fit border border-black flex items-center text-center place-self-center">
        <Link href={href}>View All</Link>
      </div>
    </div>
  );
}
