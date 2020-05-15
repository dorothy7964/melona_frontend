import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { VIEW_CONTENTS } from "./ApplyContentsQueries";
import PlusText from "../PlusText";
import Loader from "../Loader";
import ApplyContentSwitchMe from "./ApplyContentSwitchMe";

const Container = styled.div`
    margin-top: 20px;
    span {
        font-weight: 600;
        font-size: 14pt;
        margin-bottom: 10px;
    }
`;

const ContentText = styled.div`
    margin-left: 20px;
    span {
        font-weight: 600;
        font-size: 14pt;
    }
`;

export default ({
    categoryId,
    categoryText,
    userName,
}) => { 
    const { data, loading } = useQuery(VIEW_CONTENTS, {
        variables: { categoryId, userName }
    });
        
    if (loading === true){
        return (
            <div>
               <Loader type="small" />
            </div>
        );
    } else if (!loading && data && data.viewContents) {
        const { viewContents } = data;
        
        return (
            <Container>
                <PlusText 
                    text={categoryText} 
                />
                {viewContents.map(contents => (
                    <ContentText key={contents.id}>
                        {contents.contentsReqs.map(contentsReqs => (
                            <div key={contentsReqs.id}>
                                {userName === contentsReqs.user.userName &&
                                    <ApplyContentSwitchMe 
                                        contentText={contents.text}
                                        contentReqId={contentsReqs.id}
                                        contentReqCheck={contentsReqs.confirmCheck}
                                    />
                                }
                            </div>
                        ))}
                    </ContentText>
                ))} 
            </Container>
        );
    }
};
