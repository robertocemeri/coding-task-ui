import React, { useEffect, useState } from "react";
import { getCategories, storeProduct } from "../../api";
import appStorage from "../../common/helpers/appStorage";
import { useNavigate } from "react-router";

const Storage = appStorage();
const logged_user = Storage.getUser();
export default function NewProduct() {
  const navigate = useNavigate();

  const [productForm, setProductForm] = useState({
    title: "",
    user_id: logged_user?.id,
    description: "",
    picture: "",
    start_price: "",
    buy_now_price: "",
    price_steps: "",
    start_time: "",
    end_time: "",
    categories: [],
  });
  const [error, setError] = useState(null);
  const submitData = () => {
    storeProduct(productForm).then((res) => {
      if (res.statusCode !== 200)
        setError(res.message ? res.message : res.error);
      else navigate("/products");
    });
  };

  useEffect(() => {
    loadPageData();
  }, []);
  const [categories, setCategories] = useState([]);
  const loadPageData = async () => {
    getCategories().then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  };

  const addOrRemoveCAtegory = (category_id) => {
    if (productForm.categories.includes(category_id))
      productForm.categories.splice(
        productForm.categories.indexOf(category_id),
        1
      );
    else productForm.categories.push(category_id);
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Product title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Product Title"
                  onChange={(value) =>
                    setProductForm({
                      ...productForm,
                      title: value.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="description">Product description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  placeholder="Describe product here..."
                  onChange={(value) =>
                    setProductForm({
                      ...productForm,
                      description: value.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="picture">Product picture url</label>
                <input
                  type="text"
                  className="form-control"
                  id="picture"
                  name="picture"
                  placeholder="Product picture url"
                  onChange={(value) =>
                    setProductForm({
                      ...productForm,
                      picture: value.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="picture">Product start price</label>
                <input
                  type="text"
                  className="form-control"
                  id="start_price"
                  name="start_price"
                  placeholder="Product start price"
                  onChange={(value) =>
                    setProductForm({
                      ...productForm,
                      start_price: value.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="picture">Product buy now price</label>
                <input
                  type="text"
                  className="form-control"
                  id="buy_now_price"
                  name="buy_now_price"
                  placeholder="Product buy now price"
                  onChange={(value) =>
                    setProductForm({
                      ...productForm,
                      buy_now_price: value.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="picture">Product price steps</label>
                <input
                  type="text"
                  className="form-control"
                  id="price_steps"
                  name="price_steps"
                  placeholder="Product price steps"
                  onChange={(value) =>
                    setProductForm({
                      ...productForm,
                      price_steps: value.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="picture">Product start time</label>
                <input
                  type="date"
                  className="form-control"
                  id="start_time"
                  name="start_time"
                  placeholder="Product price steps"
                  onChange={(value) =>
                    setProductForm({
                      ...productForm,
                      start_time: value.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="picture">Product end time</label>
                <input
                  type="date"
                  className="form-control"
                  id="end_time"
                  name="end_time"
                  placeholder="Product price steps"
                  onChange={(value) =>
                    setProductForm({
                      ...productForm,
                      end_time: value.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="picture">Select product categories</label>
                {categories.map((category) => (
                  <>
                    <br />
                    <input
                      type="checkbox"
                      onChange={(value) => addOrRemoveCAtegory(category.id)}
                    />
                    {category.name}
                  </>
                ))}
              </div>
              {error ? (
                <div className="text-center  py-2 text-danger">{error}</div>
              ) : (
                ""
              )}
              <button
                className="btn btn-md btn-primary mt-4"
                type="button"
                onClick={submitData}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
