import { images } from '../constants';

const Subheading = ({ title, spoon }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon_image" className={spoon} />
  </div>
);

export default Subheading;