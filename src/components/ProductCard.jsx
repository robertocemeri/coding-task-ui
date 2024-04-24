import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <img
          src={product?.picture}
          className="card-img-top"
          style={{ height: 230 }}
          alt="Sample "
        />
        <div className="card-body">
          <div className="card-title d-flex justify-content-between align-items-center">
            <h3>{product?.title}</h3>
            <small> Starting: {product.start_price}€</small>
          </div>
          <p className="card-text">{product?.description}</p>
          <button
            onClick={() => navigate("/product/" + product.id)}
            className="btn btn-dark"
          >
            Check it out
          </button>
        </div>
      </div>
    </>
  );
}
