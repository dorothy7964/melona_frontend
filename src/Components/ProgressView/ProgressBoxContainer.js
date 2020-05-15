import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import ProgressBoxPresenter from "./ProgressBoxPresenter";
import { CATEGORY_CONTENTSSELF } from "./ProgressBoxQueries";
import { ME } from "../../SharedQueries";

export default ({ categoryId, anotherPage }) => {
    const { data: { me: { userName } } } = useQuery(ME);
    const { data, loading, refetch } = useQuery(CATEGORY_CONTENTSSELF, {
        variables: { categoryId, anotherPage }
    });
    
    useEffect(() => {
        refetch();
    }, []);

    return (
        <ProgressBoxPresenter
            data={data}
            loading={loading}
            anotherPage={anotherPage}
            userName={userName}
        />
    );
};