import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useQuery, useMutation } from "react-apollo-hooks";
import GroupRoomPresenter from "./GroupRoomPresenter";
import {
  SEE_GROUPROOM,
  EDIT_GROUPROOM,
  ADD_MEMBER,
  DELETE_MEMBER
} from "./GroupRoomQueries";

export default ({
  match: {
    params: { groupRoomId }
  }
}) => {
  const [fileLoading, setFileLoading] = useState(false);
  const [addUserMemberMutation] = useMutation(ADD_MEMBER);
  const [deleteUserMemberMutation] = useMutation(DELETE_MEMBER);
  const [editGroupRoomMutation] = useMutation(EDIT_GROUPROOM, {
    refetchQueries: () => [
      {
        query: SEE_GROUPROOM,
        variables: { groupRoomId }
      }
    ]
  });
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

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = async () => {
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

  const handleAddMember = async (groupMemberId) => {
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

  const handleAddMemberDel = async (groupMemberId) => {
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

  // coverPhoto 편집
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://melona-backend.herokuapp.com";

  const handleCoverPhoto = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setFileLoading(true);
      const {
        data: { location }
      } = await axios.post(`${url}/api/upload`, formData, {
        headers: {
          "content-type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*"
        }
      });
      const {
        data: { editGroupRoom }
      } = await editGroupRoomMutation({
        variables: {
          groupRoomId,
          coverPhoto: location
        }
      });
      if (editGroupRoom) {
        toast.success("커버 사진이 변경 되었습니다.");
      }
    } catch (e) {
      toast.error("업로드 실패하였습니다.");
    } finally {
      setFileLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <GroupRoomPresenter
      data={data}
      loading={loading}
      fileLoading={fileLoading}
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
      handleCoverPhoto={handleCoverPhoto}
    />
  );
};
