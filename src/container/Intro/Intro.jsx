import React ,{useState,useRef} from 'react';

import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import './Intro.css';
import {meal} from '../../constants'

const Intro = () =>{
  const vidRef = useRef(null);
  const [playVideo,setplayVideo] = useState(false)

  const handlePlayVideo = () => {
    setplayVideo(!playVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video'>
      <video
        type='video/mp4'
        ref={vidRef}
        loop
        controls={false}
        src={meal}
        muted
      />
  


      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={handlePlayVideo}>
        {playVideo ? (<BsPauseFill color='#fff' fontSize={40}/>) : (<BsFillPlayFill color='#fff' fontSize={40}/>)}
      </div>
      </div>
    </div>
  )

} ;

export default Intro;
