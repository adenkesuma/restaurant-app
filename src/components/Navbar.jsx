import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../constants/images";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "../states/useCart";
import { AiOutlineHistory } from "react-icons/ai";
import { useOrder } from "../states/useOrder";

const Navbar = () => {
  const { item } = useCart();
  const { history } = useOrder();

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex justify-between items-center bg-[#1a1a1a] py-[1rem] px-[2rem]">
      <Link
        className="flex justify-start items-center w-[100px] md:w-[130px]"
        to="/"
      >
        <img src={images.gericht} alt="w-full" />
      </Link>
      <ul className="hidden lg:flex flex-1 justify-center gap-[2rem] items-center list-none">
        <li className="cursor-pointer text-[#ffffff] hover:text-gray-400">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer text-[#ffffff] hover:text-gray-400">
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer text-[#ffffff] hover:text-gray-400">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="cursor-pointer text-[#ffffff] hover:text-gray-400">
          <a href="#awards">Awards</a>
        </li>
        <li className="cursor-pointer text-[#ffffff] hover:text-gray-400">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex gap-4 justify-end items-center">
        <Link to="/cart" className="relative">
          <LuShoppingCart className="text-[24px] text-[#ffffff]" />
          <div className="flex items-center justify-center text-xs absolute -top-2 -right-2 p-1 w-4 h-4 rounded-full bg-white">
            {item.length}
          </div>
        </Link>
        <Link to="/order-history" className="relative">
          <AiOutlineHistory className="text-[24px] text-[#ffffff]" />
          <div className="flex items-center justify-center text-xs absolute -top-2 -right-2 p-1 w-4 h-4 rounded-full bg-white">
            {history.length}
          </div>
        </Link>

        <div className="block lg:hidden">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="absolute bg-[#DCCA87] left-0 right-0 top-0 bottom-0 flex flex-col gap-8 items-center justify-center z-20">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className=""
                onClick={() => setToggleMenu(false)}
              />
              <ul className="flex flex-col gap-6 items-center">
                <li>
                  <a href="/" onClick={() => setToggleMenu(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setToggleMenu(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="/menu" onClick={() => setToggleMenu(false)}>
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#awards" onClick={() => setToggleMenu(false)}>
                    Awards
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setToggleMenu(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
