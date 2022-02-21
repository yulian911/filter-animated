import React, { useEffect } from 'react'

import './App.css'

import {motion ,AnimatePresence} from "framer-motion"
import images from "./images"

function AppFrmaer() {

    const [width ,setWidth]= React.useState(0)
    const carousel =React.useRef()

    React.useEffect(()=>{
        // console.log(carousel.current)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
  return (
    <div className="App" >
        <div className='container'>
            <motion.div className="carousel" ref={carousel } whileTap={{cursor:"grabbing"}}>
                    <motion.div drag="x" dragConstraints={{right:1000 ,left:-width}} className="inner-carousel">
                        {images.map((image)=>{
                            return(
                                <motion.div  className="item" key={image}>
                                    <img src={image} alt="cos"/>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                </motion.div>
        </div>
           
    </div>
  )
}

export default AppFrmaer

// https://api.themoviedb.org/3/movie/popular?api_key=<<d5c35e51c81488b19da7c1f572507a3d>>&language=en-US&page=1