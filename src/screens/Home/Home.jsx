import React, { useEffect, useState } from "react";
import { getProducts } from "../../api";
import ProductCard from "../../common/components/ProductCard";

// import moment from "moment";

export default function Home() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadPageData();
  }, []);
  const [products, setProducts] = useState([]);
  const loadPageData = async () => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  };

  return (
    <>
      <h1 className="screen-title">Home</h1>
      <div className="custom-row">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
}
