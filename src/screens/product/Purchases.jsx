import React, { useEffect, useState } from "react";
import { getMyPurchases } from "../../api";
import ProductCard from "../../common/components/ProductCard";

export default function Purchases() {
  useEffect(() => {
    loadPageData();
  }, []);
  const [purchases, setPurchases] = useState([]);
  const loadPageData = async () => {
    getMyPurchases().then((res) => {
      setPurchases(res.data);
    });
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex h-100">
          {purchases?.length > 0 ? (
            purchases.map((purchase) => (
              <div
                className="col-md-6 col-lg-6 col-xl-4 mt-3"
                key={purchase.product.id}
              >
                <ProductCard product={purchase.product} />
              </div>
            ))
          ) : (
            <p className="text-center">You have not bought a product yet!</p>
          )}
        </div>
      </div>
    </section>
  );
}
