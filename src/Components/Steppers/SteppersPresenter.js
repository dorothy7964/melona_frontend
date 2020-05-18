import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UploadPhoto from "../UploadPhoto";

const ConfirmFileBox = styled.div`
    background-image: url(${props => props.progressFile});
    background-size: cover;
    display: flex;
    width: 200px;
    height: 200px;
`;

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#9ccc65',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#9ccc65',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: "#eee",
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: "#9ccc65",
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#9ccc65',
        zIndex: 1,
        fontSize: 18,
    }
});

const QontoStepIcon = (props) => {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};


const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

const ColorlibStepIcon = (props) => {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const defaultMaterialTheme = createMuiTheme({
    palette: {
        primary: lightGreen,
    },
});

const getSteps = () => {
    return ['진행 중', '인증 사진', '완료'];
};

const getStepContent = (step) => {
    switch (step) {
        case 0:
            return '진행이 되었으면 다음으로 넘어가주세요.';
        case 1:
            return '인증 사진을 올리겠습니까?';
        case 2:
            return '진행이 완료 되었습니까?';
        default:
            return 'Unknown step';
    }
};

export default ({ 
    progressFile,
    activeStep,
    skipped,
    isStepOptional,
    isStepSkipped,
    handleNext,
    handleBack,
    handleUpload,
    handleSkip,
}) => {
    const classes = useStyles();
    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel StepIconComponent={QontoStepIcon} {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            진행이 완료 되었습니다.
                        </Typography>
                    </div>
                ) : (
                    <ThemeProvider theme={defaultMaterialTheme}>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                이전
                            </Button>
                            {isStepOptional(activeStep) && (
                                <React.Fragment>
                                    <Button>
                                        <UploadPhoto 
                                            handleUpload={handleUpload}
                                        />
                                    </Button>
                                    {progressFile === "" &&
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSkip}
                                            className={classes.button}
                                        >
                                            넘어가기
                                        </Button>
                                    }
                                </React.Fragment>
                            )}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? '완료' : '다음'}
                            </Button>
                            {progressFile && activeStep === 1 &&
                                <ConfirmFileBox progressFile={progressFile} />
                            }
                        </div>
                    </ThemeProvider>
                )}
            </div>
        </div>
    );
}
