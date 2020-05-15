import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import GroupRoomPresenter from "./GroupRoomPresenter";
import { 
    SEE_GROUPROOM, 
    EDIT_GROUPROOM, 
    ADD_MEMBER, 
    DELETE_MEMBER 
} from "./GroupRoomQueries";

export default ({ match: { params: { groupRoomId } }}) => {
    const [editGroupRoomMutation] = useMutation(EDIT_GROUPROOM);
    const [addUserMemberMutation] = useMutation(ADD_MEMBER);
    const [deleteUserMemberMutation] = useMutation(DELETE_MEMBER);
    const { data, loading, refetch } = useQuery(SEE_GROUPROOM, {
        variables: { groupRoomId }
    });

    // 진행 상황 보기
    const [progressOpen, setProgressOpen] = useState(false);
    
    const handleClickOpenProgress = () => {
        setProgressOpen(true);
    };

    const handleCloseProgress = () => {
        setProgressOpen(false);
    };
    
    // 그룹 이름 편집
    const [formOpen, setOpen] = useState(false);
    const [inputText, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = async() => {
        setOpen(false);
        await editGroupRoomMutation({
            variables: {
                groupRoomId,
                roomName: inputText
            }
        });
        toast.success(`그룹 이름: ${inputText} / 변경 되었습니다.`);
        setInput("");
        refetch();
    };

    // 인원 추가
    const [memberOpen, setOpenMember] = useState(false);
    const [right, setRight] = useState([]);


    const handleClickOpenMember = () => {
        setOpenMember(true);
    };

    const handleCloseMember = () => {
        setOpenMember(false);
    };

    const handleAddMember = async(groupMemberId) => {
        setOpenMember(false);
        await addUserMemberMutation({
            variables: {
                groupMemberId,
                userNameArr: right
            }
        });
        toast.success("멤버가 추가 되었습니다.");
        setRight([]);
        refetch();
    };

    // 인원 제거
    const [memberOpenDel, setOpenMemberDel] = useState(false);
    const [rightDel, setRightDel] = useState([]);


    const handleClickOpenMemberDel = () => {
        setOpenMemberDel(true);
    };

    const handleCloseMemberDel = () => {
        setOpenMemberDel(false);
    };

    const handleAddMemberDel = async(groupMemberId) => {
        setOpenMemberDel(false);
        await deleteUserMemberMutation({
            variables: {
                groupMemberId,
                userNameArr: rightDel
            }
        });
        toast.success("멤버가 삭제 되었습니다.");
        setRightDel([]);
        refetch();
    };

    useEffect(() => {
        refetch();
    }, []);

    return (
        <GroupRoomPresenter 
            data={data}
            loading={loading}
            groupRoomId={groupRoomId}
            progressOpen={progressOpen}
            formOpen={formOpen}
            inputText={inputText}
            memberOpen={memberOpen}
            right={right}
            setRight={setRight}
            memberOpenDel={memberOpenDel}
            rightDel={rightDel}
            setRightDel={setRightDel}
            handleClickOpenProgress={handleClickOpenProgress}
            handleCloseProgress={handleCloseProgress}
            handleChange={handleChange}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            handleEdit={handleEdit}
            handleClickOpenMember={handleClickOpenMember}
            handleCloseMember={handleCloseMember}
            handleAddMember={handleAddMember}
            handleClickOpenMemberDel={handleClickOpenMemberDel}
            handleCloseMemberDel={handleCloseMemberDel}
            handleAddMemberDel={handleAddMemberDel}
        />
    );
};