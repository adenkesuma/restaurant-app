import Subheading from './Subheading'

const Newsletter = () => (
    <div className="py-[2rem] px-[4rem] bg-[#1a1a1a]">
        <div className="text-center">
            <Subheading title="Newsletter" spoon={"mx-auto"} />
            <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
            <p className="p__opensans">And never miss latest Updates!</p>
        </div>
        <div className="flex justify-center flex-row gap-3 mt-[3rem] mx-auto ">
            <input 
                className='w-[400px] rounded-sm text-[1rem] outline-none border-none px-3'
                type="email" 
                placeholder="Enter your email address" 
                />
            <button 
                type="button"
                className="p-3 bg-[#DCCA87] rounded-sm hover:bg-[#948241]"
            >
                Subscribe
            </button>
        </div>
    </div>
)

export default Newsletter
