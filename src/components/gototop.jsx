import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const GoTOTop = () => {
    const GoToBtn = () =>{
        window.scrollTo({top: 0, left: 0, behaviour: "smooth"});
    }

    return <div className="top-btn" onClick={GoToBtn}>
        <BsArrowUpCircle className='top_icon' />
    </div>
};

export default GoTOTop;