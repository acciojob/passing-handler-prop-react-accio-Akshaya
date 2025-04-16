import React, { useState } from "react";

const Selection = (props) => {
    const [BgStyle, setBgStyle] = useState({background:"" });

    const handleClick = () =>{
        props.applyColor(setBgStyle);
    };

    return(
        <div 
           className="fix-box"
           style={BgStyle}
           onClick={handleClick}
        >
         Selection
         
        </div>
    );
};

export default Selection;
