import Subheading from "../components/Subheading";
import { data } from "../constants";
import MenuItem from "../components/MenuItem";
import { useEffect, useState } from "react";
import { useCart } from "../states/useCart";

const Menu = () => {
  const carts = useCart();
  const [cart, setCart] = useState([]);
  const [added, setAdded] = useState(null);

  const handleAdd = (id) => {
    setCart((prev) => [...prev, id]);
    setAdded(id);
  };

  useEffect(() => {
    if (cart.length > 0) {
      const existingItem = carts.item.find((item) => item.id === added.id);
      if (existingItem) {
        const updatedCart = carts.item.map((item) =>
          item.id === added.id ? { ...item, count: item.count + 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        carts.setItem(updatedCart);
      } else {
        const temp = { ...added, count: 1 };
        const updatedCart = [...carts.item, temp];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        carts.setItem(updatedCart);
      }

      carts.updateCount(cart.length);
    }
  }, [cart, added]);

  return (
    <div
      className="flex-col bg-[#1a1a1a] flex__center section__padding"
      id="menu"
    >
      <div className="mb-[2rem] text-center">
        <Subheading title="Menu that fits your palatte" spoon={"mx-auto"} />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="w-full my-[2rem] mx-0 flex justify-center items-start flex-col">
        <div className="flex-1 w-full flex-col flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
                handleAdd={() =>
                  handleAdd({
                    id: wine.title + index,
                    title: wine.title,
                    price: wine.price,
                    tags: wine.tags,
                  })
                }
              />
            ))}
          </div>
        </div>

        <div className="flex-1 w-full flex-col  flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
                handleAdd={() =>
                  handleAdd({
                    id: cocktail.title + index,
                    title: cocktail.title,
                    price: cocktail.price,
                    tags: cocktail.tags,
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
