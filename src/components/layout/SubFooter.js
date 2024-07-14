import Link from "next/link";
import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'


export default function SubFooter(){
    return(
        <section className="subfooter bg-gray-100 rounded-lg  flex flex-wrap gap-3 sm:flex-col md:flex-row " id="contact">
          
            
            <div className="mx-4 py-6 ">
              <span className="text-primary  text-xl text-center px-14 ">Oriental Foods</span>  
              <p className=" text-gray-500 text-xs py-2">Welcome to Oriental Foods, where the flavors of the<br /> 
                East come alive in every dish. 
                Step into a world of<br /> culinary delight as we invite you on a journey to <br />
                experience the rich and vibrant tastes of Asia.</p>
                <div className=" flex gap-2 mx-12">
                <SocialIcon url="https://facebook.com"  style={{  width: 30, height:30 }}/>
                <SocialIcon url="https://instagram.com"  style={{  width: 30, height:30 }}/>
                <SocialIcon url="https://x.com"  style={{  width: 30, height:30 }}/>
                <SocialIcon url="https://linkedin.com"  style={{  width: 30, height:30 }}/>
                </div>
            </div>
            <div className=" py-6  ">
              <span className="text-secondary text-xl font-bold   ">Opening Restaurant</span>  
              <p className=" text-gray-500 text-xs py-2 text-center">Monday-Saturday<br />
              12:00 noon - 12:00 midnight<br />
              Sunday Closed</p>
            </div>
            
            <div className=" ml-6 py-6 ">
              <span className="text-secondary text-xl font-bold ">User Link</span>  
              <nav className=" text-gray-500 text-xs py-2 text-center">
              <Link href={'/'}>Home</Link><br />
              <Link href={'/menu'}>Menu</Link><br />
              <Link href={''}>About</Link><br />
              <Link href={'/#contact'}>Contact</Link>
              </nav>
            </div>
            <div className="mx-5 py-6 ">
              <span className="text-secondary text-xl font-bold mx-6">Contact Us</span>  
              <p className=" text-gray-500 text-xs py-2 text-center">Near Manipal University Jaipur<br />
              Dehmi Kalan, Jaipur, India<br />
              +91 9876567841</p>
              
                    
                    
            </div>
            
            
        </section>
    )
}