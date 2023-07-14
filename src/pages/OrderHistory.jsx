import { useEffect, useState } from "react";
import Subheading from "../components/Subheading";
import { useOrder } from "../states/useOrder";

const OrderHistory = () => {
  const order = useOrder();

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(order.history);
    setData(order.history);
  }, [order]);

  return (
    <div className="bg-[#1a1a1a] min-h-[60vh]">
      <div className="pt-[2rem] text-center">
        <Subheading title="Thank you for ordering" spoon={"mx-auto"} />
        <h1 className="headtext__cormorant">Order History</h1>
      </div>

      <div className="w-full px-8">
        {data.length !== 0 ? (
          data.map((item, i) => (
            <div className="w-full my-[1rem] mx-0 flex flex-col" key={item.id}>
              <div className="flex justify-between items-center">
                <div className="">
                  <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                    {item[i].title}
                  </p>
                </div>
                {/* <div className="mr-4 w-[90px] h-[1px] bg-[#DCCA87]" /> */}
                <p className="p__cormorant pl-2">~{item[i].price}</p>
                <div className="flex flex-1 flex-row gap-1 justify-end items-center">
                  <p className="p__cormorant text-center mx-2">
                    {item[i].count} plates
                  </p>
                </div>
              </div>

              <div className="border-t py-4">
                <div className="flex justify-between">
                  <p className="p__cormorant">Total</p>
                  <p className="p__cormorant">{data[i].length} dishes, {data.plates} plates</p>
                </div>
                <div className="flex justify-between">
                  <p className="p__cormorant">Total Payment</p>
                  <p className="p__cormorant">${data[i].totalPayment}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-8 text-[#fff]">No order history found</p>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
