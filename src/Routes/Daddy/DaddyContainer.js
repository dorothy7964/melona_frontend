import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { SEE_BUY } from "../../SharedQueries";
import DaddyPresenter from "./DaddyPresenter";

export default () => {
    const { data, loading, refetch } = useQuery(SEE_BUY);

    useEffect(() => {
        refetch();
    }, []);
 
    return (
        <DaddyPresenter 
            data={data}
            loading={loading}
            refetch={refetch}
        />
    );
};