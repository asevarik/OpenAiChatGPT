import React from "react";
import './styles.css';

function CustomTextArea({labelElement,placeholderTitle="this is a textarea ...",refs}){
    return(
        
        <textarea ref={refs} rows = {labelElement} cols="2" placeholder={placeholderTitle} className="inputDescription"/>
       
    )
}
export default CustomTextArea;