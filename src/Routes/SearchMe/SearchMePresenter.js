import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import BackRoute from "../../Components/BackRoute";
import PostBox from "../../Components/PostBox";
import daughter from "../../Icons/daughter.png";

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
`;

export default ({ 
    data, 
    loading, 
    term,
    handleRefetch
}) => {
    if(term === undefined){
        return (
            <Wrapper>
                <BackRoute route="daughter" />
            </Wrapper>
        );
    } else if (loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (data.searchMePost.length === 0){
        return (
            <Wrapper>
                <BackRoute route="daughter" />
            </Wrapper>
        );
    } else if (!loading && data && data.searchMePost) {
        const { searchMePost } = data;
        return (
            <Wrapper>
                <BackRoute 
                    type="icon"
                    route="daughter"  
                />
                <PostBox 
                    data={searchMePost}
                    iconImg={daughter}
                    handleRefetch={handleRefetch}
                />
            </Wrapper>
        );
    }
};
