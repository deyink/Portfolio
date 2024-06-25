import React from 'react'
import "./css/Navbar.css"
import { HashLink as Links} from 'react-router-hash-link'

import menu from "../assets/menuw.png"
import close from "../assets/close.png"





export default function Navbar() {
    const showSidebar= ()=>{
       const sidebar = document.getElementById("navlist")
        sidebar.style.right= "0px"
    }

    const hideSidebar = ()=>{
        const sidebar = document.getElementById("navlist")
        sidebar.style.right= "-600px"
    }

  return (
    <div >
        <nav>
     
            <Links to='#Home' >
            <div className="logo">
                 Port
                <span className='title' >
                    
                Folio
                </span> 
            </div> 
            </Links>
        
            <div className="navlist" id='navlist' >

                <ul>
                <li onClick={hideSidebar} > <Links to='#Home' smooth > Home </Links></li>
               <li  onClick={hideSidebar}> <Links to='#About' smooth >About</Links> </li>
               <li  onClick={hideSidebar}> <Links to='#Services' smooth >Services</Links>  </li>
                <li onClick={hideSidebar} > <Links to='#Projects' smooth >Projects</Links>  </li>
                <li onClick={hideSidebar} > <Links to='#Blogs' smooth >Blogs</Links>  </li>
                <li onClick={hideSidebar} > <Links to='#Contact' smooth >Contact</Links>   </li>

                <img className="close-btn" src={close} alt="" width={"21px"} height={"21px"} style={{cursor:"pointer"}} onClick={hideSidebar} />
              
                </ul>


           
            </div>
           
           
  
                
               
         
        
            
            
           <img className="menu-btn" src={menu} alt="" width={"21px"} height={"21px"} style={{cursor:"pointer", }} onClick={showSidebar} />

           
           
        </nav>
    </div>

  )

}



