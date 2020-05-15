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
    groupRoomId,
    handleRefetch
}) => {
    if(term === undefined){
        return (
            <Wrapper>
                <BackRoute route={`groupRoomMe/${groupRoomId}`} />
            </Wrapper>
        );
    } else if (loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (data.searchMePostGroup.length === 0){
        return (
            <Wrapper>
                <BackRoute route={`groupRoomMe/${groupRoomId}`} />
            </Wrapper>
        );
    } else if (!loading && data && data.searchMePostGroup) {
        const { searchMePostGroup } = data;
        return (
            <Wrapper>
                <BackRoute 
                    type="icon"
                    route={`groupRoomMe/${groupRoomId}`}
                />
                <PostBox 
                    data={searchMePostGroup}
                    iconImg={daughter}
                    handleRefetch={handleRefetch}
                />
            </Wrapper>
        );
    }
};
