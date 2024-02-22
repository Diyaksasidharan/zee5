import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

const[show,setShow]=useState(false);

useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 600){
            setShow(true)
        }
        else{
            setShow(false)
        }
    })
})
console.log(show)

  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img width={'150px'} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Zee5_Official_logo.svg/1200px-Zee5_Official_logo.svg.png" alt="" />
    </div>
  )
}

export default Nav