import React from "react";
import './FooterStyles.css';

function LabelElement(props){
    return(
        
        <textarea rows = {props.LabelElement} cols="2" placeholder="Add description" className="inputDescription"/>
       
    )
}
export default LabelElement;