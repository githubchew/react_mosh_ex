import React from "react";
import { useEffect, useState } from "react";
const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products", category);
    setProducts(["CLothing", "Household"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
