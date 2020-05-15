import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import TimeIapse from "./TimeIapse";
import { ArrowRight } from "./Icons";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Container = styled.div`
    flex: 1;
    overflow:hidden;
    word-wrap:break-word;
    padding: 0 30px;
`;

const SwitchBox = styled.button`
    border: 0;
    background-color: inherit;
    cursor: pointer;
    outline: none;
    span {
        color: ${props => props.theme.darkGreyColor}
    }
`;

const Comments = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12pt;
    &:not(:first-child) {
        margin-top: 10px;
    }
`;

const IconBox = styled.div`
    cursor: pointer;
    margin-right: 5px;
    svg {
        color: ${props => props.theme.darkGreyColor};
    }
`;

const UserBox = styled.div`
    display: flex;
    flex-direction: row;
    span {
        display: flex;
        align-items: center;
        margin: 0 10px;
    }
`;

const TextBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.theme.lightGreyColor};
    padding: 7px 10px;
    border-radius: 5px;
    &:hover {
        div {
            visibility: visible;
        }
    }
    div {
        visibility: hidden;
        margin-left: 10px;
    }
`;

const TimeForm = styled.div`
    margin-left: 15px;
    color: ${props => props.theme.darkGreyColor};
`;

export default ({ comment, handleReDelete }) => {
    // switches
    const [switchState, setSwitch] = useState(false);
    const handleSwitch = () => {
        setSwitch(!switchState );
    };

    return (
        <React.Fragment>
            {comment.reCommentCount === 0
                ?   ""
                :   <Container>
                        <SwitchBox onClick={handleSwitch}>
                            <FatText text="댓글 더보기" />
                        </SwitchBox>
                        {comment.recomments.map(recomment => (
                            switchState && 
                                <Comments key={recomment.id}>
                                    <IconBox>
                                        <ArrowRight />
                                    </IconBox>
                                    <UserBox>
                                        <Avatar size="sm" url={recomment.user.avatar} />
                                        <FatText 
                                            text={recomment.user.userName}   
                                            color={`
                                            ${recomment.user.isSelf 
                                                ? "#9ccc65" : "black"
                                            }`} 
                                        />
                                    </UserBox>
                                    <TextBox>
                                        {recomment.text}
                                        {recomment.user.isSelf && 
                                            <IconBox onClick={() => handleReDelete(recomment.id)}>
                                                <HighlightOffIcon  />
                                            </IconBox>
                                        }
                                    </TextBox>
                                    <TimeForm>
                                        <TimeIapse createAt={comment.createdAt} />
                                    </TimeForm>
                                </Comments>
                            
                        ))}
                    </Container>
            }
        </React.Fragment>
    );
};