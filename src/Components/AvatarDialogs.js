import React, { useState } from 'react';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { lightGreen } from '@material-ui/core/colors';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';

const ButtonText = styled(Button)`
    border: 0 !important;
    span {
        color: red;
    }
`;

const defaultMaterialTheme  = createMuiTheme({
    palette: {
        primary: lightGreen,
    }
});

const useStyles = makeStyles({
    avatar: {
        backgroundColor: lightGreen[100],
        color: lightGreen[600],
    },
});

const SimpleDialog = (props) => {
    const classes = useStyles();
    const { 
        onClose, 
        selectedValue, 
        open, 
        groupMember 
    } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">그룹 인원 보기</DialogTitle>
            <List>
                {groupMember.map((user) => (
                <ListItem button 
                    onClick={
                        () => handleListItemClick(user)} 
                        key={user.id
                    }
                >
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.userName} />
                </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

export default ({ groupMember, type="defalut" }) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(groupMember);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    if (type === "defalut"){
        return (
            <ThemeProvider theme={defaultMaterialTheme}>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    그룹 인원 보기
                </Button>
                <SimpleDialog 
                    groupMember={groupMember}
                    selectedValue={selectedValue} 
                    open={open} 
                    onClose={handleClose} 
                />
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={defaultMaterialTheme}>
                <ButtonText variant="outlined" color="primary" onClick={handleClickOpen}>
                    그룹 인원 보기
                </ButtonText>
                <SimpleDialog 
                    groupMember={groupMember}
                    selectedValue={selectedValue} 
                    open={open} 
                    onClose={handleClose} 
                />
            </ThemeProvider>
        );

    }
};
