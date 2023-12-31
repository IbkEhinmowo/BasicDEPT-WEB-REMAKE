import Headroom from 'react-headroom'
import { useState } from 'react';

export default function Taskbar(){
const [state, setState]= useState(false);

const handleSidebar = () => {
    setState(!state); // Toggle the state by negating its current value
  };
    const headroomStyle = {
         // Add margin as needed
      };
      return(
        <div className="navig">
            <Headroom style={headroomStyle}>
        <nav className="nav">
        <h1><a href="./">BASIC/DEPT®</a></h1>
        <ul>
            <li><a href="#work">WORK</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#new">NEW</a></li>
            <li><a href="#thinking">THINKING</a></li>
            <li><a href="#careers">CAREERS</a></li>
            <li><a href="#contact">CONTACT</a></li>
           
     
        </ul>
        <svg onClick={handleSidebar} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        </svg>
    </nav>  
            </Headroom>
    
        </div>
    
    

    )
}
  
