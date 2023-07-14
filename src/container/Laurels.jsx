import { images, data } from '../constants'
import Subheading from '../components/Subheading';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="flex-1 flex justify-start items-start min-w-[230px] my-[2rem]">
        <img 
            src={imgUrl} 
            alt="awards"
            className='w-[50px] h-[50px]'    
        />
        <div className="flex flex-col ml-[1rem]">
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
            <p className="p__opensans">{subtitle}</p>
        </div>
    </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <Subheading title="Awards & recognition" spoon={"mx-0"} />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div>
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;