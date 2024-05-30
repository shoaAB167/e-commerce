import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "./cart-item";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = [
    {
      productId: "acasc",
      photo:
        "https://images.news18.com/ibnlive/uploads/2023/10/macbook-air-m1-2023-10-c3ced763eda4931bd195f9e7ff255169.jpg?impolicy=website&width=640&height=480",
      name: "Macbook",
      price: "3000",
      quantity: 4,
      stock: 10,
    },
  ];
  const subtotal = 1000;
  const tax = Math.round(subtotal * 0.18);
  const shippingCharges = 300;
  const discout = 200;
  const total = subtotal + tax + shippingCharges;
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length ? cartItems.map((ele, index) => (
          <CartItem key={index} cartItem={ele} />
        )) : <h1>No Items Added</h1>}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges : ₹{shippingCharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount :<em className="red"> - ₹{discout}</em>
        </p>
        <p>
          Total :<em> - ₹{total}</em>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discout} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
          {
            cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
          }
      </aside>
    </div>
  );
};

export default Cart;
