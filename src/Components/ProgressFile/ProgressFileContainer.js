import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { CATEGORY_CONTENTS } from "./ProgressFileQueries";
import Loader from "../Loader";
import confirmFileText from "../../Icons/confirmFileText.png";

const Shadow = styled.div`
    ${props => props.theme.shadowBox}
    background-color: ${props => props.darkGreyColor};
`;

const LoaderBox = styled.div`
    div {
        img {
            width: 15px;
        }
    }
`;

const Wrapper = styled(Shadow)`
    display: flex;
    margin-bottom: 20px;
    border: 1px solid ${props => props.theme.lightGreyColor};
    border-radius: 17px;
    overflow: hidden;
    height: 163px;
`;

const ConfirmFileBox = styled.div`
    img {
        width: 250px;
        height: 100%;
        background-size: cover;
    }
`;

const TextContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 245px;
    padding: 17px 15px;
`;

const CategoryBox = styled.span`
    font-size: 14pt;
    font-weight: 600;
    color: ${props => props.theme.darkGreyColor};
    margin-bottom: 3px;
`;

const ContentBox = styled.span`
    font-size: 19pt;
    font-weight: 100;
    height: 200px;
    overflow: auto;
`;

export default ({ 
    categoryId,
    userName,
    anotherPage,
}) => {
    const { data, loading, refetch } = useQuery(CATEGORY_CONTENTS, {
        variables: { 
            categoryId,
            userName,
            anotherPage
        }
    });

    useEffect(() => {
        refetch();
    }, []);

    if (loading === true){
        return (
            <LoaderBox>
                <Loader size="small" /> 
            </LoaderBox>
        );
    } else if (!loading && data && data.categoryContents) {
        const { categoryContents } = data;
        
        return (
            categoryContents.map(contents => (
                <Wrapper key={contents.id}>
                    
                    {contents.confirmFile !== "none"
                        ?   !anotherPage
                                ?   <ConfirmFileBox>
                                        <img alt="인증 사진" src={contents.confirmFile} />
                                    </ConfirmFileBox>
                                :   contents.contentsReqs.map(contentsReqs => (
                                        <ConfirmFileBox
                                            key={contentsReqs.id}
                                        >
                                            <img alt="인증 사진" src={contentsReqs.confirmFile} />
                                        </ConfirmFileBox>
                                    ))
                        :   <ConfirmFileBox>
                                <img alt="인증 사진" src={confirmFileText} />
                            </ConfirmFileBox>
                    }
                    <TextContainer>
                        <CategoryBox>
                            #{contents.category.text}
                        </CategoryBox>
                        <ContentBox>
                            {contents.text}
                        </ContentBox>
                    </TextContainer>
                </Wrapper>
            ))
        );
    }
};
