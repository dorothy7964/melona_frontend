import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import axios from "axios";
import SteppersPresenter from "./SteppersPresenter";
import { PROGRESS_NUM, EDIT_CONFIRMFILE } from "./SteppersQueries";

export default ({ contentId, stepNum, confirmFile, anotherPage }) => {
  const [progressFile, setProgressFile] = useState(confirmFile);

  // Mutation
  const [progressNumMutation] = useMutation(PROGRESS_NUM);
  const [editConfirmFileMutation] = useMutation(EDIT_CONFIRMFILE);

  // file upload
  const [open, setOpen] = useState(false);
  const [changeId, setChangeId] = useState("");
  const [fileLoading, setFileLoading] = useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    setChangeId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Stepper
  const [activeStep, setActiveStep] = useState(stepNum || 0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
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
        stepNum: activeStep + 1,
      },
    });
  };

  const handleBack = async () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

    // Mutation
    await progressNumMutation({
      variables: {
        contentId,
        anotherPage,
        stepNum: activeStep - 1,
      },
    });
  };

  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://melona-backend.herokuapp.com";

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      setFileLoading(true);
      const {
        data: { location },
      } = await axios.post(`${url}/api/upload`, formData, {
        headers: {
          "content-type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });
      setProgressFile(location);
      const {
        data: { editConfirmFile },
      } = await editConfirmFileMutation({
        variables: {
          contentId: changeId,
          anotherPage,
          confirmFile: location,
        },
      });
      if (editConfirmFile) {
        toast.success("업로드 되었습니다.");
      }
    } catch (e) {
      toast.error("업로드 실패하였습니다.");
    } finally {
      setFileLoading(false);
    }
  };

  const handleReset = async () => {
    setProgressFile("none");
    try {
      const {
        data: { editConfirmFile },
      } = await editConfirmFileMutation({
        variables: {
          contentId: changeId,
          anotherPage,
          confirmFile: "none",
        },
      });
      if (editConfirmFile) {
        toast.success("인증 사진이 취소 되었습니다.");
      }
    } catch (e) {
      toast.error("업로드 실패하였습니다.");
    }
  };

  return (
    <SteppersPresenter
      open={open}
      contentId={contentId}
      progressFile={progressFile}
      fileLoading={fileLoading}
      activeStep={activeStep}
      isStepOptional={isStepOptional}
      isStepSkipped={isStepSkipped}
      handleNext={handleNext}
      handleBack={handleBack}
      handleUpload={handleUpload}
      handleReset={handleReset}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
    />
  );
};
