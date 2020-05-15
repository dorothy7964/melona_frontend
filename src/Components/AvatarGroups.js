import React from 'react';
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const AvatarGroups = ({ max = 3, applys }) => (
    <AvatarGroup max={max}>
        {applys.map(apply => (
            <Avatar key={apply.id} alt={apply.user.userName} src={apply.user.avatar} />
        ))}
    </AvatarGroup>
);

AvatarGroups.propTypes = {
    max : PropTypes.number,
    applys : PropTypes.array,
};

export default AvatarGroups;