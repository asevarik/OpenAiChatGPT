import React from "react";
import "./styles.css";


function FooterElement({placeHolderTitle="default",refs}){
    return(
        <input placeholder={placeHolderTitle} ref={refs} className="input"/>
    )
}
export default FooterElement;