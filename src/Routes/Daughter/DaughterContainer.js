import React, { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import DaughterPresenter from "./DaughterPresenter";
import { SEE_BUYME } from "./DaughterQueries";

export default () => {
    const [hasMore, setHasMore] = useState(true);
    const items = 4;
    const { data, refetch, fetchMore } = useQuery(SEE_BUYME, {
        variables: {
            pageNumber: 0,
            items
        },
        fetchPolicy: "cache-and-network"
    });
    
    const onLoadMore = () => {
        fetchMore({
            variables: {
                pageNumber: data.seeBuyMe.length,
                items
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    setHasMore(false);
                    return prev;
                }
                if (fetchMoreResult.seeBuyMe.length < items) {
                    setHasMore(false);
                }
                return Object.assign({}, prev, {
                    seeBuyMe: [...prev.seeBuyMe, ...fetchMoreResult.seeBuyMe]
                });
            }
        })
    }
 
    return (
        <DaughterPresenter 
            data={data}
            hasMore={hasMore}
            onLoadMore={onLoadMore}
            refetch={refetch}
        />
    );
};