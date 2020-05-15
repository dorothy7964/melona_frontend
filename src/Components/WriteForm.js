import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PlusText from "./PlusText";
import TextFields from "./TextFields";
import ButtonSquare from "./ButtonSquare";

const Box = styled.div`
    ${props => props.theme.shadowBox}
    background-color:white;
    width: 100%;
`;

const Form = styled(Box)`
    position: relative;
    font-size: 13pt;
    padding: 40px;
    margin-bottom: 20px;
    form {
        &:not(:first-child) { 
            margin-top: 40px;
        }
    }
`;

const InputBox = styled.div`
    width: 100%;
    margin-top: 20px;
    label {
        font-size: 14pt;
    }
`;

const Buttons = styled.div`
    display: flex;
    width: 100%;
    button {
        margin: 0 auto;
        width: 50%;
        height: 45px;
        font-size: 14pt;
        margin-top: 50px;
    }
`;

const WriteForm = ({ 
    category,
    handleContent
}) => {
    const [buttonView, setButtonView] = useState(true);
    const handleButton = () => {
        setButtonView(false);
    };
    const [inputText, setInput] = useState("");
    const handleChange = e => {
        setInput(e.target.value);
    };

    return (
        <Form>
            <form>
                <PlusText text={category.text} />
                <InputBox>
                    <TextFields 
                        text={category.text} 
                        inputText={inputText}
                        handleChange={handleChange}
                    />
                </InputBox>
                <Buttons onClick={() => handleButton()}>
                    {buttonView  
                        ?   <ButtonSquare onClick={() => handleContent(category.id, inputText)} text="신청 하기" />
                        :   <ButtonSquare type="disable" text="신청 완료" />
                    }
                </Buttons>
            </form>
        </Form>
    );
}

WriteForm.propTypes = {
    category : PropTypes.object.isRequired,
    handleContent : PropTypes.func,
};

export default WriteForm;