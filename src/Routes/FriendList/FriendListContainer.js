import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import FriendListPresenter from "./FriendListPresenter";
import { SEE_FOLLOWING, TOGGLE_FOLLOW } from "./FriendListQueries";


export default () => {
    const { data, loading, refetch } = useQuery(SEE_FOLLOWING);
    const [toggleFollowMutation] = useMutation(TOGGLE_FOLLOW);

    // 친구 추가.삭제
    const handleToggleFollow = async(userName, isFollowing) => {
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
    }

    useEffect(() => {
        refetch();
    }, []);

    return (
        <FriendListPresenter 
            data={data}
            loading={loading}
            handleToggleFollow={handleToggleFollow}
        />
    );
};