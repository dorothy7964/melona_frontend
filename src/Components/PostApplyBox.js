import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import styled from "styled-components";
import DraggableDialog from "./DraggableDialog";
import basic from "../Icons/melona_basic.png";
import waiting from "../Icons/melona_waiting.png";
import success from "../Icons/melona_success.png";
import failure from "../Icons/melona_failure.png";
import basicMe from "../Icons/req_basic.png";
import waitingMe from "../Icons/req_waiting.png";
import successMe from "../Icons/req_success.png";
import failureMe from "../Icons/req_failure.png";

const Box = styled.div`
    position: relative;
    display: flex;
    padding: 20px;
    width: 100%;
    height: 80px;
    font-weight: 600;
    border-right: ${props => props.theme.boxBorder};
    background-color: ${props => props.color};
    cursor: pointer;
    a {
        color: inherit;
        display: inherit;
    }
    img {
        width: 40px;
        margin-right: 5px;;
    }
`;

const HoverText = styled.div`
    position: relative;
    display: inline-block;
    &:hover {
        span {
            visibility: visible;
        }
    }
    span {
        visibility: hidden;
        width: 150px;;
        background-color: ${props => props.theme.lightGreyColor};
        color: ${props => props.theme.blackColor};
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        /* bottom: 128%; */
        left: 76%;
        margin-left: -46px;
    }
`;

const PostApplyBox = ({
    anotherPage,
    isApply,
    isApplyWait,
    isApplyReadCheck,
    postId,
    ToggleApply,
    handleDeleteContent,
    handleDeleteContentReq,
    color = "white"
}) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = (postId) => {
        handleClose();
        ToggleApply(postId);
        handleDeleteContent(postId);
        handleDeleteContentReq(postId);
        toast.success("신청을 취소합니다.");
    };
    const handleAbort = () => {
        handleClose();
        toast.success("신청을 취소하지 않습니다.");
    };

    if (isApply === false && isApplyReadCheck === false) {
        return (
            <Box>
                <Link to={`/writeApply/${postId}`}>
                    {!anotherPage
                        ?   <img alt="default" src={basic} />
                        :   <img alt="default" src={basicMe} />
                    }
                    <div>올 때 메로나</div>
                </Link>
            </Box>
        );
    } else if (isApply === true && isApplyWait === true ) {
        return (
            <Box>
                {!anotherPage
                    ?   <DraggableDialog 
                            postId={postId}
                            open={open}
                            iconImg={waiting}
                            iconText="대기 중..."
                            routeText="갈 때 사갈게"
                            mainText="신청을 취소 하시겠습니까?"
                            handleClose={handleClose}
                            handleClickOpen={handleClickOpen}
                            handleCancel={handleCancel}
                            handleAbort={handleAbort}

                        />
                    :   <DraggableDialog 
                            postId={postId}
                            open={open}
                            iconImg={waitingMe}
                            iconText="대기 중..."
                            routeText="올 때 사다줘"
                            mainText="신청을 취소 하시겠습니까?"
                            handleClose={handleClose}
                            handleClickOpen={handleClickOpen}
                            handleCancel={handleCancel}
                            handleAbort={handleAbort}

                        />
                }
            </Box>
        );
    } else if (isApply === true && isApplyReadCheck === true) {
        return (
            <Box>
                {!anotherPage
                    ?   <Link to={`/progressStap/${postId}`}>
                            <img alt="success" src={success} /> 
                            <HoverText>
                                신청 완료
                                <span>진행 상황 바로가기</span>
                            </HoverText>
                        </Link>
                    :   <Link to={`/progressStap/${postId}`}>
                            <img alt="success" src={successMe} /> 
                            <HoverText>
                                신청 완료
                                <span>진행 상황 바로가기</span>
                            </HoverText>
                        </Link>
                }
            </Box>
        );
    } else if (isApply === true && isApplyReadCheck === false) {
        return (
            <Box>
                {!anotherPage
                    ?   <img alt="failure" src={failure} /> 
                    :   <img alt="failure" src={failureMe} /> 
                }
                
                <div>신청 실패</div>
            </Box>
        );
    } 
};

PostApplyBox.propTypes = {
    isApply : PropTypes.bool,
    postId : PropTypes.string.isRequired,
    ToggleApply : PropTypes.func.isRequired,
    handleDeleteContent : PropTypes.func.isRequired,
    color : PropTypes.string,
};

export default PostApplyBox;


