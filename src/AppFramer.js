import React, { useEffect } from 'react'

import './App.css'

import {motion ,AnimatePresence} from "framer-motion"
import images from "./images"

function AppFrmaer() {
  return (
    <div className="App" >
            <motion.div className="carousel">
                <motion.div className="inner-carousel">
                    {images.map((image)=>{
                        return(
                            <motion.div className="item" key={image}>
                                <img src={image} alt/>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </motion.div>
    </div>
  )
}

export default AppFrmaer

// https://api.themoviedb.org/3/movie/popular?api_key=<<d5c35e51c81488b19da7c1f572507a3d>>&language=en-US&page=1