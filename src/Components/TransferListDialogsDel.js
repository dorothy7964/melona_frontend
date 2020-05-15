import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TransferList from "./TransferList";

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
    <React.Fragment>
        <Button variant="outlined" color="secondary" onClick={handleClickOpenMember}>
            그룹 인원 삭제
        </Button>
        <Dialog open={memberOpen} onClose={handleCloseMember} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                그룹 인원 삭제
            </DialogTitle>
            <DialogContent>
            <TransferList 
                type="anoter"
                data={userNameArr}
                right={right}
                setRight={setRight}
            />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseMember} color="primary">
                    취소 하기
                </Button>
                <Button 
                    onClick={() => handleAddMember(groupMemberId)} 
                    color="secondary"
                >
                    삭제 하기
                </Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
);