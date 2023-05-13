export default function ProductCard({ product }) {
  const divStyle = {
    width: "18rem",
  };
  return (
    <>
      <div className="card" style={divStyle}>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="card-img-top"
          alt="Sample image"
        />
        <div className="card-body">
          <h5 className="card-title">{product?.title}</h5>
          <p className="card-text">{product?.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
