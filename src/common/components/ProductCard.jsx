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
          <h5 className="card-title d-flex justify-content-between">
            <h3>{product?.title}</h3> <small>{product.start_price}€</small>
          </h5>
          <p className="card-text">{product?.description}</p>
          <a href={"/product/" + product.id} className="btn btn-primary">
            Check it out
          </a>
        </div>
      </div>
    </>
  );
}
