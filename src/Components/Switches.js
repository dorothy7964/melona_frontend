import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { lightGreen } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const DefaultSwitch = withStyles({
  switchBase: {
    color: lightGreen[300],
    "&$checked": {
      color: lightGreen[500],
    },
    "&$checked + $track": {
      backgroundColor: lightGreen[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: lightGreen[500],
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: lightGreen[500],
        borderColor: lightGreen[500],
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const Switches = ({
  type = "antSwitch",
  label = "",
  offText = "",
  onText = "",
  switchState,
  handleSwitch,
}) => {
  const [action] = useState(type);

  if (action === "defaultSwitch") {
    return (
      <FormControlLabel
        control={
          <DefaultSwitch
            checked={switchState}
            onChange={handleSwitch}
            name="view"
          />
        }
        label={label}
      />
    );
  } else if (action === "iOSSwitch") {
    return (
      <React.Fragment>
        <Grid item>{offText}</Grid>
        <FormControlLabel
          control={
            <IOSSwitch
              checked={switchState}
              onChange={handleSwitch}
              name="view"
            />
          }
          label={label}
        />
        <Grid item>{onText}</Grid>
      </React.Fragment>
    );
  } else if (action === "antSwitch") {
    return (
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>{offText}</Grid>
          <Grid item>
            <AntSwitch
              checked={switchState}
              onChange={handleSwitch}
              name="view"
            />
          </Grid>
          <Grid item>{onText}</Grid>
        </Grid>
      </Typography>
    );
  }
};

export default Switches;
