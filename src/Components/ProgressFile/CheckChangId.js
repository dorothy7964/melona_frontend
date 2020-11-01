import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { CATEGORY_CONTENTS } from "./ProgressFileQueries";
import Loader from "../Loader";
import ProgressFileContainer from "./ProgressFileContainer";

const LoaderBox = styled.div`
    div {
        img {
            width: 15px;
        }
    }
`;

export default ({ 
    categoryId,
    userName,
    anotherPage,
}) => {
    const { data, loading } = useQuery(CATEGORY_CONTENTS, {
        variables: { 
            categoryId,
            userName,
            anotherPage
        }
    });

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
                <React.Fragment key={contents.id}>
                    {contents.contentsReqs.map(contentsReqs => (
                        contentsReqs.user.userName === userName &&
                            <ProgressFileContainer 
                                key={contentsReqs.id}
                                changeId={contentsReqs.id}
                                categoryId={categoryId}
                                userName={userName}
                                anotherPage={anotherPage}
                            />
                    ))}
                </React.Fragment>
            ))
        );
    }
};