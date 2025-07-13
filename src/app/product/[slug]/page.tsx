"use client";
import React, { useEffect, useState } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { API_ROUTE } from "@/__const/const";
import ProductLayout from "../__layout/Product.layout";
import ContentLayout from "../__layout/Content.layout";
import { useParams } from "next/navigation";
function ProductDetail() {
  const params = useParams();
  const slug = params.slug;

  const [product, setProduct] = useState();
  const [productName, setProductName] = useState("");
  useEffect(() => {
    fetch(`${API_ROUTE}/product/${slug}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setProduct(data.data);
          setProductName(data.data.name);
        }
        return data;
      })
      .catch((error: any) => {
        return error;
      });
  }, [slug]);

  return (
    <section className="max-w-[1280px] m-auto flex flex-col gap-6">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Homepage
        </Link>
        <Link underline="hover" color="inherit" href="/product">
          All products
        </Link>
        <Typography>{productName}</Typography>
      </Breadcrumbs>
      <ProductLayout product={product} />

      <ContentLayout />
    </section>
  );
}

export default ProductDetail;
