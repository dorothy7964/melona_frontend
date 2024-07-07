import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import daddyReq from "../Icons/daddy_request.png";
import daddyReqGrey from "../Icons/daddy_request_grey.png";
import daddyReqGreen from "../Icons/daddy_request_green.png";
import daddyRes from "../Icons/daddy_response.png";
import daddyResGrey from "../Icons/daddy_response_grey.png";
import daddyResGreen from "../Icons/daddy_response_green.png";
import daughterReq from "../Icons/daughter_request.png";
import daughterReqGrey from "../Icons/daughter_request_grey.png";
import daughterReqGreen from "../Icons/daughter_request_green.png";
import daughterRes from "../Icons/daughter_response.png";
import daughterResGrey from "../Icons/daughter_response_grey.png";
import daughterResGreen from "../Icons/daughter_response_green.png";

const TabBox = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const TabImg = styled.button`
  width: 250px;
  height: 117px;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  border: 0;
  background-color: inherit;
  outline: none;
  &:hover {
    background-image: url(${(props) => props.hoverImg});
  }
`;

const RouteApplyTab = ({ type = "buy", tab = "req", setTab }) => {
  if (type === "buy") {
    return (
      <TabBox tab={tab}>
        {tab === "req" ? (
          <React.Fragment>
            <TabImg
              onClick={() => setTab("req")}
              img={daddyReq}
              hoverImg={daddyReqGreen}
            />
            <TabImg
              onClick={() => setTab("res")}
              img={daddyResGrey}
              hoverImg={daddyResGreen}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TabImg
              onClick={() => setTab("req")}
              img={daddyReqGrey}
              hoverImg={daddyReqGreen}
            />
            <TabImg
              onClick={() => setTab("res")}
              img={daddyRes}
              hoverImg={daddyResGreen}
            />
          </React.Fragment>
        )}
      </TabBox>
    );
  } else {
    return (
      <TabBox tab={tab}>
        {tab === "req" ? (
          <React.Fragment>
            <TabImg
              onClick={() => setTab("req")}
              img={daughterReq}
              hoverImg={daughterReqGreen}
            />
            <TabImg
              onClick={() => setTab("res")}
              img={daughterResGrey}
              hoverImg={daughterResGreen}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TabImg
              onClick={() => setTab("req")}
              img={daughterReqGrey}
              hoverImg={daughterReqGreen}
            />
            <TabImg
              onClick={() => setTab("res")}
              img={daughterRes}
              hoverImg={daughterResGreen}
            />
          </React.Fragment>
        )}
      </TabBox>
    );
  }
};

RouteApplyTab.propTypes = {
  type: PropTypes.string,
  tab: PropTypes.string,
  setTab: PropTypes.func.isRequired,
};

export default RouteApplyTab;
