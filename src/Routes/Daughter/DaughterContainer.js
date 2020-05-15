import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import DaughterPresenter from "./DaughterPresenter";
import { SEE_BUYME } from "./DaughterQueries";

export default () => {
    const { data, loading, refetch } = useQuery(SEE_BUYME);

    useEffect(() => {
        refetch();
    }, []);

    return (
        <DaughterPresenter 
            data={data}
            loading={loading}
            refetch={refetch}
        />
    );
};