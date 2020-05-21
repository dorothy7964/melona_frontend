import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import InfiniteScroll from "react-infinite-scroll-component";
import RouteTab from "../../Components/RouteTab";
import SearchCategoryTab from "../../Components/SearchCategoryTab";
import SearchTextFields from "../../Components/SearchTextFields";
import PostBox from "../../Components/PostBox";
import Loader from "../../Components/Loader";
import ButtonCircle from "../../Components/ButtonCircle";
import daughter from "../../Icons/daughter.png";

const ScrollableDiv = styled(InfiniteScroll)`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 스크롤 숨기기 */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`
const Spinners = css`
    display: block;
    margin: 0 auto;
    margin-top: 20px;
`;

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
    margin-bottom: 30px;
`;

const SearchBox = styled.div`
    display: flex;
    flex: 1;
    margin-right: 100px;
    margin-left: 20px;
`;

export default ({ 
    data, 
    hasMore,
    onLoadMore,
    refetch,
}) => {
    if (!data){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (data && data.seeBuyMe) {
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
                <ScrollableDiv
                    dataLength={seeBuyMe.length}
                    next={onLoadMore}
                    hasMore={hasMore}
                    loader={<ClipLoader
                        css={Spinners}
                        size={35}
                        color={"#c7c7c7"}
                    />}
                >
                    <PostBox 
                        data={seeBuyMe}
                        iconImg={daughter}
                        refetch={refetch}
                    />
                </ScrollableDiv>
            </Wrapper>
        );
    }
};