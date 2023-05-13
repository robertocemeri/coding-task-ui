import React, { useEffect, useState } from "react";
import { storeProduct } from "../../api";

export default function NewProduct() {
  const [productForm, setProductForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const submitData = () => {
    storeProduct(productForm).then((res) => {
      if (res.statusCode !== 200)
        setError(res.message ? res.message : res.error);
      Storage.setToken(res.access_token);
      Storage.setUser(res.user);

      console.log(res);
    });
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <h1> ans</h1>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h2>ss</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
