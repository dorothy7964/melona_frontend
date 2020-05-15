import React from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import StapPresenter from "./StapPresenter"
import { SEE_BUY_ONE } from "../../SharedQueries";
import { PROGRESS_APPLYME } from "./StapQueries";

export default ({ history, match: { params: { postId } } }) => {
    const [progressApplyMeMutation] = useMutation(PROGRESS_APPLYME);
    const { data, loading } = useQuery(SEE_BUY_ONE, {
        variables: { postId }
    });

    const handleProgressApply = async() => {
        await progressApplyMeMutation({
            variables: {
                postId
            }
        });
        toast.success("진행이 완료 되었습니다.");
        history.push("/apply");
    };

    return (
        <StapPresenter 
            data={data}
            loading={loading}
            handleProgressApply={handleProgressApply}
        />
    );
};