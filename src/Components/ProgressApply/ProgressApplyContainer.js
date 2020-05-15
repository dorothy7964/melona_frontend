import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import ProgressApplyPresenter from "./ProgressApplyPresenter";
import { CATEGORY_CONTENTS } from "./ProgressApplyQueries";

export default ({ categoryId, userName, anotherPage }) => {
    const { data, loading, refetch } = useQuery(CATEGORY_CONTENTS, {
        variables: { categoryId, userName, anotherPage }
    });

    useEffect(() => {
        refetch();
    }, []);

    return (
        <ProgressApplyPresenter
            data={data}
            loading={loading}
            userName={userName}
            anotherPage={anotherPage}
        />
    );
};