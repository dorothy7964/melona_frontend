import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import FriendListPresenter from "./FriendListPresenter";
import { SEE_FOLLOWING, TOGGLE_FOLLOW } from "./FriendListQueries";


export default () => {
    const [searchRefetch, setSearchRefetch] = useState(false);
    const { data, loading, refetch } = useQuery(SEE_FOLLOWING);
    const [toggleFollowMutation] = useMutation(TOGGLE_FOLLOW);

    // 친구 추가.삭제
    const handleToggleFollow = async(userName, isFollowing) => {
        try {
            if (isFollowing === true) {
                await toggleFollowMutation({
                    variables: {
                        userName
                    }
                });
                toast.success(`${userName} 님과 친구 연결이 해제 되었습니다.`);
            } else {
                await toggleFollowMutation({
                    variables: {
                        userName
                    }
                });
                toast.success(`${userName} 님과 친구 연결이 되었습니다.`);
            }
            refetch();
            setSearchRefetch(true);
            console.log("try >" ,searchRefetch)
        } catch (e) {
            console.log(e);
        } finally {
            setSearchRefetch(false);
            console.log("fin >", searchRefetch)
        }
    }

    useEffect(() => {
        refetch();
    }, []);

    return (
        <FriendListPresenter 
            data={data}
            loading={loading}
            searchRefetch={searchRefetch}
            handleToggleFollow={handleToggleFollow}
        />
    );
};