import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { API_ROUTE } from "@/__const/const";
import ProductLayout from "../__layout/Product.layout";
async function ProductDetail({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const productFetching = await fetch(
    `${API_ROUTE}/product/${resolvedParams.slug}`
  );
  const productResponse = await productFetching.json();
  const product = productResponse.data;
  if (!product.data?.success) {
    console.log(product.data); //redirect to 404 page
  }
  return (
    <section>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Homepage
        </Link>
        <Link underline="hover" color="inherit" href="/product">
          All products
        </Link>
        <Typography>{product.name}</Typography>
      </Breadcrumbs>
      <ProductLayout product={product} />
      {/* ProductInformation (product detail; rating & reviews; FAQs) */}
      {/* Suggest item */}
    </section>
  );
}

export default ProductDetail;
