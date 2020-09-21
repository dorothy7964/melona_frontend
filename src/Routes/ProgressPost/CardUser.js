import React from  "react";
import styled from "styled-components";
import ProgressApply from "../../Components/ProgressApply";
import BorderUserCard from "../../Components/BorderUserCard";
import ButtonSquare from "../../Components/ButtonSquare";

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
`;

const ApplyUserBox = styled.div`
    display: flex;
    margin: 30px 0;
    div {
        width: 50%;
    }
    button {
        margin-left: 20px;
        width: 50%;
        font-size: 15pt;
        font-weight: 500;
    }
`;

export default ({ 
    userName,
    categorys,
    anotherPage,
    handleProgressApply 
}) => {  
    return (
        <Wrapper>
            <ApplyUserBox>
                <BorderUserCard 
                    userName={userName}
                />
                {anotherPage === false && 
                    <ButtonSquare 
                        text="전체 진행상황 완료"
                        onClick={() => handleProgressApply(userName)}
                    />
                }
            </ApplyUserBox>
            {categorys.map(category => (
                <ProgressApply
                    key={category.id}
                    categoryId={category.id}
                    userName={userName}
                    anotherPage={anotherPage}
                />
            ))}
        </Wrapper>
    );
};