import React from "react";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import DeleteIcon from '@material-ui/icons/Delete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import NoSimIcon from '@material-ui/icons/NoSim';
import CreateIcon from '@material-ui/icons/Create';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

export const HeadUser = ({ size ="small" }) => (
    <AssignmentIndIcon 
        fontSize={size}
    />
);

export const User = ({ size ="large" }) => (
    <GroupAddIcon 
        fontSize={size}
    />
);

export const UserPlus = ({ size ="small" }) => (
    <PersonAddIcon 
        fontSize={size}
    />
);

export const UserDisable = ({ size ="default" }) => (
    <PersonAddDisabledIcon 
        fontSize={size}
    />
);

export const BasketDelete = ({ size ="small" }) => (
    <DeleteIcon 
        fontSize={size}
    />
);

export const Location = () => (
    <LocationOnIcon />
);

export const Airport = () => (
    <LocalAirportIcon />
);

export const Check = ({ size = "small"}) => (
    <DoneIcon   
        fontSize={size}
    />
);

export const Plus = ({ size = "small"}) => (
    <AddIcon   
        fontSize={size}
    />
);

export const PlusOutline = ({ size = "default"}) => (
    <AddCircleOutlineSharpIcon   
        fontSize={size}
    />
);

export const Edit = ({ size = "default"}) => (
    <EditOutlinedIcon   
        fontSize={size}
    />
);

export const Chat = ({ size = "default"}) => (
    <TelegramIcon   
        fontSize={size}
    />
);

export const Send = () => (
    <SendIcon />
);

export const Back = () => (
    <ArrowBackIcon />
);

export const Setting = ({ size = "default"}) => (
    <SettingsOutlinedIcon   
        fontSize={size}
    />
);

export const More = ({ size = "default"}) => (
    <MoreVertIcon   
        fontSize={size}
    />
);

export const Upload = ({ size = "default" }) => (
    <AddAPhotoIcon   
        fontSize={size}
    />
);

export const Enter = ({ size = "default" }) => (
    <ExitToAppIcon   
        fontSize={size}
    />
);

export const DeleteText = ({ size = "default" }) => (
    <DeleteSweepIcon   
        fontSize={size}
    />
);

export const DeleteCircle = ({ size = "small" }) => (
    <HighlightOffIcon   
        fontSize={size}
    />
);

export const PageNone = ({ size = "large" }) => (
    <NoSimIcon   
        fontSize={size}
    />
);

export const Pen = ({ size = "default" }) => (
    <CreateIcon   
        fontSize={size}
    />
);

export const ArrowLeft = ({ size = "default" }) => (
    <SubdirectoryArrowLeftIcon   
        fontSize={size}
    />
);

export const ArrowRight = ({ size = "default" }) => (
    <SubdirectoryArrowRightIcon   
        fontSize={size}
    />
);
