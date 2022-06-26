import { Fragment, useState } from "react"
import infoImage from "../assets/info.svg";
import styled from 'styled-components';

const HelpContainer = styled.div`
position: relative;
display: inline-block;
`;
const HelpImg = styled.img`
width: 32px;
cursor: pointer;
top: 10px;
position: relative;
left: -10px;
`;
const HelpBox = styled.div`
background-color: rgb(0,0,0,0.6);
position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;
const HelpText = styled.div`
background-color: #ffffff;
padding: 2rem 2rem;
border: 2px solid #000000;
border-radius: 1rem;
`;

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
      <HelpContainer>
        <HelpImg src={infoImage} onClick={showHelpHandler} alt={props.text} />
      </HelpContainer>
      {showHelp && <HelpBox onClick={hideHelpHandler}>
        <HelpText>{props.text}</HelpText>
      </HelpBox>}
    </Fragment>
  );
}