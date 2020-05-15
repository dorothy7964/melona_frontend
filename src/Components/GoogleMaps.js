import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import GoogleMapInfo from "./GoogleMapInfo";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import Env from "../Env";

const LocationMap = styled.div`
    display: flex;
    flex-diraction: row;
`;

function loadScript(src, position, id) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles(theme => ({
    icon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
    },
}));

export default function GoogleMaps({ mapLabel="지역", route }) {
    const classes = useStyles();
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);
    
    if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${Env.GOOGLEAPI}&libraries=places`,
                document.querySelector('head'),
                'google-maps',
            );
        }

        loaded.current = true;
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const fetch = React.useMemo(
        () =>
            throttle((request, callback) => {
                autocompleteService.current.getPlacePredictions(request, callback);
            }, 200),
        [],
    );

    React.useEffect(() => {
        let active = true;
      
        if (!autocompleteService.current && window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions([]);
        return undefined;
    }

    fetch({ input: inputValue }, results => {
        if (active) {
            setOptions(results || []);
        }
    });

    return () => {
        active = false;
    };
  }, [inputValue, fetch]);

    return (
        <Autocomplete
            id="google-map-demo"
            style={{ width: "80%" }}
            getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
            filterOptions={x => x}
            options={options}
            autoComplete
            includeInputInList
            renderInput={params => (
                <LocationMap>
                    <TextField
                        {...params}
                        label={mapLabel}
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                    />
                    <GoogleMapInfo 
                        params={params.inputProps.value}
                        route={route}
                    />
                </LocationMap>
             )}
            renderOption={option => {
                const matches = option.structured_formatting.main_text_matched_substrings;
                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map(match => [match.offset, match.offset + match.length]),
                );

                return (
                    <Grid container alignItems="center">
                        <Grid item>
                            <LocationOnIcon className={classes.icon} />
                        </Grid>
                        <Grid item xs>
                            {parts.map((part, index) => (
                                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                    {part.text}
                                </span>
                            ))}

                            <Typography variant="body2" color="textSecondary">
                                {option.structured_formatting.secondary_text}
                            </Typography>
                        </Grid>
                    </Grid>
                );
            }}
        />
    );
}

GoogleMaps.propTypes = {
    mapLabel : PropTypes.string,
    route : PropTypes.string.isRequired,
};

