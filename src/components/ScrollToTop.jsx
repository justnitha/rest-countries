import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";



const Scroll =() => {
    const [showButton, setShowButton] = useState(false);
    const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    };
    const scrollToTop = () => {
        window.scrollTo({
             top: 0, 
             behavior: 'smooth'
            });
    };
    window.addEventListener('scroll', handleScroll);

    return(
        <div>
        {/* Content of your page */}
        <div className="fixed bottom-3 text-white right-3">
        {showButton && (
          <button className="z-10 rounded-full px-4 py-[10px] bg-green-800 hover:bg-green-900 border-none" onClick={scrollToTop}>
           <FontAwesomeIcon icon={faArrowUp}/>
          </button>
        )}
        </div>
        
      </div>
    )
}
export default Scroll