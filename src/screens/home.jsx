import React, { useEffect, useState } from "react";
import { getProducts } from "../services";
import ProductCard from "../components/ProductCard";
import Input from "../components/Input/Input";

export default function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const loadPageData = async () => {
    getProducts().then((res) => {
      setProducts(res.data);
      setFilteredProducts(res.data);
    });
  };

  const filterProducts = () => {
    const temp = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(temp);
  };

  useEffect(() => {
    loadPageData();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [search]);

  return (
    <>
      <h1 className="screen-title">Home</h1>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInputGrid"
          placeholder="Search Product"
          value={search}
          onInput={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="floatingInputGrid">Product Title</label>
      </div>
      <div className="row d-flex h-100">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <div className="col-md-6 col-lg-6 col-xl-4 mt-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        {filteredProducts.length == 0 && (
          <p className="text-center mt-4">No Products</p>
        )}
      </div>
    </>
  );
}
