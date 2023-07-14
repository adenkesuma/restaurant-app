import Subheading from '../components/Subheading'
import { images } from '../constants'

const Chef = () => (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img 
                src={images.chef} 
                alt="chef_image" 
            />
        </div>
        <div className="app__wrapper_info">
            <Subheading title="Chef's word" spoon={"mx-0"} />
            <h1 className="headtext__cormorant">What we believe in</h1>

            <div className="flex flex-col gap-4 ww-full">
                <div className="flex justify-start gap-5 items-end">
                    <img 
                        src={images.quote} 
                        alt="quote_image"
                        className='w-[47px] h-[40px]' 
                    />
                    <p className="p__opensans">
                        We believe that fine dining should be an occasion worth celebrating.
                    </p>
                </div>
                <p className="p__opensans">
                    Whether {"you're"} marking a special milestone or simply treating yourself to a memorable night out, Gericht is the perfect setting.
                </p>
            </div>

            <div className="w-full mt-[3rem]">
                <p className='text-[#fff]'>Kevin Luo</p>
                <p className="p__opensans">Chef & Founder</p>
                <img 
                    className='w-[250px]'
                    src={images.sign} 
                    alt="sign_image" 
                />
            </div>
        </div>
    </div>
)

export default Chef