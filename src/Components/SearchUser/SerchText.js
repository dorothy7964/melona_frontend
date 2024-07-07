import React, { useState } from "react";
import styled from "styled-components";
import TextFields from "../TextFields";
import { DeleteText } from "../Icons";
import SearchUserContainer from "./SearchUserContainer";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBox = styled.div`
  display: flex;
  form {
    flex: 1;
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
const SearchUserBox = styled.div`
  margin-top: 20px;
`;

export default ({ searchRefetch, handleToggleFollow }) => {
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
      setIconView(false);
    }
  };

  return (
    <SearchContainer>
      <SearchBox>
        <form onKeyPress={handleKeyPress}>
          <TextFields
            type="StandardFull"
            text="친구 찾기 (유저이름 · 이메일 검색)"
            inputText={searchTerm}
            handleChange={handleChange}
          />
        </form>
        <IconBox onClick={handleInputCancel}>
          {iconView && <DeleteText />}
        </IconBox>
      </SearchBox>
      <SearchUserBox>
        <SearchUserContainer
          term={searchTerm}
          searchRefetch={searchRefetch}
          handleToggleFollow={handleToggleFollow}
        />
      </SearchUserBox>
    </SearchContainer>
  );
};
