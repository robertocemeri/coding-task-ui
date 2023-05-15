import React, { useEffect, useState } from "react";
import { getProductById, storeProduct } from "../../api";
import { useParams } from "react-router";

export default function ShowProduct() {
  const params = useParams();
  useEffect(() => {
    loadPageData();
  }, []);
  const [product, setProduct] = useState([]);
  const loadPageData = async () => {
    getProductById(params.id).then((res) => {
      setProduct(res.data[0]);
    });
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src={product.picture}
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            {product.id}
            {product.title}
            {product.description}
            {product.buy_now_price}

            <p>ktu to place a bid </p>
            <p>to buy now </p>
            <p>remaining time </p>

            <p>Categories</p>
            {product.categories?.length > 0
              ? product.categories.map((category) => (
                  <p key={category.id}>{category.name}</p>
                ))
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
}
