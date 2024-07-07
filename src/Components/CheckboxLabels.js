import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { lightGreen } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: lightGreen[500],
    "&$checked": {
      color: lightGreen[500],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CheckboxLabels = ({ checkbox, handleCheckbox, categoryArray }) => {
  return categoryArray.map((category) => (
    <React.Fragment key={category}>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={checkbox.category}
            onChange={handleCheckbox}
            name={category}
          />
        }
        label={category}
      />
    </React.Fragment>
  ));
};

CheckboxLabels.propTypes = {
  checkbox: PropTypes.object.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  categoryArray: PropTypes.array.isRequired,
};

export default CheckboxLabels;
