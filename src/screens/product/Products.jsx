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
        <div className="row d-flex h-100">
          {products?.length > 0 ? (
            products.map((product) => (
              <div className="col-md-6 col-lg-6 col-xl-4 mt-3" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="text-center">You have not listed a product yet!</p>
          )}
        </div>
      </div>
    </section>
  );
}
