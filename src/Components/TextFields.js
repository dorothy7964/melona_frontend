import React, { useState } from "react";
import PropTypes from "prop-types";
import { lightGreen } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";

const defaultMaterialTheme = createMuiTheme({
  "& label.Mui-focused": {
    color: lightGreen,
  },
  palette: {
    primary: lightGreen,
  },
  label: {
    color: "blue",
  },
  fontSize: "20px",
});

const TextFields = ({
  type = "outlineFull",
  placeholder = "작성 해주세요.",
  helperText = "",
  rows = "4",
  disabled = false,
  text,
  inputText,
  handleChange,
  onKeyPress,
}) => {
  const [action] = useState(type);

  if (action === "Standard") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField label={text} value={inputText} onChange={handleChange} />
      </ThemeProvider>
    );
  } else if (action === "StandardFull") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label={text}
          value={inputText}
          onChange={handleChange}
          fullWidth
        />
      </ThemeProvider>
    );
  } else if (action === "StandardPassword") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label="Password"
          value={inputText}
          onChange={handleChange}
          type="password"
          autoComplete="current-password"
        />
      </ThemeProvider>
    );
  } else if (action === "StandardError") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          error
          value={inputText}
          onChange={handleChange}
          label="Error"
          helperText={helperText}
        />
      </ThemeProvider>
    );
  } else if (action === "StandardMultiline") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label={text}
          value={inputText}
          onChange={handleChange}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          multiline
        />
      </ThemeProvider>
    );
  } else if (action === "StandardMultilineFull") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label={text}
          value={inputText}
          onChange={handleChange}
          placeholder={placeholder}
          multiline
          fullWidth
        />
      </ThemeProvider>
    );
  } else if (action === "outline") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label={text}
          value={inputText}
          onChange={handleChange}
          variant="outlined"
        />
      </ThemeProvider>
    );
  } else if (action === "outlinePassword") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label="Password"
          value={inputText}
          onChange={handleChange}
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </ThemeProvider>
    );
  } else if (action === "outlineError") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          error
          value={inputText}
          onChange={handleChange}
          label="Error"
          helperText={helperText}
          variant="outlined"
        />
      </ThemeProvider>
    );
  } else if (action === "outlineFull") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label={text}
          value={inputText}
          onChange={handleChange}
          placeholder={placeholder}
          helperText={helperText}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          disabled={disabled}
        />
      </ThemeProvider>
    );
  } else if (action === "outlineMultiline") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label={text}
          value={inputText}
          onChange={handleChange}
          placeholder={placeholder}
          multiline
          variant="outlined"
        />
      </ThemeProvider>
    );
  } else if (action === "outlineMultilineRows") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label={text}
          value={inputText}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          multiline
          variant="outlined"
        />
      </ThemeProvider>
    );
  } else if (action === "outlineMultilineFull") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label={text}
          value={inputText}
          onChange={handleChange}
          placeholder={placeholder}
          multiline
          variant="outlined"
          fullWidth
        />
      </ThemeProvider>
    );
  } else if (action === "outlineMultilineFullRows") {
    return (
      <ThemeProvider theme={defaultMaterialTheme}>
        <TextField
          label={text}
          value={inputText}
          onChange={handleChange}
          placeholder={placeholder}
          multiline
          rows={rows}
          variant="outlined"
          fullWidth
        />
      </ThemeProvider>
    );
  }
};

TextFields.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  text: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
};

export default TextFields;
