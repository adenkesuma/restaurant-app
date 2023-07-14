import { images } from '../constants';

const Header = () => (
    <div 
        className="bg-[#1a1a1a] app__wrapper section__padding" 
        id="home"
    >
        <div className="app__wrapper_info">
            <div>
                <p className="p__cormorant">Chase the new flavour</p>
                <img src={images.spoon} alt="spoon_image" />
            </div>
            <h1 className="app__header-h1">The Key To Fine Dining</h1>
            <p 
                className="p__opensans" 
                style={{ margin: '2rem 0' }}
            >
                Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
            </p>
            <button 
                type="button" 
                className="p-3 bg-[#DCCA87] rounded-sm hover:bg-[#948241]"
            >
                Explore Menu
            </button>
        </div>

        <div className="app__wrapper_img">
            <img src={images.welcome} alt="header_img" />
        </div>
    </div>
);

export default Header;
