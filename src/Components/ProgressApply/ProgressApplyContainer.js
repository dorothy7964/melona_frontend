import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import ProgressApplyPresenter from "./ProgressApplyPresenter";
import { CATEGORY_CONTENTS } from "./ProgressApplyQueries";

export default ({ categoryId, userName, anotherPage }) => {
    const { data, loading, refetch } = useQuery(CATEGORY_CONTENTS, {
        variables: { categoryId, userName, anotherPage }
    });

    // 진행완료 팝업
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        refetch();
    }, []);

    return (
        <ProgressApplyPresenter
            data={data}
            loading={loading}
            userName={userName}
            anotherPage={anotherPage}
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
        />
    );
};