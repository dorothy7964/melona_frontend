import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing: border-box;
    }
    body {
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 140px;
        /* Scrollbar None */
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        ::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
        }
    }
    a {
        color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus {
        outline:none;
    }

    * Internet Explorer용 코드 스크롤 바  */
   html {scrollbar-3dLight-Color: #efefef; scrollbar-arrow-color: #dfdfdf; scrollbar-base-color: #efefef; scrollbar-Face-Color: #dfdfdf; scrollbar-Track-Color: #efefef; scrollbar-DarkShadow-Color: #efefef; scrollbar-Highlight-Color: #efefef; scrollbar-Shadow-Color: #efefef}
   
   /* Chrome, Safari용 스크롤 바 */
   ::-webkit-scrollbar {width: 8px; height: 8px; border: 3px solid #fff; }
   ::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment {display: block; height: 10px; background: #efefef}
   ::-webkit-scrollbar-track {background: #efefef; -webkit-border-radius: 10px; border-radius:10px; -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,.2)}
   ::-webkit-scrollbar-thumb {height: 50px; width: 50px; background: rgba(0,0,0,.2); -webkit-border-radius: 8px; border-radius: 8px; -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,.1)}
`;