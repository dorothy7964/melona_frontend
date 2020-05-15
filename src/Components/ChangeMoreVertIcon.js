import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { More } from "./Icons";

export default withRouter(({ history, userName, handleLogout }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (Route) => {
        if (Route === "editProfile"){
            history.push(`/editProfile/${userName}`);
        } else if (Route === "chatRoom") {
            history.push("/Chat");
        } else if (Route === "follow") {
            history.push("/friendList");
        } else if (Route === "addRoom") {
            history.push(`/addGroupRoom/${userName}`);
        } else if (Route === "logout") {
            handleLogout();
        }
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <More />
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => handleClose("editProfile")}>프로필 편집</MenuItem>
                <MenuItem onClick={() => handleClose("chatRoom")}>채팅창 가기</MenuItem>
                <MenuItem onClick={() => handleClose("follow")}>친구목록 보기</MenuItem>
                <MenuItem onClick={() => handleClose("addRoom")}>방 만들기</MenuItem>
                <MenuItem onClick={() => handleClose("logout")}>로그아웃</MenuItem>
            </Menu>
        </React.Fragment>
    );
});
