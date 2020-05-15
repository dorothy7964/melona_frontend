import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import font_logo from "../../Icons/font_logo.png";
import togeter from "../../Icons/togeter.png";

const Wrapper = styled.div`
    @media (max-width: ${props => props.theme.maxWidthSmall}){
        flex-direction: column;
        position: relative;
        bottom: 7em;
    }
    min-height: 50vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 13em;
`;

const Logo = styled.div`
    @media (max-width: ${props => props.theme.maxWidthSmall}){
        margin-right: 0;
    }
    display:flex;
    flex-direction: column;
    margin-right: 50px;
    img {
        &:not(:last-child) { 
            margin-bottom: 15px;
        }
        width: 250px;
    }
`;

const WrapperBox = styled.div`
    display: flex;
    flex-direction: column
`;

const Box = styled.div`
    ${props => props.theme.shadowBox}
    background-color:white;
    border-radius:0px;
    width: 100%;
    max-width: 350px;
`;

const StateChanger = styled(Box)`
    padding: 20px;
    div {
        &:not(:last-child) { 
            margin-bottom: 20px;
        }
    }
`;

const Link = styled.span`
    font-weight: 600;
    cursor: pointer;
`;

const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form {
        width: 100%;
        input {
            width: 100%;
            &:not(:last-child) { 
                margin-bottom: 20px;
            }
        }
        button {
            margin-top: 20px;
        }
    }
`;

export default ({
    action, 
    setAction,
    userName,
    email,
    password,
    confirmPw,
    onSubmit
}) => (
    <Wrapper>
        <Logo>
            <img alt="font_logo" src={font_logo} />
            <img alt="togeter" src={togeter} />
        </Logo>
        <WrapperBox>
            <Form>
                {action === "logIn" && (
                    <React.Fragment>
                        <Helmet>
                            <title>Log In | Melona</title>
                        </Helmet>
                        <form onSubmit={onSubmit}> 
                            <Input placeholder={"이메일"} {...email} type="email" />
                            <Input placeholder={"비밀번호"} {...password} type="password" autocomplete="off" /> 
                            <Button text={"로그인"} />
                        </form>
                    </React.Fragment>
                )}
                {action === "signUp" && (
                    <React.Fragment>
                        <Helmet>
                            <title>Sign up | Melona</title>
                        </Helmet>
                        <form onSubmit={onSubmit}> 
                            <Input placeholder={"이름"} {...userName} />
                            <Input placeholder={"이메일"} {...email} type="email" />
                            <Input placeholder={"비밀번호"} {...password} type="password" autocomplete="off" /> 
                            <Input placeholder={"비밀번호 확인"} {...confirmPw} type="password" autocomplete="off" /> 
                            <Button text={"가입하기"} />
                        </form>
                    </React.Fragment>
                )}
                {action === "findPw" && (
                    <React.Fragment>
                        <Helmet>
                            <title>Find password | Melona</title>
                        </Helmet>
                        <form onSubmit={onSubmit}> 
                            <Input placeholder={"이메일"} {...email} type="email" />
                            <Button text={"임시 비밀번호 받기"} />
                        </form>
                    </React.Fragment>
                )}
                {action === "confirm" && (
                    <React.Fragment>
                        <Helmet>
                            <title>Confirm password | Melona</title>
                        </Helmet>
                        <form onSubmit={onSubmit}> 
                            <Input placeholder="임시 비밀번호를 붙여넣으세요." required {...password} />
                            <Button text={"로그인"} />
                        </form>
                    </React.Fragment>
                )}
            </Form>
            {action !== "confirm" && (
                <StateChanger>
                    {action === "logIn"? (
                        <React.Fragment>
                            <div>
                                계정이 없으신가요?{" "}
                                <Link onClick={() => setAction("signUp")}>가입하기</Link><br/>
                            </div>
                            <div>
                                비밀번호를 잊으셨나요?{" "}
                                <Link onClick={() => setAction("findPw")}>비밀번호 찾기</Link>
                            </div>
                        </React.Fragment>
                        ) : (
                        <React.Fragment>
                            계정이 있으신가요?{" "}
                            <Link onClick={() => setAction("logIn")}>로그인</Link>
                        </React.Fragment>
                    )}
                </StateChanger>
            )}
        </WrapperBox>
    </Wrapper>
);