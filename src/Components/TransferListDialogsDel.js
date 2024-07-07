import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TransferList from "./TransferList";
import { red, grey } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey,
  },
});

const GreyText = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
`;

export default ({
  userNameArr,
  groupMemberId,
  memberOpen,
  right,
  setRight,
  handleClickOpenMember,
  handleCloseMember,
  handleAddMember,
}) => (
  <ThemeProvider theme={defaultMaterialTheme}>
    <Button variant="outlined" color="primary" onClick={handleClickOpenMember}>
      그룹 인원 삭제
    </Button>
    <Dialog
      open={memberOpen}
      onClose={handleCloseMember}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">그룹 인원 삭제</DialogTitle>
      <DialogContent>
        <TransferList
          type="anoter"
          data={userNameArr}
          right={right}
          setRight={setRight}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseMember} color="secondary">
          <GreyText>취소 하기</GreyText>
        </Button>
        <Button onClick={() => handleAddMember(groupMemberId)} color="primary">
          삭제 하기
        </Button>
      </DialogActions>
    </Dialog>
  </ThemeProvider>
);
