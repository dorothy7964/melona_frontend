import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Setting } from "./Icons";

export default withRouter(({ history, userName, handleLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (Route) => {
    if (Route === "editProfile") {
      history.push(`/editProfile/${userName}`);
    } else if (Route === "logout") {
      handleLogout();
    }
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Setting />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose("editProfile")}>
          프로필 편집
        </MenuItem>
        <MenuItem onClick={() => handleClose("logout")}>로그아웃</MenuItem>
      </Menu>
    </React.Fragment>
  );
});
