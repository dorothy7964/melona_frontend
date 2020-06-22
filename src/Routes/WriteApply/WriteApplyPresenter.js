import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import ButtonConfirm from "../../Components/ButtonConfirm";
import WriteForm from "../../Components/WriteForm";
import WriteFormMe from "../../Components/WriteFormMe";
import DraggableDialog from "../../Components/DraggableDialog";

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
`;

const CategoryBox = styled.div`
    margin-top: 20px;
`;

const WriteApplyPresenter = ({ 
    open,
    action,
    data,
    loading,
    postId, 
    handleComplete,
    handleContent,
    handleClose,
    handleClickOpen,
    handleCancel,
    handleAbort,
}) => {
    if (loading === true) {
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if(!loading && data && data.seeBuyOne) {
        const { 
            seeBuyOne: { 
                user: {
                    avatar,
                    userName
                },
                applys,
                applysCount,
                location,
                lastDate,
                categorys,
                anotherPage,
                groupRoom
            } 
        } = data;
        
        return (
            <Wrapper>
                <Helmet>
                    <title>신청하기 | Melona</title>
                </Helmet>
                {action === "view" && (
                    <React.Fragment>
                        <DraggableDialog 
                            type="backButton"
                            postId={postId}
                            open={open}
                            routeText="뒤로 가기"
                            mainText="신청 하신 내용이 초기화 됩니다."
                            handleClose={handleClose}
                            handleClickOpen={handleClickOpen}
                            handleCancel={handleCancel}
                            handleAbort={handleAbort}

                        />
                        <UserCard 
                            bgColor="#eee"
                            avatar={avatar}
                            userName={userName}
                            applys={applys}
                            applysCount={applysCount}
                            location={location}
                            lastDate={lastDate}
                        />
                        <CategoryBox>
                            {categorys &&
                                categorys.map(category => (
                                    !anotherPage
                                        ?   <WriteForm  
                                                key={category.id}
                                                postId={postId}
                                                category={category}
                                                handleContent={handleContent}
                                            />
                                        :   <WriteFormMe  
                                                key={category.id}
                                                postId={postId}
                                                category={category}
                                            />
                                    
                            ))}
                        </CategoryBox>
                        <ButtonConfirm onClick={handleComplete} />
                    </React.Fragment>
                )}
                {action === "feed" && (
                    groupRoom === "none" 
                        ?   !anotherPage
                              ?   <Redirect to="/daddy" />
                              :   <Redirect to="/daughter" />
                        :   !anotherPage
                              ?   <Redirect to={`/groupRoom/${groupRoom}`} />
                              :   <Redirect to={`/groupRoomMe/${groupRoom}`} />
                )}  
            </Wrapper>
        );
    }
};

WriteApplyPresenter.propTypes = {
    open : PropTypes.bool.isRequired,
    action : PropTypes.string.isRequired,
    data : PropTypes.object,
    loading : PropTypes.bool.isRequired,
    postId : PropTypes.string.isRequired,
    handleComplete : PropTypes.func.isRequired,
    handleContent : PropTypes.func.isRequired,
    handleRemove : PropTypes.func.isRequired,
    handleClose : PropTypes.func.isRequired,
    handleClickOpen : PropTypes.func.isRequired,
    handleCancel : PropTypes.func.isRequired,
    handleAbort : PropTypes.func.isRequired,
};

export default WriteApplyPresenter;