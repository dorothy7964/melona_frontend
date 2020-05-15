import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RouteTab from "../../Components/RouteTab";
import SearchCategoryTab from "../../Components/SearchCategoryTab";
import SearchTextFields from "../../Components/SearchTextFields";
import PostBox from "../../Components/PostBox";
import Loader from "../../Components/Loader";
import ButtonCircle from "../../Components/ButtonCircle";
import daddy from "../../Icons/daddy.png";

const Wrapper = styled.div`
    @media (max-width: ${props => props.theme.maxWidthLarge}){
        padding: 0 20px !important;
    }
    min-height: ${props => props.theme.minHeight};
    margin-top: 20px;
`;

const CategoryBox = styled.div`
    margin-bottom: 20px;
`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
`;

const SearchBox = styled.div`
    display: flex;
    flex: 1;
    margin-right: 100px;
    margin-left: 20px;
`;

export default ({ 
    data, 
    loading, 
    refetch,
    groupRoomId
}) => {
    if (loading === true || !data){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.seeBuyGroup) {
        const { seeBuyGroup } = data;
        return (
            <Wrapper>
                <RouteTab 
                    type="group" 
                    tabPage="daddy" 
                    groupRoomId={groupRoomId} 
                />
                <CategoryBox>
                    <SearchCategoryTab searchRoute={`searchGroup/${groupRoomId}`} />
                </CategoryBox>
                <Section>
                    <SearchBox>
                        <SearchTextFields searchRoute={`searchGroup/${groupRoomId}`} />
                    </SearchBox>
                    <Link to={`/writeRecruitGroup/${groupRoomId}`}>
                        <ButtonCircle type="plus" />
                    </Link>
                </Section>
                <PostBox 
                    data={seeBuyGroup}
                    iconImg={daddy}
                    refetch={refetch}
                />
            </Wrapper>
        );
    }
};