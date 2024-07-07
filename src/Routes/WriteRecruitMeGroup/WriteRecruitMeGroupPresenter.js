import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import TextFields from "../../Components/TextFields";
import ButtonRadio from "../../Components/ButtonRadio";
import GoogleMaps from "../../Components/GoogleMaps";
import DatePicker from "../../Components/DatePicker";
import ButtonSquare from "../../Components/ButtonSquare";
import daughterBody from "../../Icons/daughter-body.png";
import { Back } from "../../Components/Icons";

const Wrapper = styled.div`
  min-height: ${(props) => props.theme.minHeight};
`;

const ReplayLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  svg {
    color: ${(props) => props.theme.darkGreyColor};
    font-size: 35pt;
  }
`;

const Box = styled.div`
  ${(props) => props.theme.shadowBox}
  background-color:white;
  width: 100%;
`;

const Form = styled(Box)`
  padding: 40px;
  form {
    display: flex;
    flex-direction: column;
  }
`;

const HeaderIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  img {
    width: 100px;
  }
`;

const Text = styled.span`
  display: block;
  margin-bottom: 25px;
  font-size: 11pt;
  font-weight: 600;
  color: ${(props) => props.theme.darkGreyColor};
`;

const Section = styled.div`
  width: 600px;
  margin: 0 auto;
  &:not(:first-child) {
    margin-top: 50px;
  }
`;

const RadioBox = styled.div`
  @media (max-width: ${(props) => props.theme.maxWidthMiddle}) {
    width: 58%;
  }
`;

const InputBox = styled.div`
  @media (max-width: ${(props) => props.theme.maxWidthMiddle}) {
    width: 85%;
  }
  @media (max-width: ${(props) => props.theme.maxWidthSmall}) {
    width: 70%;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  button {
    height: 45px;
    font-size: 14pt;
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`;

export default ({
  groupRoomId,
  action,
  checkbox,
  categoryArray,
  selectedDate,
  inputText,
  handleCheckbox,
  handleChange,
  handleDateChange,
  handleConfirm,
  handleAddContent,
  handlePlusContent,
  handleAddConfirm,
}) => (
  <Wrapper>
    <Helmet>
      <title>작성하기 | Melona</title>
    </Helmet>
    {action === "view" && (
      <React.Fragment>
        <ReplayLink to={`/groupRoomMe/${groupRoomId}`}>
          <Back />
        </ReplayLink>
        <Form>
          <HeaderIcon>
            <img alt="daughterBody" src={daughterBody} />
          </HeaderIcon>
          <form>
            <Section>
              <Text style={{ marginBottom: "34px" }}>
                도착일을 선택해 주세요.
              </Text>
              <DatePicker
                selectedDate={selectedDate}
                handleDateChange={handleDateChange}
              />
            </Section>
            <Section>
              <Text>지역을 선택해 주세요.</Text>
              <GoogleMaps route={`writeRecruitMeGroup/${groupRoomId}`} />
            </Section>
            <Section>
              <Text>카테고리를 체크 해주세요.</Text>
              <RadioBox>
                <ButtonRadio
                  checkbox={checkbox}
                  categoryArray={categoryArray}
                  handleCheckbox={handleCheckbox}
                />
              </RadioBox>
            </Section>
            <Section>
              <Text>선택한 카테고리의 내용을 적어주세요.</Text>
              <InputBox>
                <TextFields
                  type="outlineFull"
                  text={`선택한 카테고리: #${checkbox}`}
                  inputText={inputText}
                  handleChange={handleChange}
                />
              </InputBox>
            </Section>
          </form>
          <Buttons>
            <ButtonSquare onClick={handleAddContent} text="더쓰기" />
            <ButtonSquare onClick={handleConfirm} text="작성하기" />
          </Buttons>
        </Form>
      </React.Fragment>
    )}
    {action === "add" && (
      <Form>
        <HeaderIcon>
          <img alt="daughterBody" src={daughterBody} />
        </HeaderIcon>
        <form>
          <Section>
            <Text>카테고리를 체크 해주세요.</Text>
            <RadioBox>
              <ButtonRadio
                checkbox={checkbox}
                categoryArray={categoryArray}
                handleCheckbox={handleCheckbox}
              />
            </RadioBox>
          </Section>
          <Section>
            <Text>선택한 카테고리의 내용을 적어주세요.</Text>
            <InputBox>
              <TextFields
                type="outlineFull"
                text={`선택한 카테고리: #${checkbox}`}
                inputText={inputText}
                handleChange={handleChange}
              />
            </InputBox>
          </Section>
        </form>
        <Buttons>
          <ButtonSquare onClick={handlePlusContent} text="더쓰기" />
          <ButtonSquare onClick={handleAddConfirm} text="작성하기" />
        </Buttons>
      </Form>
    )}
    {action === "feed" && <Redirect to={`/groupRoomMe/${groupRoomId}`} />}
  </Wrapper>
);
