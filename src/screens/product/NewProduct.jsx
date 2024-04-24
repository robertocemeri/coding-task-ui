import React, { useEffect, useState } from "react";
import { getCategories, storeProduct } from "../../api";
import appStorage from "../../common/helpers/appStorage";
import { useNavigate } from "react-router";
import Input from "../../components/Input/Input";
import * as Yup from "yup";

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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      setError("Error loading categories.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm({ ...productForm, [name]: value });
  };

  const addOrRemoveCategory = (category_id) => {
    if (productForm.categories.includes(category_id)) {
      setProductForm({
        ...productForm,
        categories: productForm.categories.filter((id) => id !== category_id),
      });
    } else {
      setProductForm({
        ...productForm,
        categories: [...productForm.categories, category_id],
      });
    }
  };

  const submitData = async () => {
    const valid = await validateData();
    if (!valid) {
      return;
    }
    await storeProduct(productForm)
      .then((res) => {
        if (res.statusCode !== 200) {
          console.log(res.message);
        } else {
          navigate("/products");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateData = async () => {
    try {
      await schema.validate(productForm, { abortEarly: false });
      return true;
    } catch (validationErrors) {
      const errors = [];
      validationErrors.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      setError(errors);
      return false;
    }
  };

  const schema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .typeError("Title is required"),
    user_id: Yup.string().required().typeError("User is required"),
    description: Yup.string()
      .required("Description is required")
      .typeError("Description is required"),
    picture: Yup.string().required().typeError("Picture Url is required"),
    start_price: Yup.number()
      .required("Start Price is required")
      .typeError("Start Price is required"),
    buy_now_price: Yup.number()
      .required()
      .typeError("Buy now price is required"),
    price_steps: Yup.number().required().typeError("Price steps is required"),
    start_time: Yup.date().required().typeError("Start time is required"),
    end_time: Yup.date().required().typeError("End time is required"),
  });

  const FormInputs = [
    {
      name: "title",
      label: "Product title",
      placeholder: "Product Title",
      required: true,
    },
    {
      name: "picture",
      label: "Product picture url",
      placeholder: "Product picture url",
      required: true,
    },
    {
      label: "Product start price",
      name: "start_price",
      placeholder: "Product start price",

      required: true,
    },
    {
      label: "Product buy now price",
      name: "buy_now_price",
      placeholder: "Product buy now price",
      required: true,
    },
    {
      name: "price_steps",
      label: "Product price steps",
      placeholder: "Product price steps",
      required: true,
    },
    {
      type: "date",
      name: "start_time",
      label: "Product start time",
      placeholder: "Product price steps",
      required: true,
    },
    {
      type: "date",
      name: "end_time",
      label: "Product end time",
      placeholder: "Product price steps",
      required: true,
    },
  ];

  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-8">
            <form>
              {FormInputs.map((input, index) => (
                <Input
                  key={index}
                  type={input.type ? input.type : "text"}
                  name={input.name}
                  label={input.label}
                  placeholder={input.placeholder}
                  formData={productForm}
                  setFormData={setProductForm}
                  error={error && error[input.name]}
                />
              ))}

              <div className="form-group">
                <label htmlFor="description">Product description</label>
                <textarea
                  className="form-control form-control-lg rounded shadow-sm"
                  id="description"
                  name="description"
                  rows="3"
                  placeholder="Describe product here..."
                  value={productForm.description}
                  onChange={handleInputChange}
                ></textarea>
                {error && error["description"] && (
                  <div className="text-danger">{error["description"]}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="categories">Select product categories</label>
                {categories.map((category) => (
                  <div key={category.id} className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`category-${category.id}`}
                      checked={productForm.categories.includes(category.id)}
                      onChange={() => addOrRemoveCategory(category.id)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`category-${category.id}`}
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>

              {error && <div className="text-danger">{error}</div>}
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-secondary btn-lg mt-4"
                  type="button"
                  onClick={submitData}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
