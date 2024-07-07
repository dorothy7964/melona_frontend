import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { User, Location, Airport } from "./Icons";
import Avatar from "./Avatar";
import AvatarGroups from "./AvatarGroups";
import FatText from "./FatText";

const Header = styled.div`
  @media (max-width: ${(props) => props.theme.maxWidthLarge}) {
    display: flex;
    flex-direction: column;
  }
  display: flex;
  padding: 20px 30px;
  font-size: 13pt;
  background-color: ${(props) => props.bgColor};
`;

const MediaContainer = styled.div`
  display: flex;
  &:last-child {
    width: 100%;
    justify-content: flex-end;
  }
`;

const UserColumn = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  div {
    margin-right: 10px;
  }
  span {
    display: inline-block;
    width: 175px;
    height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    word-break: break-all;
  }
`;

const UserColumnMd = styled.div`
  display: flex;
  width: 53%;
  align-items: center;
  span {
    margin-left: 10px;
  }
  svg {
    color: ${(props) => props.theme.darkGreyColor};
    /* 아이콘 방향 전환 */
    transform: rotate(0deg);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
  }
`;

const ApplyText = styled.div`
  min-width: 50px;
`;

const Groups = styled.div`
  @media (max-width: 622px) {
    display: none;
  }
  margin-left: 25px;
  z-index: 1 !important;
`;

const UserColumnLast = styled.div`
  @media (max-width: ${(props) => props.theme.maxWidthMiddle}) {
  }
  display: flex;
  div {
    display: flex;
    align-items: center;
  }
`;

const LocatoinBox = styled.div`
  margin-right: 10px;
  svg {
    color: ${(props) => props.theme.darkGreyColor};
  }
`;

const AirportBox = styled.div`
  svg {
    transform: rotate(90deg);
    color: ${(props) => props.theme.darkGreyColor};
  }
  span {
    width: 100px;
  }
`;

const UserCard = ({
  bgColor = "white",
  avatar,
  userName,
  applys,
  applysCount,
  location,
  lastDate,
}) => (
  <Header bgColor={bgColor}>
    <MediaContainer>
      <UserColumn>
        <Avatar size="md" url={avatar} />
        <Link to="/">
          <FatText text={userName} />
        </Link>
      </UserColumn>
      <UserColumnMd>
        <User />
        <ApplyText>
          <FatText text={`${applysCount} 명`} />
        </ApplyText>
        <Groups>
          <AvatarGroups applys={applys} />
        </Groups>
      </UserColumnMd>
    </MediaContainer>
    <MediaContainer>
      <UserColumnLast>
        <LocatoinBox>
          <Location />
          <FatText text={location} />
        </LocatoinBox>
        <AirportBox>
          <Airport />
          <FatText text={lastDate} />
        </AirportBox>
      </UserColumnLast>
    </MediaContainer>
  </Header>
);

UserCard.propTypes = {
  bgColor: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  applys: PropTypes.array.isRequired,
  applysCount: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  lastDate: PropTypes.string.isRequired,
};

export default UserCard;
