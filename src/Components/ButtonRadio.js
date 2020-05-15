import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
    root: {
        color: lightGreen[500],
        '&$checked': {
            color: lightGreen[500],
        },
    },
    checked: {}
})(props => <Radio color="default" {...props} />);

const ButtonRadio = ({  checkbox, handleCheckbox, categoryArray }) => {
    return (
        categoryArray.map(category => (
            <React.Fragment key={category}>
                <FormControlLabel
                    control={
                        <GreenRadio 
                            checked={checkbox === category} 
                            onChange={handleCheckbox} 
                            value={category}
                            name={category} 
                        />
                    }
                    label={category}
                />
            </React.Fragment>
        ))
    );
}

ButtonRadio.propTypes = {
    checkbox : PropTypes.string.isRequired,
    handleCheckbox : PropTypes.func.isRequired,
    categoryArray : PropTypes.array.isRequired,
};

export default ButtonRadio;