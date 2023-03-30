import React from "react";
import "./styles.css";
function FooterElement({placeHolderTitle="default"}){
    return(
        <input placeholder={placeHolderTitle} className="input"/>
    )
}
export default FooterElement;