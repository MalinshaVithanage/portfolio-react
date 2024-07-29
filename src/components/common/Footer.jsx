import React from 'react';

const generateBubbles = () => {
  const bubbles = [];
  for (let i = 0; i < 128; i++) {
    const size = `${2 + Math.random() * 4}rem`;
    const distance = `${6 + Math.random() * 4}rem`;
    const position = `${-5 + Math.random() * 110}%`;
    const time = `${2 + Math.random() * 2}s`;
    const delay = `${-1 * (2 + Math.random() * 2)}s`;

    bubbles.push(
      <div
        key={i}
        className="bubble"
        style={{
          '--size': size,
          '--distance': distance,
          '--position': position,
          '--time': time,
          '--delay': delay
        }}
      ></div>
    );
  }
  return bubbles;
};

const Footer = () => {
  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles">
          {generateBubbles()}
        </div>
        <div className="content">
          <div>
            <div>
              <b>Developed with love by Malinsha Vithanage</b>
             
            </div>

          </div>
          <div>
            <a
              className="image"
              href="https://codepen.io/z-"
              target="_blank"
              style={{ backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")' }}
            ></a>
            <p>©2024 Not Really</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
