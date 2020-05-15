import React, { useEffect } from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import { useQuery } from "react-apollo-hooks";
import { ALL_GROUPROOM } from "./ProfileQueries";
import Loader from "../../Components/Loader";
import RoomCard from "../../Components/RoomCard";

const Section = styled.div`
    @media (max-width: ${props => props.theme.maxWidthLarge}){
        padding: 0 20px;
        grid-template-columns: repeat(2,343px);
        grid-gap: 30px;
    }
    @media (max-width: ${props => props.theme.maxWidthMiddle}){
        grid-template-columns: repeat(2,261px);
        grid-gap: 25px;
    }
    @media (max-width: ${props => props.theme.maxWidthSmall}){
        grid-template-columns: repeat(2,218px);
        grid-gap: 18px;
    }
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2,280px);
`;

export default withRouter(({ history }) =>  {
    const { data, loading, refetch } = useQuery(ALL_GROUPROOM);

    const handleEnter = (groupRoomId) => {
        history.push(`/groupRoom/${groupRoomId}`);
    };

    useEffect(() => {
        refetch();
    }, []);

    if (loading === true){
        return (
            <Section>
                <Loader type="small" />
            </Section>
        );
    } else if (!loading && data && data.allGroupRoom) {
        const { allGroupRoom } = data;
        
        return (
            <Section>
                {allGroupRoom.map(groupRoom => (
                    <RoomCard  
                        key={groupRoom.id} 
                        groupRoomId={groupRoom.id}
                        roomName={groupRoom.roomName}
                        coverPhoto={groupRoom.coverPhoto}
                        founderUser={groupRoom.founderUser}
                        groupRoomMember={groupRoom.groupRoomMember[0]}
                        createdAt={groupRoom.createdAt}
                        handleEnter={handleEnter}

                    />
                ))}
            </Section>
        );
    }
});