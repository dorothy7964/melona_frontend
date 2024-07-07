import React from "react";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import { lightGreen } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});

const DatePicker = ({
  label = "도착 날짜",
  selectedDate,
  handleDateChange,
}) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <ThemeProvider theme={defaultMaterialTheme}>
      <KeyboardDatePicker
        clearable
        autoOk
        label={label}
        format="yyyy/MM/dd"
        inputVariant="outlined"
        minDate={new Date()}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </ThemeProvider>
  </MuiPickersUtilsProvider>
);

DatePicker.propTypes = {
  label: PropTypes.string,
  handleDateChange: PropTypes.func.isRequired,
};

export default DatePicker;
