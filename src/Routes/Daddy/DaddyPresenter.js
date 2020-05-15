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
    refetch
}) => {
    if (loading === true || !data){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.seeBuy) {
        const { seeBuy } = data;
        return (
            <Wrapper>
                <Helmet>
                    <title>갈 때 사갈게 | Melona</title>
                </Helmet>
                <RouteTab tabPage="daddy" />
                <CategoryBox>
                    <SearchCategoryTab searchRoute="search" />
                </CategoryBox>
                <Section>
                    <SearchBox>
                        <SearchTextFields searchRoute="search" />
                    </SearchBox>
                    <Link to={`/writeRecruit`}>
                        <ButtonCircle type="plus" />
                    </Link>
                </Section>
                <PostBox 
                    data={seeBuy}
                    iconImg={daddy}
                    refetch={refetch}
                />
            </Wrapper>
        );
    }
};