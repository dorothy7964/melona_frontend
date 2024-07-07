import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import axios from "axios";
import EditProfilePresenter from "./EditProfilePresenter";
import {
  GET_USER,
  EDIT_USER,
  EDIT_PASSWORD,
  EDIT_AVATAR,
} from "./EditProfileQueries";

export default ({
  history,
  match: {
    params: { userName },
  },
}) => {
  const [fileLoading, setFileLoading] = useState(false);
  const { data, loading, refetch } = useQuery(GET_USER, {
    variables: { userName },
  });
  const [editUserMutation] = useMutation(EDIT_USER);
  const [editPasswordMutation] = useMutation(EDIT_PASSWORD);
  const [editAvatarMutaion] = useMutation(EDIT_AVATAR, {
    refetchQueries: () => [
      {
        query: GET_USER,
        variables: { userName },
      },
    ],
  });

  const handleConfirm = async (userName, email, password, passwordConfirm) => {
    try {
      if (password === passwordConfirm) {
        if (password !== "" && passwordConfirm !== "") {
          try {
            await editPasswordMutation({
              variables: {
                password,
              },
            });
          } catch (e) {
            return toast.error("비밀번호가 변경되지 않습니다.");
          }
        }
      } else {
        return toast.error("비밀번호가 변경되지 않습니다.");
      }
      const {
        data: { editUser },
      } = await editUserMutation({
        variables: {
          userName,
          email,
        },
      });
      if (!editUser) {
        toast.error("프로필 편집 되지 않았습니다.");
      } else {
        toast.success("프로필이 편집 되었습니다.");
      }
      history.push(`/${userName}`);
    } catch (e) {
      if (
        e.message ===
        "GraphQL error: A unique constraint would be violated on User. Details: Field name = userName"
      ) {
        toast.error("이미 존재하는 이름 입니다.");
      } else if (
        e.message ===
        "GraphQL error: A unique constraint would be violated on User. Details: Field name = email"
      ) {
        toast.error("이미 존재하는 이메일 입니다.");
      } else {
        toast.error(e.message);
      }
    }
  };

  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://melona-backend.herokuapp.com";

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setFileLoading(true);
      const {
        data: { location },
      } = await axios.post(`${url}/api/upload`, formData, {
        headers: {
          "content-type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const {
        data: { editAvatar },
      } = await editAvatarMutaion({
        variables: {
          avatar: location,
        },
      });
      if (editAvatar) {
        toast.success("업로드 되었습니다.");
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
    <EditProfilePresenter
      data={data}
      loading={loading}
      fileLoading={fileLoading}
      handleConfirm={handleConfirm}
      handleChange={handleChange}
    />
  );
};
