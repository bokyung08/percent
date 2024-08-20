import React, { useState } from 'react';
import './MyImage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated, useTransition } from 'react-spring';

const MyImage = () => {
    const navigate = useNavigate();
    const [clickedImage, setClickedImage] = useState(null);

    const transitions = useTransition(clickedImage, {
        from: { opacity: 0, transform: 'translateY(100px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(-100px)' },
        config: { mass: 1, tension: 280, friction: 120 },
      });


      const handleClick = (key) => {
        console.log('페이지 클릭');
        const altText = key.target.alt;
        console.log(altText);
        // 애니메이션이 끝난 후 B 페이지로 이동
        setTimeout(() => {
            navigate(`/BPage/${encodeURIComponent(altText)}`);
        }, 500);
      };
    return (
        <>
          {transitions((styles, item) => (
            <animated.div
              key={item}
              style={{ ...styles, width: '100%', height: '200px', backgroundColor: '#FFEDEC' }}
            >
        <div className= "docent-select">
            도슨트를 선택하세요
        </div>
            <div className="image">
                 <img src='images/andy.png' alt="andy" onClick={handleClick} ></img><img src='images/goch.png' alt="goch" onClick={handleClick}></img>
            </div>
            <div className="imagesw">
                <img src='images/andys.png' alt=""></img><img src='images/gochb.png' alt=""></img>
            </div>
            </animated.div>
          ))}
        </>
      );
    };

export default MyImage;