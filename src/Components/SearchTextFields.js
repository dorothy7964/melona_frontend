import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextFields from "./TextFields";
import { DeleteText } from "./Icons";

const SearchBox = styled.div`
  display: flex;
  flex: 1;
  form {
    width: 100%;
  }
  div {
    label {
      @media (max-width: ${(props) => props.theme.maxWidthMiddle}) {
        font-size: 11pt;
      }
      @media (max-width: ${(props) => props.theme.maxWidthSmall}) {
        font-size: 9pt;
      }
      font-size: 14pt;
    }
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 5px;
  svg {
    color: ${(props) => props.theme.darkGreyColor};
  }
`;

const SearchTextFields = ({ history, searchRoute }) => {
  const [iconView, setIconView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setIconView(true);
  };

  const handleInputCancel = () => {
    setSearchTerm("");
    setIconView(false);
  };

  const handleKeyPress = (e) => {
    const { which } = e;
    if (which === 13) {
      e.preventDefault();
      history.push(`/${searchRoute}/${searchTerm}`);
      setSearchTerm("");
      setIconView(false);
    }
  };

  return (
    <SearchBox>
      <form onKeyPress={handleKeyPress}>
        <TextFields
          type="StandardFull"
          text="유저이름 · 지역 · 돌아오는 날짜 · 카테고리  검색"
          inputText={searchTerm}
          handleChange={handleChange}
        />
      </form>
      <IconBox onClick={handleInputCancel}>
        {iconView && <DeleteText />}
      </IconBox>
    </SearchBox>
  );
};

SearchTextFields.propTypes = {
  history: PropTypes.object.isRequired,
  searchRoute: PropTypes.string.isRequired,
};

export default withRouter(SearchTextFields);
