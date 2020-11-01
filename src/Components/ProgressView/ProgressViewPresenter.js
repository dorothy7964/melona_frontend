import React from "react";
import styled from "styled-components";
import Loader from "../Loader";
import Steppers from "../Steppers";
import SteppersView from "../SteppersView";
import FatText from "../FatText";
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
    margin-top: 30px;
    justify-content: center;
    button {
        font-weight: 600;
    }
`;

export default ({ 
    data, 
    loading,
    changeId,
    anotherPage,
    userName,
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
    } else if (!loading && data && data.categoryContentsSelf) {
        const { categoryContentsSelf } = data;
        
        return (
            categoryContentsSelf.map(contents => (
                <React.Fragment key={contents.id}>
                    {!anotherPage 
                        ?   <TextBox>
                                <FatText text={contents.category.text} />
                                <span>{contents.text}</span>
                            </TextBox>
                        :   contents.contentsReqs.map(contentsReqs => (
                                userName === contentsReqs.user.userName &&
                                contentsReqs.confirmCheck && 
                                <TextBox>
                                    <FatText text={contents.category.text} />
                                    <span>{contents.text}</span>
                                </TextBox>
                            ))
                    }
                    {!anotherPage
                        ?   <StepBox>
                                <SteppersView 
                                    activeStep={contents.confirmProgress}
                                />
                                {contents.confirmProgress !== 0 &&
                                    <ProgressFileBox>
                                        <ButtonSquare 
                                            onClick={handleClickOpen}
                                            text="인증 사진 보기"
                                        />
                                        <ProgressFile
                                            open={open}
                                            handleClose={handleClose}
                                            categorys={[{
                                                id : contents.category.id,
                                                userName: userName,
                                                anotherPage: anotherPage
                                            }]}
                                            userName={userName}
                                            anotherPage={anotherPage}
                                            
                                        />
                                    </ProgressFileBox>
                                }
                            </StepBox>
                        :   <StepBox>
                                {contents.contentsReqs.map(contentsReqs => (
                                    contentsReqs.confirmCheck &&
                                    userName === contentsReqs.user.userName &&
                                    <React.Fragment key={contentsReqs.id}>
                                        <Steppers
                                            contentId={contentsReqs.id}
                                            stepNum={contentsReqs.confirmProgress}
                                            confirmFile={contentsReqs.confirmFile}
                                            anotherPage={anotherPage}
                                        />
                                        {contentsReqs.confirmProgress === 3 &&
                                            <ProgressFileBox>
                                                <ButtonSquare 
                                                    onClick={() => handleClickOpen(contentsReqs.id)}
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
                                            </ProgressFileBox>
                                        }
                                    </React.Fragment>
                                ))}
                            </StepBox>
                    }
                </React.Fragment>
            ))
        );
    }
};



