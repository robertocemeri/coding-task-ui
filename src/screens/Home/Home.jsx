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
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInputGrid"
          placeholder="Search Product"
        />
        <label htmlFor="floatingInputGrid">Product Title</label>
      </div>
      <div className="row d-flex h-100">
        {/* todo search functionality */}

        {products.map((product) => (
          <div className="col-md-6 col-lg-6 col-xl-4 mt-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
