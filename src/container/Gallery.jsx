import { useRef } from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import Subheading from '../components/Subheading'
import { images } from '../constants'

const Gallery = () => {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef

        if (direction === 'left') {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    };

    return (
        <div className="flex-row bg-[#1a1a1a] pt-[4rem] pr-0 pb-[4rem] pl-[6rem] flex__center">
            <div className="flex-1 flex justify-center gap-3 items-start flex-col min-w-[500px] pr-[2rem]">
                <Subheading title="Instagram" spoon={"mx-0"} />
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p className="p__opensans" style={{ color: '#AAAAAA' }}>
                   In our photo gallery, you will find a captivating collection of visually stunning images that showcase the beauty, ambiance, and delectable offerings of our establishment. Each photograph tells a story, capturing the essence of our restaurants exquisite dishes, elegant interior design, and the joyous moments shared by our guests. 
                </p>
                <button 
                    type="button" 
                    className="mt-[1rem] p-3 bg-[#DCCA87] rounded-sm hover:bg-[#948241]"
                >
                    View More
                </button>
            </div>
            <div className="flex-1 flex flex-row max-w-[50%] relative">
                <div 
                    className="flex flex-row w-max overflow-x-scroll" 
                    ref={scrollRef}
                >
                    {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
                        <div
                            className="relative min-w-[301px] flex__center" 
                            key={`gallery_image-${index + 1}`}
                        >
                            <img 
                                className='w-[100%] h-[100%] object-cover ease-linear duration-75 hover:opacity-[0.35] opacity-100'
                                src={image} 
                                alt="gallery_image"
                            />
                            <BsInstagram 
                                className="absolute text-[#fff] text-[2rem] opacity-0 ease-linear duration-75 cursor-pointer hover:opacity-100" 
                            />
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-between items-center px-[1rem] absolute bottom-[5%]">
                    <BsArrowLeftShort
                        className="text-[#DDEA87] cursor-pointer text-[2.4rem] bg-[#1a1a1a] rounded-[50%]"
                        onClick={() => scroll('left')} 
                    />
                    <BsArrowRightShort
                        className="text-[#DDEA87] cursor-pointer text-[2.4rem] bg-[#1a1a1a] rounded-[50%]"
                        onClick={() => scroll('right')} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallery
