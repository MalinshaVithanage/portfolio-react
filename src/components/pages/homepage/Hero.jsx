import React from 'react';
function Hero(){
return(
    <div className='hero'>
         <div className="stage">
      {Array(20).fill().map((_, index) => (
        <div className="layer" key={index}></div>
      ))}
    </div>
    </div>
)
}
export default Hero;