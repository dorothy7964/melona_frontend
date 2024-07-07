import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { lightGreen } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: lightGreen[500],
    "&:hover": {
      backgroundColor: lightGreen[500],
    },
  },
}));

const ButtonCircle = ({ type }) => {
  const classes = useStyles();
  const [action] = useState(type);

  if (action === "plus") {
    return (
      <Fab aria-label="add" className={classes.fabGreen}>
        <AddIcon />
      </Fab>
    );
  } else if (action === "downArr") {
    return (
      <IconButton aria-label="delete" className={classes.margin} size="small">
        <ArrowDownwardIcon fontSize="inherit" />
      </IconButton>
    );
  } else {
    return (
      <Fab aria-label="edit" className={classes.fabGreen}>
        <EditIcon />
      </Fab>
    );
  }
};

ButtonCircle.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ButtonCircle;
