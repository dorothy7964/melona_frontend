const BORDER_COLOR = "#e6e6e6";
const BOX_BORDER = `1px solid ${BORDER_COLOR}`;
const BORDER_RADIUS = "4px";

export default {
  minHeight: "60vh",
  maxWidthLarge: "935px",
  maxWidthMiddle: "768px",
  maxWidthSmall: "576px",
  bgColor: "#FAFAFA",
  blackColor: "#262626",
  greenColor: "#06703b",
  melonaColor: "#b9dd39",
  lightGreenColor: "#9ccc65",
  titleGreyColor: "#f2f0f0",
  lightGreyColor: "#eeeeee",
  darkGreyColor: "#999",
  redColor: "#ED4956",
  darkBlueColor: "#003569",
  borderColor: `${BORDER_COLOR}`,
  boxBorder: `1px solid ${BORDER_COLOR}`,
  borderRadius: "4px",
  shadowBox: `background-color:white; 
                -webkit-box-shadow: 20px 20px 8px -13px rgba(230,230,230,0.37);
                -moz-box-shadow: 20px 20px 8px -13px rgba(230,230,230,0.37);
                box-shadow: 20px 20px 8px -13px rgba(230,230,230,0.37);
                `,
  shadowBox_bottom: `
                -webkit-box-shadow: 0px 14px 22px -3px rgba(230,230,230,0.25);
                -moz-box-shadow: 0px 14px 22px -3px rgba(230,230,230,0.25);
                box-shadow: 0px 14px 22px -3px rgba(230,230,230,0.25);
                `,
  whiteBox: `border:${BOX_BORDER};
               border-radius:${BORDER_RADIUS};
               background-color:white; 
               `,
  whiteBox_bottom: `border-bottom:${BOX_BORDER};
               border-radius:${BORDER_RADIUS};
               background-color:white;
               `,
};
