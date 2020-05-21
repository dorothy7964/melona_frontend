import React, { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import ApplyResPresenter from "./ApplyResPresenter"
import { TOGGLE_POSTEDRES } from "./ApplyResQueries";
import { items } from "../../PaginationItemNum";

export default ({ tab, iconImg }) => {
    const [hasMore, setHasMore] = useState(true);
    const { data, refetch, fetchMore } = useQuery(TOGGLE_POSTEDRES, {
        variables: { 
            tab,
            pageNumber: 0,
            items
        }
    });
    
    const onLoadMore = () => {
        fetchMore({
            variables: {
                pageNumber: data.togglePostedRes.length,
                items
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    setHasMore(false);
                    return prev;
                }
                if (fetchMoreResult.togglePostedRes.length < items) {
                    setHasMore(false);
                }
                return Object.assign({}, prev, {
                    togglePostedRes: [...prev.togglePostedRes, ...fetchMoreResult.togglePostedRes]
                });
            }
        })
    }
    
    return (
        <ApplyResPresenter 
            tab={tab}        
            iconImg={iconImg}        
            data={data}
            hasMore={hasMore}
            onLoadMore={onLoadMore}
            refetch={refetch}
        />
    );
};