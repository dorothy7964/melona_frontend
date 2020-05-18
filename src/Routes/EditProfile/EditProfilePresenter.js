import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/core";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import Input from "../../Components/Input";
import ButtonSquare from "../../Components/ButtonSquare";
import { PlusOutline } from "../../Components/Icons";
import useInput from "@am-hooks/use-input";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    span {
        margin-left: 15px;
        font-size: 23pt;
        width: 346px;
        word-wrap: break-word;
    }
`;

const AvatarBox = styled.div`
    position: relative;
`;

const ProfileUpload = styled.label`
    @media (max-width: ${props => props.theme.maxWidthSmall}){
        display: none;
    }
    position: absolute;
    right: -8px;
    bottom: 2px;
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
    svg {
        color: ${props => props.theme.darkGreyColor};
    }
`;

const override = css`
    position: absolute;
    top: 45%;
    left: 47%;
`;

const HiddenInput = styled.input`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
`;

const Text = styled.div``;

const Box = styled.div`
    ${props => props.theme.whiteBox}
    border-radius:0px;
    width: 100%;
    max-width: 600px;
`;

const Form = styled(Box)`
    padding: 30px 60px;
    form {
        width: 100%;
        div {     
            font-size: 14px;
            font-weight: 600;
            margin-left: 10px;
            margin-bottom: 10px;
        }
        input {
            width: 100%;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
        button {
            display: flex;
            margin: 0 auto;
            height: 45px;
            font-size: 14pt;
            margin-top: 50px;
        }
    }
`;

export default ({ 
    data,
    loading,
    fileLoading,
    handleConfirm,
    handleChange
}) => {
    if (loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.getUser){
        const { getUser } = data;
        const userName = useInput(`${getUser.userName}`);
        const email = useInput(`${getUser.email}`);
        const password = useInput("");
        const passwordConfirm = useInput("");

        return (
            <Wrapper>
                <Helmet>
                    <title>프로필 편집 | Melona</title>
                </Helmet>
                <Form>
                    <Header>
                        <AvatarBox>
                            <Avatar size="lg" url={getUser.avatar} />
                            <ProfileUpload htmlFor="fileElem">
                                <PlusOutline size="large" />
                            </ProfileUpload>
                            {fileLoading && 
                                <FadeLoader
                                    css={override}
                                    size={35}
                                    color={"#9ccc65"}
                                />
                            }
                            <HiddenInput 
                                type="file" 
                                id="fileElem" 
                                accept="image/*" 
                                onChange={handleChange} 
                                multiple
                            />
                        </AvatarBox>
                        <FatText text={getUser.userName} />
                    </Header>
                    <form>
                        <Text>userName</Text>
                        <Input placeholder={"userName"} {...userName} />
                        <Text>email</Text>
                        <Input placeholder={"email"} {...email} type="email" />


                        <Text>password</Text>
                        <Input placeholder={"password"} {...password} type="password" />
                        <Text>password Confirm</Text>
                        <Input placeholder={"passwordConfirm"} {...passwordConfirm} type="password" />
                        {   password.value === "" && passwordConfirm.value === "" 
                                ?   ""
                                :   password.value !== passwordConfirm.value
                                        ?   <Text style={{ color: "#ED4956" }}>비밀번호가 일치하지 않습니다.</Text>
                                        :   <Text style={{ color: "#b9dd39" }}>비밀번호가 일치 합니다.</Text>
                        }
                        <ButtonSquare 
                            onClick={
                                () => handleConfirm(
                                    userName.value,
                                    email.value,
                                    password.value,
                                    passwordConfirm.value,
                                )
                            } 
                            text="프로필 편집하기" 
                        />
                    </form>
                </Form>
            </Wrapper>
        );
    };
};