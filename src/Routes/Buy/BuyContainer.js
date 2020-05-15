import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import BuyPresenter from "./BuyPresenter";
import { ME, SEE_BUY } from "../../SharedQueries";

export default () => {
    const [tab, setTab] = useState("req");
    const { refetch } = useQuery(SEE_BUY);
    const { data, loading } = useQuery(ME);

    useEffect(() => {
        refetch();
    }, []);

    return (
        <BuyPresenter
            tab={tab}
            setTab={setTab}
            data={data}
            loading={loading}
        />
    );
};