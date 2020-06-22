import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { SEE_BUY } from "../../SharedQueries";
import { items } from "../../PaginationItemNum";
import DaddyPresenter from "./DaddyPresenter";

export default () => {
    const [hasMore, setHasMore] = useState(true);
    const { data, refetch, fetchMore } = useQuery(SEE_BUY, {
        variables: {
            pageNumber: 0,
            items
        },
        fetchPolicy: "cache-and-network"
    });
    
    const onLoadMore = () => {
        fetchMore({
            variables: {
                pageNumber: data.seeBuy.length,
                items
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    setHasMore(false);
                    return prev;
                }
                if (fetchMoreResult.seeBuy.length < items) {
                    setHasMore(false);
                }
                return Object.assign({}, prev, {
                    seeBuy: [...prev.seeBuy, ...fetchMoreResult.seeBuy]
                });
            }
        })
    }

    useEffect(() => {
        refetch();
    }, []);
 
    return (
        <DaddyPresenter 
            data={data}
            hasMore={hasMore}
            onLoadMore={onLoadMore}
            refetch={refetch}
        />
    );
};