import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CheckboxArr from "../../Components/CheckboxArr";
import GoogleMaps from "../../Components/GoogleMaps";
import DatePicker from "../../Components/DatePicker";
import ButtonSquare from "../../Components/ButtonSquare";
import daddyBody from "../../Icons/daddy-body.png";
import { Back } from "../../Components/Icons";

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
`;

const ReplayLink = styled(Link)`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    svg {
        color: ${props => props.theme.darkGreyColor};
        font-size: 35pt;
    }
`;

const Box = styled.div`
    ${props => props.theme.shadowBox}
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
    color: ${props => props.theme.darkGreyColor}
`;

const Section = styled.div`
    width: 600px;
    margin: 0 auto;
    &:not(:first-child) {
        margin-top: 50px;
    }
    &:nth-child(2) {
        div {
            
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    width: 100%;
    button {
        margin: 0 auto;
        height: 45px;
        font-size: 14pt;
        margin-top: 50px;
    }
`;

export default ({ 
    action,
    checkbox,
    categoryArray,
    handleCheckbox,
    selectedDate,
    handleDateChange,
    handleConfirm,
}) => (
    <Wrapper>
        <Helmet>
            <title>작성하기 | Melona</title>
        </Helmet>
        {action === "view" && (
            <React.Fragment>
                <ReplayLink to="/daddy">
                    <Back />
                </ReplayLink>
                <Form>
                    <HeaderIcon>
                        <img alt="daddyBody" src={daddyBody} />
                    </HeaderIcon>
                    <form>
                        <Section>
                            <Text>가능한 카테고리를 체크 해주세요.</Text>
                            <CheckboxArr
                                checkbox={checkbox}
                                categoryArray={categoryArray}
                                handleCheckbox={handleCheckbox} 
                            />
                        </Section>
                        <Section>
                            <Text>지역을 선택해 주세요.</Text>
                            <GoogleMaps 
                                route="writeRecruit"
                            />
                        </Section>
                        <Section>
                            <Text style={{ marginBottom: "34px" }}>도착일을 선택해 주세요.</Text>
                            <DatePicker 
                                selectedDate={selectedDate}
                                handleDateChange={handleDateChange}
                            />
                        </Section>
                    </form>
                    <Buttons>
                        <ButtonSquare onClick={handleConfirm} text="작성 하기" />
                    </Buttons>
                </Form>
            </React.Fragment>
        )}
        {action === "feed" && (
            <Redirect to="/daddy" />
        )}  
    </Wrapper>
);
