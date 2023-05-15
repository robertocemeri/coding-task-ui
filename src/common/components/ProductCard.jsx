export default function ProductCard({ product }) {
  const divStyle = {
    width: "18rem",
  };
  return (
    <>
      <div className="card">
        <img
          src={product?.picture}
          className="card-img-top"
          style={{ height: 230 }}
          alt="Sample image"
        />
        <div className="card-body">
          <div className="card-title d-flex justify-content-between align-items-center">
            <h3>{product?.title}</h3>{" "}
            <small> Starting: {product.start_price}€</small>
          </div>
          <p className="card-text">{product?.description}</p>
          <a href={"/product/" + product.id} className="btn btn-primary">
            Check it out
          </a>
        </div>
      </div>
    </>
  );
}
