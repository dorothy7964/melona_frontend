import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import GroupDaddyPresenter from "./GroupDaddyPresenter";
import { SEEBUY_GROUP } from "./GroupDaddyQueries";
import { items } from "../../PaginationItemNum";

export default ({ groupRoomId }) => {
  const [hasMore, setHasMore] = useState(true);
  const { data, refetch, fetchMore } = useQuery(SEEBUY_GROUP, {
    variables: {
      groupRoomId,
      pageNumber: 0,
      items,
    },
    fetchPolicy: "cache-and-network",
  });

  const onLoadMore = () => {
    fetchMore({
      variables: {
        pageNumber: data.seeBuyGroup.length,
        items,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          setHasMore(false);
          return prev;
        }
        if (fetchMoreResult.seeBuyGroup.length < items) {
          setHasMore(false);
        }
        return Object.assign({}, prev, {
          seeBuyGroup: [...prev.seeBuyGroup, ...fetchMoreResult.seeBuyGroup],
        });
      },
    });
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <GroupDaddyPresenter
      data={data}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
      refetch={refetch}
      groupRoomId={groupRoomId}
    />
  );
};
