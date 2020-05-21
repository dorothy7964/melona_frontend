import React, { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import ApplyReqPresenter from "./ApplyReqPresenter"
import { TOGGLE_POSTEDREQ } from "./ApplyReqQueries";
import { items } from "../../PaginationItemNum";

export default ({ tab, iconImg }) => {
    const [hasMore, setHasMore] = useState(true);
    const { data, refetch, fetchMore } = useQuery(TOGGLE_POSTEDREQ, {
        variables: { 
            tab,
            pageNumber: 0,
            items
        }
    });
    
    const onLoadMore = () => {
        fetchMore({
            variables: {
                pageNumber: data.togglePostedReq.length,
                items
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    setHasMore(false);
                    return prev;
                }
                if (fetchMoreResult.togglePostedReq.length < items) {
                    setHasMore(false);
                }
                return Object.assign({}, prev, {
                    togglePostedReq: [...prev.togglePostedReq, ...fetchMoreResult.togglePostedReq]
                });
            }
        })
    }
    
    return (
        <ApplyReqPresenter 
            tab={tab}        
            iconImg={iconImg}        
            data={data}
            hasMore={hasMore}
            onLoadMore={onLoadMore}
            refetch={refetch}
        />
    );
};