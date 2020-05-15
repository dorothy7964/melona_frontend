import React from "react";
import styled from "styled-components";
import Loader from "../Loader";
import FatText from "../FatText";
import Steppers from "../Steppers";
import SteppersView from "../SteppersView";

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

export default ({ 
    data, 
    loading,
    userName,
    anotherPage 
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
                                        anotherPage={false}
                                    />
                                </StepBox>
                            :    <StepBox>
                                    {contents.contentsReqs.map(contentsReqs => (
                                        <div key={contentsReqs.id}>
                                            {userName === contentsReqs.user.userName &&
                                                <SteppersView 
                                                    activeStep={contentsReqs.confirmProgress}
                                                />
                                            }
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



