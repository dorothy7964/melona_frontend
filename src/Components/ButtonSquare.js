import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { lightGreen, grey, red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
const secondary = red[600];

const useStyles = makeStyles((theme) => ({
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: lightGreen[500],
    "&:hover": {
      backgroundColor: lightGreen[500],
    },
  },
  fabGrey: {
    color: theme.palette.common.white,
    backgroundColor: grey[400],
    "&:hover": {
      backgroundColor: grey[400],
    },
  },
  fabRed: {
    color: secondary,
    border: `1px solid ${secondary}`,
    "&:hover": {
      border: `1px solid ${secondary}`,
    },
  },
}));

const ButtonSquare = ({ type = "default", size = "medium", text, onClick }) => {
  const classes = useStyles();
  const [action] = useState(type);

  if (action === "default") {
    return (
      <Button
        variant="contained"
        className={classes.fabGreen}
        onClick={onClick}
        size={size}
      >
        {text}
      </Button>
    );
  } else if (action === "defaultGrey") {
    return (
      <Button
        variant="contained"
        className={classes.fabGrey}
        onClick={onClick}
        size={size}
      >
        {text}
      </Button>
    );
  } else if (action === "disable") {
    return (
      <Button
        variant="contained"
        className={classes.fabGrey}
        size={size}
        disabled
      >
        {text}
      </Button>
    );
  } else if (action === "outlineRed") {
    return (
      <Button
        variant="outlined"
        className={classes.fabRed}
        color="secondary"
        onClick={onClick}
        size={size}
      >
        {text}
      </Button>
    );
  } else if (action === "text") {
    return (
      <Button onClick={onClick} color="secondary">
        {text}
      </Button>
    );
  }
};

ButtonSquare.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonSquare;
