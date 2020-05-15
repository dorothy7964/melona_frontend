import React from "react";
import { Helmet } from "react-helmet";
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
    refetch
}) => {
    if (loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.seeBuyMe) {
        const { seeBuyMe } = data;
        return (
            <Wrapper>
                <Helmet>
                    <title>올 때 사다줘 | Melona</title>
                </Helmet>
                <RouteTab tabPage="daughter" />
                <CategoryBox>
                    <SearchCategoryTab searchRoute="searchMe" />
                </CategoryBox>
                <Section>
                    <SearchBox>
                        <SearchTextFields searchRoute="searchMe" />
                    </SearchBox>
                    <Link to={`/writeRecruitMe`}>
                        <ButtonCircle type="plus" />
                    </Link>
                </Section>
                <PostBox 
                    data={seeBuyMe}
                    iconImg={daughter}
                    refetch={refetch}
                />
            </Wrapper>
        );
    }
};