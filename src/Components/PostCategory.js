import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PlusText from "./PlusText";
import { Check } from "./Icons";

const CategoryContainer = styled.div`
  padding: 0 90px;
  padding-bottom: 30px;
  border-bottom: ${(props) => props.theme.boxBorder};
  display: flex;
  flex-direction: column;
`;

const CategoryBox = styled.div`
  font-size: 16pt;
  &:not(:first-child) {
    margin-top: 20px;
  }
  svg {
    margin-right: 5px;
  }
`;

const ContentsBox = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    color: ${(props) => props.theme.lightGreenColor};
  }
`;

const Text = styled.div`
  font-size: 13pt;
  font-weight: 400;
`;

const PostCategory = ({ anotherPage, categorys }) => (
  <CategoryContainer>
    {categorys &&
      categorys.map((category) => (
        <CategoryBox key={category.id}>
          <PlusText text={category.text} />
          {anotherPage &&
            category.contents.map((content) => (
              <ContentsBox key={content.id}>
                <Check />
                <Text>{content.text}</Text>
              </ContentsBox>
            ))}
        </CategoryBox>
      ))}
  </CategoryContainer>
);

PostCategory.propTypes = {
  anotherPage: PropTypes.bool.isRequired,
  categorys: PropTypes.array.isRequired,
};

export default PostCategory;
