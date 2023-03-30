import React from "react";
import './styles.css';

function CustomTextArea({labelElement,placeholderTitle="this is a textarea ..."}){
    return(
        
        <textarea rows = {labelElement} cols="2" placeholder={placeholderTitle} className="inputDescription"/>
       
    )
}
export default CustomTextArea;