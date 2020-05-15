import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import ButtonSquare from "../../Components/ButtonSquare";

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = styled.div`
    ${props => props.theme.whiteBox}
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
    color: ${props => props.theme.blueColor};
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
                margin-bottom: 7px;
            }
        }
        button {
						width: 100%;
            margin-top: 10px;
        }
    }
`;

export default ({
    action, 
    setAction,
    userName,
    email,
    password,
    secret
}) => (
    <Wrapper>
        <Form>
            {action === "logIn" && (
                <React.Fragment>
                    <form> 
                        <Input placeholder={"이메일"} {...email} type="email" />
                        <Input placeholder={"비밀번호"} {...password} type="password" />
                        <ButtonSquare text={"로그인"} />
                    </form>
                </React.Fragment>
            )}
            {action === "signUp" && (
                <React.Fragment>
                    <form>
                        <Input placeholder={"이름"} {...userName} />
                        <Input placeholder={"이메일"} {...email} type="email" />
                        <Input placeholder={"비밀번호"} {...password} type="password" />
                        <ButtonSquare text={"가입하기"} />
                    </form>
                </React.Fragment>
            )}
            {action === "findPw" && (
                <React.Fragment>
                    <form>
                        <Input placeholder={"이메일"} {...email} type="email" />
                        <ButtonSquare text={"임시 비밀번호 받기"} />
                    </form>
                </React.Fragment>
            )}
            {action === "confirm" && (
                <React.Fragment>
                    <form>
                        <Input placeholder="임시 비밀번호를 붙여넣으세요." required {...secret} />
                        <ButtonSquare text={"로그인"} />
                    </form>
                </React.Fragment>
            )}
        </Form>
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
    </Wrapper>
);