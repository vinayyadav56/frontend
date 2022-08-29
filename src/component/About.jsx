import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
    <div  className='container'>
      <div className='about-content'>
      <h3 className='head'>About page</h3>
        <p className='text'>In current technological era everything is just one click away
         from food delivery to buying goods from ecommerce sites.</p>
        <p className='text'>
          So, to move forward this era we introduced this new online delivery concept called CarryKar.
          The idea is to make people travel more in luxury with no fear of travel
           expenses & to make parcel services affordable.
        </p>
        <p className='text'>
          CarryKar is all about sending your important stuff may it be a parcel, books, 
          valuables or anything you want to send from one place to another, you can now easily send.
          It helps businesses in sending their sample products, documents
          from Point A to B within a day in affordable charges...
        </p>
        <p className='text'>
          This is a platform where anyone can be a Carrier and make their
          travel 50 – 60% affordable.
        </p>
      </div>
      <div className='about-co mt-5'>
        <p className='co-name'>
          Founder & Co-Founder
        </p>
        <ul>
          <li>
            Rohan Tyagi, 24
          </li>
          <li>
            Founder & CEO
          </li>
          <li>
            Adarsh Singh, 23
          </li>
          <li>
            Co-Founder
          </li>
        </ul>
      </div>
    </div>
       
    </>
  )
}

export default About