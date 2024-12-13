import React from 'react'
import Container from './Container'
import Image from './Image'
import videoimg from "../assets/videobg.png"
import plyimage from "../assets/plybutton.png"

const Video = () => {
  return (
    <section className='mt-[114px] '>
        <Container>
            <div className='relative'>
                <Image src={videoimg } alt={"videoimg"}/>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Image className="w-[70px] lg:w-[150px] h-[70px] lg:h-[150px]" src={plyimage}/>
            </div>
            </div>
        </Container>
    </section>
  )
}

export default Video