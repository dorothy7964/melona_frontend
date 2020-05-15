import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import RouteApplyTab from "../../Components/RouteApplyTab";
import ApplyRes from "../../Components/ApplyRes";
import ApplyReq from "../../Components/ApplyReq";
import daddy from "../../Icons/daddy.png";

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
`;

const TabBox = styled.div`
    margin-bottom: 20px;
`;

const Continer = styled.div`
`;

export default ({
    tab,
    setTab,
    data, 
    loading, 
}) => {
    if (loading === true || !data){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if (!loading && data && data.me) {
        const { me: { userName } } = data;

        return (
            <Wrapper>
                <Helmet>
                    <title>{`${userName}님의 사갈게 | Melona`}</title>
                </Helmet>
                <TabBox>
                    <RouteApplyTab 
                        type="buy"
                        tab={tab}
                        setTab={setTab}
                        
                    />
                </TabBox>
                <Continer>
                    {tab === "req"
                        ?   <ApplyRes
                                tab="daddy"
                                iconImg={daddy}
                            />
                        :   <ApplyReq 
                                tab="daddy"
                                iconImg={daddy}
                            />
                    }
                </Continer>
            </Wrapper>
        );
    }
};