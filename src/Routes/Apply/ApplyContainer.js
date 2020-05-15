import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import ApplyPresenter from "./ApplyPresenter";
import { ME, SEE_BUY } from "../../SharedQueries";

export default () => {
    const [tab, setTab] = useState("req");
    const { refetch } = useQuery(SEE_BUY);
    const { data, loading } = useQuery(ME);

    useEffect(() => {
        refetch();
    }, []);
    
    return (
        <ApplyPresenter
            tab={tab}
            setTab={setTab}
            data={data}
            loading={loading}
        />
    );
};