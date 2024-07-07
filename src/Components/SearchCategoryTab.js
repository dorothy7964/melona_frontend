import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { categoryTab, categoryArray } from "../Hooks/Category";
import ShadowBox from "./ShadowBox";

const Category = styled.div`
  display: flex;
`;

const CategoryButton = styled.button`
  width: 100%;
  padding: 0;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: white;
  border-radius: 20px !important;
  &:not(:first-child) {
    margin-left: 20px;
  }
  div {
    @media (max-width: ${(props) => props.theme.maxWidthMiddle}) {
      padding: 9px;
    }
    @media (max-width: ${(props) => props.theme.maxWidthSmall}) {
      padding: 10px 0;
    }
    border-radius: inherit;
    &:hover {
      background-color: ${(props) => props.theme.lightGreenColor};
    }
  }
`;

const SearchCategoryTab = ({ history, searchRoute }) => {
  const [categoryIndex, setCategoryIndex] = useState();
  const handleCategory = (index) => {
    setCategoryIndex(index);
    history.push(`/${searchRoute}/${categoryArray[index]}`);
  };

  return (
    <Category>
      {categoryTab.map((section, index) => (
        <CategoryButton
          key={index}
          onClick={() => handleCategory(index)}
          categoryIndex={categoryIndex}
        >
          <ShadowBox text={section.tab} color="inherit" />
        </CategoryButton>
      ))}
    </Category>
  );
};

SearchCategoryTab.propTypes = {
  history: PropTypes.object.isRequired,
  searchRoute: PropTypes.string.isRequired,
};

export default withRouter(SearchCategoryTab);
