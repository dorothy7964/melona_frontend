import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import RouteApplyTab from "../../Components/RouteApplyTab";
import ApplyResGroup from "../../Components/ApplyResGroup";
import ApplyReqGroup from "../../Components/ApplyReqGroup";
import daddy from "../../Icons/daddy.png";
import { Back } from "../../Components/Icons";

const Wrapper = styled.div`
  min-height: ${(props) => props.theme.minHeight};
`;

const ReplayLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  svg {
    color: ${(props) => props.theme.darkGreyColor};
    font-size: 35pt;
  }
`;

const TabBox = styled.div`
  margin-bottom: 20px;
`;

const Continer = styled.div``;

export default ({ tab, setTab, data, loading, groupRoomId }) => {
  if (loading === true || !data) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.me) {
    const {
      me: { userName },
    } = data;

    return (
      <Wrapper>
        <Helmet>
          <title>{`${userName}님의 사갈게 | Melona`}</title>
        </Helmet>
        <ReplayLink to={`/groupRoom/${groupRoomId}`}>
          <Back />
        </ReplayLink>
        <TabBox>
          <RouteApplyTab type="buy" tab={tab} setTab={setTab} />
        </TabBox>
        <Continer>
          {tab === "req" ? (
            <ApplyResGroup
              tab="daddy"
              iconImg={daddy}
              groupRoomId={groupRoomId}
            />
          ) : (
            <ApplyReqGroup
              tab="daddy"
              iconImg={daddy}
              groupRoomId={groupRoomId}
            />
          )}
        </Continer>
      </Wrapper>
    );
  }
};
