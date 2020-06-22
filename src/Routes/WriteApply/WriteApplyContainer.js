import React, { useState } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import WriteApplyPresenter from "./WriteApplyPresenter";
import { CONNECT_CONTNETS, DELETE_CONTENTS, TRUE_APPLY, FALSE_APPLY } from "./WriteApplyQueries";
import { SEE_BUY_ONE } from "../../SharedQueries";

export default ({ match: { params: { postId } }}) => {
    const [action, setAction] = useState("view");
    const { data, loading } = useQuery(SEE_BUY_ONE, {
        variables: { postId }
    });
    const [trueApplyMutation] = useMutation(TRUE_APPLY);
    const [falseApplyMutation] = useMutation(FALSE_APPLY);
    const [coonnectContentsMutation] = useMutation(CONNECT_CONTNETS);
    const [deleteContentsMutation] = useMutation(DELETE_CONTENTS);

    const handleComplete = () => {
        toast.success("신청 완료 되었습니다.");
        setTimeout(() => setAction("feed"), 1000);
    };

    const handleContent = async(categoryId , text, postId) => {
        if (text === "") {
            return toast.error("작성 후 신청 해주세요.");
        }
        
        try {
            await coonnectContentsMutation({
                variables: {
                    text,
                    categoryId
                }   
            }); 
            await trueApplyMutation({
                variables: {
                    postId
                }   
            });
        } catch(e) {
            console.log(e);
        }
    };

    const handleRemove = async(postId) => {
        try {
            await deleteContentsMutation({
                variables: {
                    postId
                } 
            });
            await falseApplyMutation({
                variables: {
                    postId
                }   
            }); 
        } catch (e) {
            console.log(e);
        }
    };

    // DraggableDialog 함수
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = (postId) => {
        handleClose();
        handleRemove(postId);
        setAction("feed");
        toast.success("신청을 취소합니다.");
    };
    const handleAbort = () => {
        handleClose();
        toast.success("신청을 취소하지 않습니다.");
    };

    return (
        <WriteApplyPresenter 
            open={open}
            action={action}
            data={data}
            loading={loading}
            postId={postId}
            handleComplete={handleComplete}
            handleContent={handleContent}
            handleRemove={handleRemove}
            handleClose={handleClose}
            handleClickOpen={handleClickOpen}
            handleCancel={handleCancel}
            handleAbort={handleAbort}
        />
    );
};