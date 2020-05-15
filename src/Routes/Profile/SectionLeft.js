import React, { useEffect } from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import { useQuery } from "react-apollo-hooks";
import { ALL_GROUPROOM } from "./ProfileQueries";
import Loader from "../../Components/Loader";
import FatText from "../../Components/FatText";
import RoomCard from "../../Components/RoomCard";
import togeter_grey from "../../Icons/togeter_grey.png";

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 40%;
    }
    span {
        margin-top: 20px;
        color: ${props => props.theme.darkGreyColor}
        font-size: 20pt;
        font-weight: 100;
    }
`;

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

        if (allGroupRoom.length === 0) {
            return (
                <IconBox>
                    <img alt="togeter_grey" src={togeter_grey} />
                    <FatText text="그룹을 추가 해주세요." />
                </IconBox>
            );
        } else {
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
    }
});