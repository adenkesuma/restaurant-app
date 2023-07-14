import { Link } from 'react-router-dom';
import Subheading from '../components/Subheading';
import { images } from '../constants';

const Header = () => (
    <div 
        className="bg-[#1a1a1a] app__wrapper section__padding" 
        id="home"
    >
        <div className="app__wrapper_info">
            <Subheading title={"Chase the new flavour"} spoon={"mx-0"} />
            <h1 className="app__header-h1">The Key To Fine Dining</h1>
            <p 
                className="p__opensans" 
                style={{ margin: '2rem 0' }}
            >
                At Gericht, exceptional service is our hallmark. Our highly trained staff anticipates your every need, providing attentive and personalized service throughout your dining experience 
            </p>
            <Link
                to="/menu"
                className="p-3 bg-[#DCCA87] rounded-sm hover:bg-[#948241]"
            >
                Explore Menu
            </Link>
        </div>

        <div className="app__wrapper_img">
            <img src={images.welcome} alt="header_img" />
        </div>
    </div>
);

export default Header;
