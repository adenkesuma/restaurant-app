import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Newsletter from '../components/Newsletter';
import { images } from '../constants';

const Footer = () => (
    <div className="w-full px-[2rem] py-[2rem] relative z-10 flex justify-start items-center flex-col bg-[#1a1a1a]" id="login">
        <Newsletter />

        <div className="mt-4 border-t pt-8 w-full flex justify-between items-start">
            <div>
                <h1 className="text-[#fff] font-medium text-[18px]">Contact Us</h1>
                <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
                <p className="p__opensans">+1 212-344-1230</p>
                <p className="p__opensans">+1 212-555-1230</p>
                <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
            </div>
    
            <div>
                <img 
                    src={images.gericht} 
                    alt="footer_logo" 
                    className='mx-auto w-[200px]'
                />
                <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                <img 
                    src={images.spoon} 
                    className="mx-auto" 
                    style={{ marginTop: 15 }} 
                />
                <div className="mt-3 flex justify-center items-center gap-6">
                    <FiFacebook 
                        className='text-[#fff] hover:bg-gray-400 text-[20px]'
                     />
                    <FiTwitter 
                        className='text-[#fff] hover:bg-gray-400 text-[20px]'
                     />
                    <FiInstagram 
                        className='text-[#fff] hover:bg-gray-400 text-[20px]'
                     />
                </div>
            </div>
    
            <div>
                <h1 className="text-[#fff] font-medium text-[18px]">Working Hours</h1>
                <p className="p__opensans">Monday-Friday:</p>
                <p className="p__opensans">08:00 am - 12:00 am</p>
                <p className="p__opensans">Saturday-Sunday:</p>
                <p className="p__opensans">07:00 am - 11:00 pm</p>
            </div>
        </div>

    </div>
);

export default Footer;
