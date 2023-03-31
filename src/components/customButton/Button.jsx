import React from "react";
import "./styles.css"
function Button({title="button",onCustClick}){
    return(
        <div>
      <button type="button" onClick={onCustClick} className="submitButton">{title}</button>
    </div>
    )
}
export default Button;