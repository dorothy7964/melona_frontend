import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TransferList from "./TransferList";
import { ADDMEMBER_LIST } from "../SharedQueries";

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
            userNameArr
        }
    });
    
    if (loading === true){
        return (
            <Button variant="outlined" color="primary" disabled>
                로딩 중...
            </Button>
        );
    } else if (!loading && data && data.addMemberList) {
        const { addMemberList } = data;
        
        return (
            <React.Fragment>
                <Button variant="outlined" color="primary" onClick={handleClickOpenMember}>
                    그룹 인원 추가
                </Button>
                <Dialog open={memberOpen} onClose={handleCloseMember} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        그룹 인원 추가
                    </DialogTitle>
                    <DialogContent>
                    <TransferList 
                        data={addMemberList}
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
                            color="primary"
                        >
                            추가 하기
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
};