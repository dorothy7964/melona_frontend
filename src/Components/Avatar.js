import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const getSize = (size) => {
  let number;
  if (size === "sm") {
    number = 30;
  } else if (size === "md") {
    number = 50;
  } else if (size === "lg") {
    number = 150;
  }
  return `
        width:${number}px;
        height:${number}px;
    `;
};

const Container = styled.div`
  @media (max-width: ${(props) => props.theme.maxWidthSmall}) {
    ${getSize("sm")}
  }
  ${(props) => getSize(props.size)}
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 50%;
`;

const Avatar = ({ size, url }) => <Container size={size} url={url} />;

Avatar.propTypes = {
  url: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Avatar;
