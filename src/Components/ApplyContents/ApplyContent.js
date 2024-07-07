import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { APPLY_CONTENTS } from "./ApplyContentsQueries";
import PlusText from "../PlusText";
import Loader from "../Loader";
import ApplyContentSwitch from "./ApplyContentSwitch";

const ContentBox = styled.div`
  margin: 40px 0;
`;

const CategoryText = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  span {
    font-weight: 600;
    font-size: 14pt;
    margin-bottom: 10px;
  }
`;

export default ({ categoryId, userName }) => {
  const { data, loading } = useQuery(APPLY_CONTENTS, {
    variables: { categoryId, userName },
  });

  if (loading === true) {
    return (
      <React.Fragment>
        <Loader type="small" />
      </React.Fragment>
    );
  } else if (!loading && data && data.applyContents) {
    const { applyContents } = data;
    return (
      <ContentBox>
        {applyContents.map((contents) => (
          <CategoryText key={contents.id}>
            <PlusText text={contents.category.text} />
            <ApplyContentSwitch
              contentId={contents.id}
              contentText={contents.text}
              contentCheck={contents.confirmCheck}
            />
          </CategoryText>
        ))}
      </ContentBox>
    );
  }
};
