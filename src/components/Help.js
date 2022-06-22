import { Fragment, useState } from "react"
import info from "../assets/info.svg";

export default function Help(props){
  const [showHelp, setShowHelp] = useState(false);
  
  function showHelpHandler(){
    setShowHelp(true);
  }

  function hideHelpHandler(){
    setShowHelp(false);
  }

  return (
    <Fragment>
      <div className="helpContainer">
        <img className="helpButton" src={info} onClick={showHelpHandler} alt={props.text} />
      </div>
      {showHelp && <div className="helpBox" onClick={hideHelpHandler}><div className="helpText">{props.text}</div></div>}
    </Fragment>
  );
}