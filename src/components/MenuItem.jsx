/* eslint-disable react/prop-types */
import { AiOutlinePlus } from "react-icons/ai";

const MenuItem = ({ title, price, tags, handleAdd }) => (
  <div className="w-full my-[1rem] mx-0 flex flex-col">
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="mr-4 w-[90px] h-[1px] bg-[#DCCA87]" />
      <div className="flex flex-row gap-1 justify-end items-center">
        <p className="p__cormorant">{price}</p>
        <button
          className="bg-[#DCCA87] rounded-sm"
          onClick={handleAdd}
        >
          <AiOutlinePlus className="m-1" />
        </button>
      </div>
    </div>

    <div className="w-full mt-1">
      <p className="p__opensans" style={{ color: "#AAAAAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
