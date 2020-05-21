import React, { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import GroupDaughterPresenter from "./GroupDaughterPresenter";
import { SEEBUYME_GROUP } from "./GroupDaughterQueries";
import { items } from "../../PaginationItemNum";

export default ({ groupRoomId }) => {
    const [hasMore, setHasMore] = useState(true);
    const { data, refetch, fetchMore } = useQuery(SEEBUYME_GROUP, {
        variables: {
            groupRoomId,
            pageNumber: 0,
            items
        },
        fetchPolicy: "cache-and-network"
    });
    
    const onLoadMore = () => {
        fetchMore({
            variables: {
                pageNumber: data.seeBuyMeGroup.length,
                items
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    setHasMore(false);
                    return prev;
                }
                if (fetchMoreResult.seeBuyMeGroup.length < items) {
                    setHasMore(false);
                }
                return Object.assign({}, prev, {
                    seeBuyMeGroup: [...prev.seeBuyMeGroup, ...fetchMoreResult.seeBuyMeGroup]
                });
            }
        })
    }

    return (
        <GroupDaughterPresenter 
            data={data}
            hasMore={hasMore}
            onLoadMore={onLoadMore}
            refetch={refetch}
            groupRoomId={groupRoomId}
        />
    );
};