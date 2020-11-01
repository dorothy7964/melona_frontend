import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckChangId from "./CheckChangId";
import ProgressFileContainer from "./ProgressFileContainer";

export default ({ 
    changeId = "none",
    categorys,
    userName,
    anotherPage,
    open,
    handleClose
}) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">진행 완료</DialogTitle>
                <DialogContent>
                    {changeId === "none" && anotherPage === true 
                        ?    categorys.map(category => (
                            <CheckChangId 
                                key={category.id}
                                categoryId={category.id}
                                userName={userName}
                                anotherPage={anotherPage}
                            />
                        ))
                        :   categorys.map(category => (
                                <ProgressFileContainer 
                                    key={category.id}
                                    changeId={changeId}
                                    categoryId={category.id}
                                    userName={userName}
                                    anotherPage={anotherPage}
                                />
                            ))
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
}
