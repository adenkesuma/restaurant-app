import { images } from '../constants';

const Subheading = ({ title }) => (
  <div className='mx-auto' style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="mx-auto" />
  </div>
);

export default Subheading;