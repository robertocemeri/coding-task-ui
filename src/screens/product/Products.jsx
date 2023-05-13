import React, { useEffect, useState } from "react";
import { getMyProducts, storeProduct } from "../../api";
import ProductCard from "../../common/components/ProductCard";

export default function Products() {
  useEffect(() => {
    loadPageData();
  }, []);
  const [products, setProducts] = useState([]);
  const loadPageData = async () => {
    getMyProducts().then((res) => {
      setProducts(res.data);
    });
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h2>asjknmfasf</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
