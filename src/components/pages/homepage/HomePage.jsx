import React from 'react'
import NavBar from '../Navbar';
import Image from 'react-bootstrap/Image';
function HomePage() {
    return (
        <div>
          <NavBar/>
          <section className='hero-section'>
          <Image src="holder.js/171x180" roundedCircle />
          </section>
        </div>
    )
}

export default  HomePage;