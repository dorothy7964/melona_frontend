import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "react-apollo-hooks";
import { TOGGLECHECK_APPLY } from "./ApplyContentsQueries";
import Avatar from "../Avatar";
import FatText from "../FatText";
import Switches from "../Switches";
import ApplyContent from "./ApplyContent";
import ApplyContentMe from "./ApplyContentMe";

const Box = styled.div`
  ${(props) => props.theme.shadowBox}
  background-color:white;
  width: 100%;
`;

const Container = styled(Box)`
  margin-top: 20px;
  padding: 20px 30px;
`;

const User = styled.div`
  display: flex;
  flex-direction: row;
`;

const Profile = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  span {
    margin-left: 10px;
    font-size: 13pt;
  }
`;

const ContentContainer = styled.div`
  margin-top: 10px;
`;

const CategoryText = styled.div`
  span {
    font-weight: 600;
    font-size: 14pt;
    margin-bottom: 10px;
  }
`;

const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  div {
    font-weight: 600;
    &:first-child {
      margin-right: 30px;
      color: ${(props) => props.theme.darkGreyColor};
    }
    &:last-child {
      color: ${(props) => props.theme.lightGreenColor};
    }
  }
`;

export default ({
  applyId,
  applyReadCheck,
  avatar,
  userName,
  categorys,
  anotherPage,
}) => {
  const [toggleReadCheckMutation] = useMutation(TOGGLECHECK_APPLY);

  // iOS SwitchBox
  const [checked, setChecked] = useState(applyReadCheck);

  const handleSwitch = async (applyId) => {
    setChecked(!checked);
    await toggleReadCheckMutation({
      variables: {
        applyId,
      },
    });
  };

  return (
    <Container>
      <User>
        <Profile>
          <Avatar size="sm" url={avatar} />
          <FatText text={userName} />
        </Profile>
        <SwitchBox>
          <Switches
            type="iOSSwitch"
            switchState={checked}
            handleSwitch={() => handleSwitch(applyId)}
            offText="거절"
            onText="수락"
          />
        </SwitchBox>
      </User>
      {checked && (
        <ContentContainer>
          {!anotherPage ? (
            <CategoryText>
              {categorys.map((category) => (
                <ApplyContent
                  key={category.id}
                  categoryId={category.id}
                  userName={userName}
                />
              ))}
            </CategoryText>
          ) : (
            <CategoryText>
              {categorys.map((category) => (
                <ApplyContentMe
                  key={category.id}
                  categoryId={category.id}
                  categoryText={category.text}
                  userName={userName}
                />
              ))}
            </CategoryText>
          )}
        </ContentContainer>
      )}
    </Container>
  );
};
