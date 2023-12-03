import { useState, useEffect } from 'react';


const FixedNavbar = ({onScroll}) => {

    useEffect(() => {
        const handleScroll = (e) => {
          if (onScroll) {
            onScroll(e);
          }}
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [onScroll]);
    
}

export default FixedNavbar