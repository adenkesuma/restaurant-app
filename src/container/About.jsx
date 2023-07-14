import { images } from '../constants'

const About = () => (
    <div className="relative app__bg flex__center section__padding" id="about">
        <div className="absolute inset-0 flex__center">
            <img 
                className='w-[390px] h-[415px]'
                src={images.G} 
                alt="G_overlay" 
            />
        </div>

        <div className="w-full z-10 flex__center">
            <div className="flex-1 flex gap-6 justify-end items-end flex-col text-right">
                <h1 className="headtext__cormorant">About Us</h1>
                <img 
                    src={images.spoon} 
                    alt="about_spoon" 
                    className="spoon__img" 
                />
                <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
               <button 
                    type="button" 
                    className="p-3 bg-[#DCCA87] rounded-sm hover:bg-[#948241]"
                >
                    Know More
                </button>  
            </div>

            <div className="mx-[4rem] my-[2rem] flex__center">
                <img 
                    src={images.knife} 
                    alt="about_knife" 
                    className='h-[910px]'
                />
            </div>

            <div className="flex-1 flex gap-6 justify-start items-start flex-col text-left">
                <h1 className="headtext__cormorant">Our History</h1>
                <img 
                    src={images.spoon} 
                    alt="about_spoon" 
                    className="spoon__img" 
                />
                <p className="p__opensans">
                    Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
                </p>
                <button 
                    type="button" 
                    className="p-3 bg-[#DCCA87] rounded-sm hover:bg-[#948241]"
                >
                    Know More
                </button>  
            </div>
        </div>
    </div>
)

export default About