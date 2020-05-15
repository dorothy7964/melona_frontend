import React from 'react';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AvatarDialogs from "./AvatarDialogs";
import { HeadUser } from "./Icons";

const TypographyText = styled(Typography)`
    overflow-y: hidden;
    white-space: nowrap;
`;

const CardActionsBox = styled(CardActions)`
    button {
        padding: 0;
        margin-left: 5px;
    }
`;

const AvatarBox = styled.div`
    span {
        color: ${props => props.theme.lightGreenColor} !important;
        font-weight: 600;
    }
`;

const IconBox = styled.div`
    margin: 5px;
    svg {
        color: ${props => props.theme.lightGreenColor};
    }
`;

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
});

export default function MediaCard({
    groupRoomId,
    roomName, 
    coverPhoto, 
    founderUser,
    groupRoomMember, 
    createdAt,
    handleEnter
}) {
    const classes = useStyles();
    // createdAt split
    const splitCreateAt =  createdAt.split("T");
    const created = splitCreateAt[0];

    return (
        <Card  className={classes.root}>
            <CardActionArea onClick={() => handleEnter(groupRoomId)}>
                <CardMedia
                    className={classes.media}
                    image={coverPhoto}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <TypographyText gutterBottom variant="h5" component="h3">
                        {roomName}
                    </TypographyText>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {created}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActionsBox>
                <AvatarBox>
                    <AvatarDialogs 
                        type="text"
                        groupMember={groupRoomMember.participants}
                    />
                </AvatarBox>
                {founderUser.isSelf &&
                    <IconBox>
                        <HeadUser />
                    </IconBox>
                }
            </CardActionsBox>
        </Card>
    );
};
