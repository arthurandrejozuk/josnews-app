import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  ul{
    list-style-type:none
  }
  body {
    color:  "#B6BBC4";
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: ${props => props.theme.background};
  }
  
  #__next {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }
 
  * {
 
    box-sizing: border-box;
    margin: 0;
    padding: 0;

   
    @media(max-width: 700px ){
        body{
            width: max-content;
        }
    }

    * {
  scrollbar-width: thin;
  scrollbar-color: #000000 ;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #000000;
}

*::-webkit-scrollbar-track:hover {
  
}

*::-webkit-scrollbar-track:active {
  background-color: #000000;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #B6BBC4;
}





  }
`

export default GlobalStyled;