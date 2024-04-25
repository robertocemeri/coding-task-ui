import React, { useCallback, useEffect, useRef, useState } from "react";
import { buyNowProduct, getProductById, placeBid } from "../../services";
import { useParams } from "react-router";
import appStorage from "../../common/helpers/appStorage";
import moment from "moment";
const Storage = appStorage();

const logged_user = Storage.getUser();

export default function ShowProduct() {
  const [error, setError] = useState(null);
  const [bidForm, setBidForm] = useState({
    bid_price: "",
  });
  const [product, setProduct] = useState([]);

  const params = useParams();
  useEffect(() => {
    loadPageData();
  }, []);
  const loadPageData = async () => {
    getProductById(params.id).then((res) => {
      setProduct(res.data[0]);
    });
  };

  const calculateDuration = (eventTime) =>
    moment.duration(eventTime - moment.now(), "milliseconds");

  const Countdown = (eventTime, interval) => {
    const [duration, setDuration] = useState(calculateDuration(eventTime));
    const timerRef = useRef(0);
    const timerCallback = useCallback(() => {
      setDuration(calculateDuration(eventTime));
    }, [eventTime]);

    useEffect(() => {
      timerRef.current = setInterval(timerCallback, interval);

      return () => {
        clearInterval(timerRef.current);
      };
    }, [eventTime]);
    if (moment(product?.start_time) - moment.now() >= 0) return "";
    return (
      <div>
        Ends: {duration.days()} Days {duration.hours()} Hours{" "}
        {duration.minutes()} Minutes {duration.seconds()} Seconds
      </div>
    );
  };

  const submitData = () => {
    if (
      Number(bidForm.bid_price) === 0 ||
      Number(bidForm.bid_price) < product.start_price
    ) {
      setError(
        "Value 0 or empty not allowed! Min value " + product?.start_price + "€"
      );
      return;
    }
    bidForm.bid_price = Number(bidForm.bid_price);
    bidForm.product_id = product.id;
    bidForm.user_id = logged_user.id;
    placeBid(bidForm).then((res) => {
      if (res.statusCode !== 200)
        setError(res.message ? res.message : res.error);
      else {
        alert("You bid for this product");
        window.location.reload(false);
      }
    });
  };

  const buyNowHandler = () => {
    buyNowProduct({ product_id: product?.id }).then((res) => {
      if (res.statusCode !== 200)
        setError(res.message ? res.message : res.error);
      else {
        alert("You bought this product");
        window.location.reload(false);
      }
    });
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={product.picture} className="img-fluid" alt="Sample " />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div>
              <p>Title: {product.title}</p>
              <p>Description: {product.description}</p>
            </div>

            <p>Categories:</p>
            {product.categories?.length > 0
              ? product.categories.map((category) => (
                  <p key={category.id}>{category.name}</p>
                ))
              : ""}

            <div className="row ">
              <div className="w-100 ">
                <div className="d-flex justify-content-between">
                  <small>Start:{moment(product.start_time).format("l")}</small>
                  <small>End:{moment(product.end_time).format("l")}</small>
                </div>
                <div>
                  {moment(product.start_time) - moment.now() >= 0 ? (
                    <p className="text-danger"> Not started yet!</p>
                  ) : (
                    ""
                  )}
                </div>

                <small>{Countdown(moment(product.end_time), 1000)}</small>
              </div>
            </div>
            <div className="mt-4">
              <p className="d-flex justify-content-between">
                Bids here ({product.bids?.length})
                <small>Highest bid : {product?.max_bid} €</small>
              </p>
              {product.bids?.length > 0 ? (
                <div className="overflow-auto" style={{ maxHeight: 200 }}>
                  {product?.bids.map((bid) => (
                    <p key={bid.id}>
                      {bid.user.name + " " + bid.bid_price + "€"}
                    </p>
                  ))}
                </div>
              ) : (
                "No bids for this product yet! "
              )}
            </div>
            {moment(product.start_time) - moment.now() <= 0 &&
            moment(product.end_time) - moment.now() >= 0 &&
            product.sold === 0 ? (
              <div className="mt-4">
                <p>Place a bid </p>
                {logged_user.id !== product.user_id ? (
                  <div>
                    <div className="form-outline mb-4">
                      <input
                        type="number"
                        onChange={(value) =>
                          setBidForm({
                            ...bidForm,
                            bid_price: value.target.value,
                          })
                        }
                        className="form-control form-control-lg"
                        placeholder="Enter a valid amount"
                      />

                      <label className="form-label">Bid amount</label>
                      {error ? (
                        <div className="text-center  py-2 text-danger">
                          {error}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="text-center ">
                        <button
                          type="button"
                          onClick={submitData}
                          className="btn btn-primary btn-lg"
                        >
                          Place bid
                        </button>
                      </div>
                      <div className="text-center ">
                        <button
                          type="button"
                          onClick={buyNowHandler}
                          className="btn btn-primary btn-lg"
                        >
                          Buy now for {product.buy_now_price}€
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <p className="text-danger">
                Cant place a bid yet or product sold!
              </p>
            )}
            {product.purchase ? (
              <p>
                Buyer: {product.purchase.user.name} paid{" "}
                {product.purchase.price} €{" "}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
