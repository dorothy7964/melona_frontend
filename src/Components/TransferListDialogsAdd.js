import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { lightGreen, grey } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import TransferList from "./TransferList";
import { ADDMEMBER_LIST } from "../SharedQueries";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: lightGreen,
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
}) => {
  const { data, loading } = useQuery(ADDMEMBER_LIST, {
    variables: {
      userNameArr,
    },
  });

  if (loading === true) {
    return (
      <Button variant="outlined" color="primary" disabled>
        로딩 중...
      </Button>
    );
  } else if (!loading && data && data.addMemberList) {
    const { addMemberList } = data;

    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpenMember}
        >
          그룹 인원 추가
        </Button>
        <Dialog
          open={memberOpen}
          onClose={handleCloseMember}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">그룹 인원 추가</DialogTitle>
          <DialogContent>
            <TransferList
              data={addMemberList}
              right={right}
              setRight={setRight}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseMember} color="secondary">
              <GreyText>취소 하기</GreyText>
            </Button>
            <Button
              onClick={() => handleAddMember(groupMemberId)}
              color="primary"
            >
              추가 하기
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    );
  }
};
