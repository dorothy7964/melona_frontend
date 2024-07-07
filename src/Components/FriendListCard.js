import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import IconButton from "@material-ui/core/IconButton";
import { UserPlus, BasketDelete } from "./Icons";

const FriendBox = styled.div`
  display: flex;
  padding: 20px;
  border-top: 1px solid ${(props) => props.theme.lightGreyColor};
  align-items: center;
  button {
    svg {
      color: ${(props) => props.theme.darkGreyColor};
      /* 아이콘 방향 반전 */
      transform: rotate(0deg);
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: "FlipH";
    }
  }
`;

const TextBox = styled.div`
  flex: 1;
  width: 50%;
  margin: 0 10px;
  padding: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  word-break: break-all;
`;

const FriendListCard = ({
  buttonIcon,
  userAvatar,
  userName,
  isFollowing,
  onClick,
}) => {
  if (buttonIcon === "add") {
    return (
      <FriendBox>
        <Avatar size="md" url={userAvatar} />
        <TextBox>
          <FatText text={userName} />
        </TextBox>
        <IconButton onClick={onClick} aria-label="add">
          <UserPlus />
        </IconButton>
      </FriendBox>
    );
  } else if (buttonIcon === "delete") {
    return (
      <FriendBox>
        <Avatar size="md" url={userAvatar} />
        <TextBox>
          <FatText text={userName} />
        </TextBox>
        <IconButton onClick={onClick} aria-label="delete">
          <BasketDelete />
        </IconButton>
      </FriendBox>
    );
  } else if (buttonIcon === "opinion") {
    if (isFollowing === true) {
      return (
        <FriendBox>
          <Avatar size="md" url={userAvatar} />
          <TextBox>
            <FatText text={userName} />
          </TextBox>
          <IconButton onClick={onClick} aria-label="delete">
            <BasketDelete />
          </IconButton>
        </FriendBox>
      );
    } else {
      return (
        <FriendBox>
          <Avatar size="md" url={userAvatar} />
          <TextBox>
            <FatText text={userName} />
          </TextBox>
          <IconButton onClick={onClick} aria-label="add">
            <UserPlus />
          </IconButton>
        </FriendBox>
      );
    }
  }
};

FriendListCard.propTypes = {
  buttonIcon: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default FriendListCard;
