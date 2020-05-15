import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import SteppersPresenter from "./SteppersPresenter";
import { PROGRESS_NUM } from "./SteppersQueries";

export default ({ contentId, stepNum, anotherPage }) => {
    // Mutation
    const [progressNumMutation] = useMutation(PROGRESS_NUM);

    // Stepper
    const [activeStep, setActiveStep] = useState(stepNum || 0);
    const [skipped, setSkipped] = useState(new Set());
  
    const isStepOptional = (step) => {
        return step === 1;
    };
  
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };
  
    const handleNext = async() => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);

        // Mutation
        await progressNumMutation({
            variables: { 
                contentId,
                anotherPage,
                stepNum: activeStep + 1
            }
        });
    };
  
    const handleBack = async() => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);

        // Mutation
        await progressNumMutation({
            variables: { 
                contentId,
                anotherPage,
                stepNum: activeStep - 1
            }
        });
    };

    const handleUpload = async(e) => {
        const file = e.target.files[0];
        console.log(file)
    };

  
    const handleSkip = async() => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
  
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });

        // Mutation
        await progressNumMutation({
            variables: { 
                contentId,
                anotherPage,
                stepNum: activeStep + 1
            }
        });
    };
  
    return (
        <SteppersPresenter
            activeStep={activeStep}
            skipped={skipped}
            isStepOptional={isStepOptional}
            isStepSkipped={isStepSkipped}
            handleNext={handleNext}
            handleBack={handleBack}
            handleUpload={handleUpload}
            handleSkip={handleSkip}
        />
    );
};
