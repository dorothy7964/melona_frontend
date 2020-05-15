import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
        width: "20px"
    }
}));

export default ({ handleUpload  }) => {
    const classes = useStyles();

    return (
        <div>
            <input 
                onChange={handleUpload} 
                accept="image/*" 
                className={classes.input} 
                id="icon-button-file" 
                type="file" 
            />
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </div>
    );
}
