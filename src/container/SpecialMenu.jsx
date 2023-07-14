import { data } from '../constants';
import Subheading from "../components/Subheading"
import MenuItem from '../components/MenuItem';
import { Link } from 'react-router-dom';

const SpecialMenu = () => (
    <div className="flex-col bg-[#1a1a1a] flex__center section__padding" id="menu">
        <div className="mb-[2rem] text-center">
            <Subheading title="Menu that fits your palatte" spoon={"mx-auto"} />
            <h1 className="headtext__cormorant">Today&apos;s Special</h1>
        </div>

        <div className="w-full my-[2rem] mx-0 flex justify-center items-start flex-col">
            <div className="flex-1 w-full flex-col  flex__center">
                <p
                    className="app__specialMenu-menu_heading"
                >
                    Wine & Beer
                </p>
                <div className="app__specialMenu_menu_items">
                    {data.wines.map((wine, index) => (
                        <MenuItem
                            key={wine.title + index} 
                            title={wine.title} 
                            price={wine.price} 
                            tags={wine.tags}
                        />
                    ))}
                </div>
            </div>
                
            <div className="flex-1 w-full flex-col  flex__center">
                <p className="app__specialMenu-menu_heading">Cocktails</p>
                <div className="app__specialMenu_menu_items">
                {data.cocktails.map((cocktail, index) => (
                    <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                ))}
                </div>
            </div>
                
            <Link to="/menu"
                className="text-center mx-auto p-3 bg-[#DCCA87] rounded-sm hover:bg-[#948241]"
            >
                View More
            </Link>
        </div>
    </div>
);

export default SpecialMenu;