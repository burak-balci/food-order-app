import React from "react";
import { useRouter } from "next/router";

const ProductDetail = () => {
  const route = useRouter();

  return <div>ProductDetail {route.query.product}</div>;
};

export default ProductDetail;
