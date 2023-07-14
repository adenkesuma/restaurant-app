import { useState, useRef } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../constants'

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <div className="h-[100vh] relative">
      <video
        className='w-full h-full object-cover'
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex__center">
        <div
          className="w-[100px] h-[100px] rounded-[50%] border border-[#DCCA87] flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Intro