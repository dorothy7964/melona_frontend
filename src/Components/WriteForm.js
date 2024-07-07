import React, { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import styled from "styled-components";
import PlusText from "./PlusText";
import TextFields from "./TextFields";
import ButtonSquare from "./ButtonSquare";

const Box = styled.div`
  ${(props) => props.theme.shadowBox}
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

const WriteForm = ({ postId, category, handleContent }) => {
  const [disabled, setDisabled] = useState(false);
  const [buttonView, setButtonView] = useState(true);
  const [inputText, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (categoryId, inputText, postId) => {
    if (inputText === "") {
      return toast.error("작성 후 신청 해주세요.");
    }
    setButtonView(false);
    setDisabled(true);
    handleContent(categoryId, inputText, postId);
  };

  return (
    <Form>
      <form>
        <PlusText text={category.text} />
        <InputBox>
          <TextFields
            disabled={disabled}
            text={category.text}
            inputText={inputText}
            handleChange={handleChange}
          />
        </InputBox>
        <Buttons>
          {buttonView === true && (
            <ButtonSquare
              onClick={() => handleClick(category.id, inputText, postId)}
              text="신청 하기"
            />
          )}
          {buttonView === false && (
            <ButtonSquare type="defaultGrey" text="신청 완료" />
          )}
        </Buttons>
      </form>
    </Form>
  );
};

WriteForm.propTypes = {
  postId: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  handleContent: PropTypes.func.isRequired,
};

export default WriteForm;
