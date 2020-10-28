import React from "react";
import styled from "styled-components";
import Loader from "../Loader";
import FatText from "../FatText";
import Steppers from "../Steppers";
import SteppersView from "../SteppersView";
import ButtonSquare from "../ButtonSquare";
import ProgressFile from "../ProgressFile";

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
`;

const TextBox = styled.div`
    font-size: 14pt;
    background-color: white;
    padding: 10px;
    border-radius: 100px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    span {
        &:not(:first-child) {
            margin-left: 10px;
            font-weight: 100;
        }
    }
`;

const StepBox = styled.div`
    margin-bottom: 50px;
`;

const ProgressFileBox = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    button {
        font-weight: 600;
    }
`;

export default ({ 
    data, 
    loading,
    changeId,
    userName,
    anotherPage,
    open,
    handleClickOpen,
    handleClose,
}) => {
    if (loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.categoryContents) {
        const { categoryContents } = data;
      
        return (
            <React.Fragment>
                {categoryContents.map(contents => (
                    <div key={contents.id}>
                        <TextBox>
                            <FatText text={contents.category.text} />
                            <span>{contents.text}</span>
                        </TextBox>
                        {!anotherPage
                            ?    <StepBox>
                                    <Steppers 
                                        contentId={contents.id}
                                        stepNum={contents.confirmProgress}
                                        confirmFile={contents.confirmFile}
                                        anotherPage={false}
                                    />
                                </StepBox>
                            :    <StepBox>
                                    {contents.contentsReqs.map(contentsReqs => (
                                        <div key={contentsReqs.id}>
                                            {userName === contentsReqs.user.userName &&
                                            <SteppersView 
                                                activeStep={contentsReqs.confirmProgress}
                                            />}
                                            {contentsReqs.confirmProgress !== 0 &&
                                            <ProgressFileBox>
                                                <ButtonSquare 
                                                    onClick={() => {handleClickOpen(contentsReqs.id)}}
                                                    text="인증 사진 보기"
                                                />
                                                <ProgressFile
                                                    open={open}
                                                    handleClose={handleClose}
                                                    changeId={changeId}
                                                    categorys={[{
                                                        id : contents.category.id,
                                                        userName: userName,
                                                        anotherPage: anotherPage
                                                    }]}
                                                    userName={userName}
                                                    anotherPage={anotherPage}
                                                />
                                            </ProgressFileBox>}
                                        </div>
                                    ))}
                                </StepBox>
                        }
                    </div>
                ))}
            </React.Fragment>
        );
    }
};



