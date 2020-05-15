import React from "react";
import styled from "styled-components";
import Loader from "../Loader";
import Steppers from "../Steppers";
import SteppersView from "../SteppersView";
import FatText from "../FatText";

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
    anotherPage,
    userName
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
            <React.Fragment>
                {categoryContentsSelf.map(contents => (
                    <div key={contents.id}>
                        <TextBox>
                            <FatText text={contents.category.text} />
                            <span>{contents.text}</span>
                        </TextBox>
                        {!anotherPage
                            ?   <StepBox>
                                    <SteppersView 
                                        activeStep={contents.confirmProgress}
                                    />
                                </StepBox>
                            :   <StepBox>
                                    {contents.contentsReqs.map(contentsReqs => (
                                        <div key={contentsReqs.id}>
                                            {userName === contentsReqs.user.userName &&
                                                <Steppers
                                                    contentId={contentsReqs.id}
                                                    stepNum={contentsReqs.confirmProgress}
                                                    anotherPage={true}
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



