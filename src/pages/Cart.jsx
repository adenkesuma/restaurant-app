import { useEffect, useState } from "react";
import Subheading from "../components/Subheading";
import { useCart } from "../states/useCart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useOrder } from "../states/useOrder";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useCart();
  const order = useOrder();

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);
  const [plates, setPlates] = useState(0);

  useEffect(() => {
    setData(cart.item);
  }, [cart]);

  useEffect(() => {
    let total = 0;
    let platess = 0;

    data.forEach(
      (item) => (total += item.count * parseInt(item.price.split("$")[1]))
    );
    data.forEach((item) => (platess += item.count));
    setTotalPayment(total);
    setPlates(platess);
  }, [data]);

  function indiAddOrRemove(id, action) {
    const existingItem = data.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.count === 1 && action === "remove") {
        const updatedCart = data.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        cart.setItem(updatedCart);
        return;
      }
      const updatedCart = cart.item.map((item) =>
        item.id === id
          ? {
              ...item,
              count:
                action === "add"
                  ? existingItem.count + 1
                  : existingItem.count - 1,
            }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      cart.setItem(updatedCart);
    }
  }

  return (
    <div className="bg-[#1a1a1a] min-h-[60vh]">
      <div className="pt-[2rem] text-center">
        <Subheading title="Checkout your order" spoon={"mx-auto"} />
        <h1 className="headtext__cormorant">Cart</h1>
      </div>

      <div className="w-full px-8">
        {data.length !== 0 ? (
          <>
            {data.map((item) => (
              <div
                className="w-full my-[1rem] mx-0 flex flex-col"
                key={item.id}
              >
                <div className="flex justify-between items-center">
                  <div className="">
                    <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                      {item.title}
                    </p>
                  </div>
                  {/* <div className="mr-4 w-[90px] h-[1px] bg-[#DCCA87]" /> */}
                  <p className="p__cormorant pl-2">~{item.price}</p>
                  <div className="flex flex-1 flex-row gap-1 justify-end items-center">
                    <button
                      className="bg-[#DCCA87] rounded-sm"
                      onClick={() => indiAddOrRemove(item.id, "remove")}
                    >
                      <AiOutlineMinus className="w-4 h-4 m-1" />
                    </button>
                    <p className="p__cormorant w-4 text-center mx-2">
                      {item.count}
                    </p>
                    <button
                      className="bg-[#DCCA87] rounded-sm"
                      onClick={() => indiAddOrRemove(item.id, "add")}
                    >
                      <AiOutlinePlus className="w-4 h-4 m-1" />
                    </button>
                  </div>
                </div>

                <div className="w-full mt-1">
                  <p className="p__opensans" style={{ color: "#AAAAAA" }}>
                    {item.tags}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t py-4">
              <div className="flex justify-between">
                <p className="p__cormorant">Total</p>
                <p className="p__cormorant">
                  {data.length} dishes, {plates} plates
                </p>
              </div>
              <div className="flex justify-between">
                <p className="p__cormorant">Total Payment</p>
                <p className="p__cormorant">${totalPayment}</p>
              </div>

              <button
                className="w-full bg-[#DCCA87] mt-2 rounded-md py-px"
                onClick={() => {
                  order.setHistory({
                    ...data,
                    totalPayment: totalPayment,
                    plates: plates,
                  });
                  const parses =
                    JSON.parse(localStorage.getItem("order-history")) || [];
                  console.log(parses);
                  localStorage.setItem(
                    "order-history",
                    JSON.stringify([
                      ...parses,
                      { ...data, totalPayment: totalPayment, plates: plates },
                    ])
                  );
                  localStorage.removeItem("cart");
                  navigate("/order-history");
                }}
              >
                <p className="p__cormorant text-black">PAY</p>
              </button>
            </div>
          </>
        ) : (
          <p className="text-center mt-8 text-[#fff]">Empty order</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
