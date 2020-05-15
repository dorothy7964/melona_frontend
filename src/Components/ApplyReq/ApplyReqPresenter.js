import React from "react";
import styled from "styled-components";
import Loader from "../Loader";
import PostBox from "../PostBox"

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
`;

export default ({ tab, iconImg, data, loading, refetch }) => {
    if (loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.togglePostedReq) {
        const { togglePostedReq } = data;

        return (
            <PostBox 
                data={togglePostedReq}
                iconImg={iconImg}
                refetch={refetch}
            />
        )
    }
}