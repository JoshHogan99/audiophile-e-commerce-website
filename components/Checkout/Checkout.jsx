import React, { useEffect, useState } from "react";
import { NavLink, Navigate, useOutletContext } from "react-router-dom";

import "./Checkout.css";

import iconOrderConfirmation from "../../assets/checkout/icon-order-confirmation.svg";

export default function Checkout() {
  const { cartItems, cartTotal } = useOutletContext();
  const [eMoney, setEMoney] = useState(false);
  const [cashDelivery, setCashDelivery] = useState(false);
  const [data, setData] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const { handleCartClear } = useOutletContext();
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  useEffect(() => {
    if (showCheckout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCheckout]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    setData(Object.fromEntries(formData));

    event.target.reset();

    setEMoney(false);
    setCashDelivery(false);
    setCheckoutItems(cartItems);
    setCheckoutTotal(cartTotal);

    handleCartClear();

    window.scrollTo({ top: 0 });

    handleCheckout();
  }

  function handleCheckout() {
    setShowCheckout((setShowCheckout) => !setShowCheckout);
  }

  if (!showCheckout && cartItems.length < 1) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div id="checkout">
      <NavLink to={`..`} relative="path" className="go-back" id="go-back">
        Go Back
      </NavLink>

      <div id="checkout-flex">
        <div className="form">
          <h1>CHECKOUT</h1>

          <form id="myForm" onSubmit={handleSubmit}>
            <div className="details">
              <h2>BILLING DETAILS</h2>

              <div className="billing">
                <label className="name">
                  <p>
                    Name <span>*</span>
                  </p>

                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Alexei Ward"
                  />
                </label>

                <label className="e-mail">
                  <p>
                    Email Address <span>*</span>
                  </p>

                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="alexei@mail.com"
                  />
                </label>

                <label className="phone">
                  <p>
                    Phone Number <span>*</span>
                  </p>

                  <input
                    required
                    type="tel"
                    id="tel"
                    name="tel"
                    autoComplete="tel"
                    placeholder="+1 202-555-0136"
                  />
                </label>
              </div>

              <h3>SHIPPING INFO</h3>

              <div className="shipping">
                <label className="address">
                  <p>
                    Your Address <span>*</span>
                  </p>

                  <input
                    required
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="on"
                    placeholder="1137 Williams Avenue"
                  />
                </label>

                <label className="zip-code">
                  <p>
                    ZIP Code <span>*</span>
                  </p>

                  <input
                    required
                    type="text"
                    id="zip-code"
                    name="zip-code"
                    autoComplete="postal-code"
                    placeholder="10001"
                  />
                </label>

                <label className="city">
                  <p>
                    City <span>*</span>
                  </p>

                  <input
                    required
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    placeholder="New York"
                  />
                </label>

                <label className="country">
                  <p>
                    Country <span>*</span>
                  </p>

                  <input
                    required
                    type="text"
                    id="country"
                    name="country"
                    autoComplete="country"
                    placeholder="United States"
                  />
                </label>
              </div>

              <h4>PAYMENT DETAILS</h4>

              <div className="payment-container">
                <p className="payment">
                  Payment Method <span>*</span>
                </p>

                <label
                  className="radio radio-1"
                  style={
                    eMoney
                      ? { border: "1px solid #D87D4A" }
                      : { border: "1px solid #CFCFCF" }
                  }
                >
                  <input
                    required
                    type="radio"
                    id="e-money"
                    name="payment-method"
                    value="e-Money"
                    onClick={() => {
                      setEMoney(true);
                      setCashDelivery(false);
                    }}
                  />

                  <p>e-Money</p>
                </label>

                <label
                  className="radio radio-2"
                  style={
                    cashDelivery
                      ? { border: "1px solid #D87D4A" }
                      : { border: "1px solid #CFCFCF" }
                  }
                >
                  <input
                    required
                    type="radio"
                    id="cash"
                    name="payment-method"
                    value="Cash on Delivery"
                    onClick={() => {
                      setEMoney(false);
                      setCashDelivery(true);
                    }}
                  />

                  <p>Cash on Delivery</p>
                </label>
              </div>
            </div>

            {eMoney && (
              <div className="e-money">
                <label>
                  <p>
                    e-Money Number <span>*</span>
                  </p>

                  <input
                    required
                    type="text"
                    id="e-money-number"
                    name="e-money-number"
                    autoComplete="off"
                    placeholder="238512993"
                  />
                </label>

                <label>
                  <p>
                    e-Money PIN <span>*</span>
                  </p>

                  <input
                    required
                    type="text"
                    id="e-money-pin"
                    name="e-money-pin"
                    autoComplete="off"
                    placeholder="6891"
                  />
                </label>
              </div>
            )}
          </form>
        </div>

        <div className="summary">
          <h5>SUMMARY</h5>

          <div className="products">
            {cartItems.map((item, index) => (
              <div key={index} className="product">
                <img src={`../../assets/cart/image-${item.slug}.jpg`} />

                <p className="name">
                  {item.name} <span>$ {item.price.toLocaleString()}</span>
                </p>

                <p className="quantity">x{item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="additions">
            <p className="label">
              TOTAL <span></span>
            </p>

            <p className="price">$ {cartTotal.toLocaleString()}</p>
          </div>

          <div className="additions">
            <p className="label">SHIPPING</p>

            <p className="price">$ 50</p>
          </div>

          <div className="additions">
            <p className="label">VAT (INCLUDED)</p>

            <p className="price">$ {(cartTotal / 5).toLocaleString()}</p>
          </div>

          <div className="additions">
            <p className="label">GRAND TOTAL</p>

            <p className="price">$ {(cartTotal + 50).toLocaleString()}</p>
          </div>

          <button type="submit" form="myForm" className="button-1">
            CONTINUE & PAY
          </button>
        </div>
      </div>

      {showCheckout && (
        <div className="page-overlay" onClick={handleCheckout}></div>
      )}

      {showCheckout && (
        <div className="confirmation">
          <img src={iconOrderConfirmation} className="tick" />

          <h6>THANK YOU FOR YOUR ORDER</h6>

          <p className="e-mail">
            You will receive an email confirmation shortly.
          </p>

          {checkoutItems.length ? (
            <div className="inventory">
              <div className="product-other">
                <div className="product">
                  <img
                    src={`../../assets/cart/image-${checkoutItems[0].slug}.jpg`}
                  />

                  <p className="name">
                    {checkoutItems[0].name}{" "}
                    <span>$ {checkoutItems[0].price.toLocaleString()}</span>
                  </p>

                  <p className="quantity">x{checkoutItems[0].quantity}</p>
                </div>

                <div className="other">
                  <p>
                    and{" "}
                    {checkoutItems.length - 1 === 0
                      ? "no"
                      : checkoutItems.length - 1}{" "}
                    other item(s)
                  </p>
                </div>
              </div>

              <div className="total">
                <p className="label">GRAND TOTAL</p>

                <p className="price">
                  $ {(checkoutTotal + 50).toLocaleString()}
                </p>
              </div>
            </div>
          ) : null}

          <NavLink to="/">
            <button className="button-1">BACK TO HOME</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
