import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const SlideTransition = ({ children }) => {
    const props = useSpring({ y: 0, from: { y: 100 } });

  return (
    <animated.div style={{ ...props, transform: props.y.interpolate(y => `translateY(${y}%)`) }}>
    {children}
    </animated.div>
  );
}
const Apage = () => {
    return (
        <div>
            {/* A 페이지 내용 */}
            <Link to="/BPage">
                <SlideTransition>
                {/* 슬라이드될 내용 */}
                </SlideTransition>
            </Link>
         </div>
    );
};

export default SlideTransition;
