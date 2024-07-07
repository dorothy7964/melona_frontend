import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { lightGreen } from "@material-ui/core/colors";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

const TextBox = styled.div`
  span {
    &:nth-child(1) {
      color: ${(props) => props.theme.darkGreyColor};
    }
    &:nth-child(2) {
      color: white;
      font-weight: 600;
    }
  }
`;

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default ({ count }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextBox>
          <Badge badgeContent={count} color="primary">
            <MailIcon />
          </Badge>
        </TextBox>
      </ThemeProvider>
    </div>
  );
};
