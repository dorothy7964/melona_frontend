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

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
`;

const CategoryBox = styled.div`
    margin-top: 20px;
`;

const WriteApplyPresenter = ({ 
    action,
    data,
    loading,
    postId, 
    ToggleApply ,
    handleContent,
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
            } 
        } = data;
        
        return (
            <Wrapper>
                <Helmet>
                    <title>신청하기 | Melona</title>
                </Helmet>
                {action === "view" && (
                    <React.Fragment>
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
                        <ButtonConfirm onClick={() => ToggleApply(postId)} />
                    </React.Fragment>
                )}
                {action === "feed" && (
                    !anotherPage
                        ?   <Redirect to="/daddy" />
                        :   <Redirect to="/daughter" />
                    
                )}  
            </Wrapper>
        );
    }
};

WriteApplyPresenter.propTypes = {
    action : PropTypes.string.isRequired,
    data : PropTypes.object,
    loading : PropTypes.bool.isRequired,
    postId : PropTypes.string.isRequired,
    ToggleApply : PropTypes.func.isRequired,
    handleContent : PropTypes.func.isRequired,
};

export default WriteApplyPresenter;