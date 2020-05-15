import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PlusText from "./PlusText";
import SeleteConfirmMe from "./SeleteConfirmMe";

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

const ContentsBox = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
        color: ${props => props.theme.lightGreenColor};
    }
`;

const CategoryBox = styled.div`
    margin-top: 20px;
`;

const WriteFormMe = ({ 
    category,
}) => {
    return (
        <Form>
            <form>
                <PlusText text={category.text} />
                <CategoryBox>
                    {category.contents.map(content => (
                        <ContentsBox key={content.id}>
                            <SeleteConfirmMe 
                                contentId={content.id} 
                                contentText={content.text}
                            />
                        </ContentsBox>
                    ))}
                </CategoryBox>
            </form>
        </Form>
    );
}

WriteFormMe.propTypes = {
    category : PropTypes.object.isRequired,
    ToggleApply : PropTypes.func,
};

export default WriteFormMe;