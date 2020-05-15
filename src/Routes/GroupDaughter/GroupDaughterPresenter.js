import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RouteTab from "../../Components/RouteTab";
import SearchCategoryTab from "../../Components/SearchCategoryTab";
import SearchTextFields from "../../Components/SearchTextFields";
import PostBox from "../../Components/PostBox";
import Loader from "../../Components/Loader";
import ButtonCircle from "../../Components/ButtonCircle";
import daughter from "../../Icons/daughter.png";

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
    if (loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.seeBuyMeGroup) {
        const { seeBuyMeGroup } = data;
        return (
            <Wrapper>
                <RouteTab 
                    type="group" 
                    tabPage="daughter" 
                    groupRoomId={groupRoomId} 
                />
                <CategoryBox>
                    <SearchCategoryTab searchRoute={`searchMeGroup/${groupRoomId}`} />
                </CategoryBox>
                <Section>
                    <SearchBox>
                        <SearchTextFields searchRoute={`searchMeGroup/${groupRoomId}`} />
                    </SearchBox>
                    <Link to={`/writeRecruitMeGroup/${groupRoomId}`}>
                        <ButtonCircle type="plus" />
                    </Link>
                </Section>
                <PostBox 
                    data={seeBuyMeGroup}
                    iconImg={daughter}
                    refetch={refetch}
                />
            </Wrapper>
        );
    }
};