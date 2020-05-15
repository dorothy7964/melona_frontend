import React, { useState } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import WriteApplyPresenter from "./WriteApplyPresenter";
import { CONNECT_CONTNETS } from "./WriteApplyQueries";
import { SEE_BUY_ONE, CONNECT_APPLY } from "../../SharedQueries";


export default ({ match: { params: { postId } }}) => {
    const [action, setAction] = useState("view");
    const { data, loading } = useQuery(SEE_BUY_ONE, {
        variables: { postId }
    });
    const [connectApplyMutation] = useMutation(CONNECT_APPLY);
    const [coonnectContentsMutation] = useMutation(CONNECT_CONTNETS);

    const ToggleApply = async(postId) => {
        try {
            await connectApplyMutation({
                variables: {
                    postId
                }   
            }); 
        } catch(e) {
            console.log(e);
        }
        toast.success("신청 완료 되었습니다.");
        setTimeout(() => setAction("feed"), 1000);
    };

    const handleContent = async(categoryId , text) => {
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
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <WriteApplyPresenter 
            action={action}
            data={data}
            loading={loading}
            postId={postId}
            ToggleApply={ToggleApply}
            handleContent={handleContent}
        />
    );
};