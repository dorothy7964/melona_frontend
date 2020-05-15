import React, { useState } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import EditProfilePresenter from "./EditProfilePresenter";
import {  GET_USER, EDIT_USER, EDIT_PASSWORD } from "./EditProfileQueries";

export default ({ history, match: { params: { userName} } }) => {
    const { data, loading } = useQuery(GET_USER, {
        variables: { userName },
    });
    const [pwText] = useState(false);
    const [editUserMutation] = useMutation(EDIT_USER);
    const [editPasswordMutation] = useMutation(EDIT_PASSWORD);

    const handleConfirm = async(
        userName, 
        email, 
        password,
        passwordConfirm
    ) => {
        try {
            if (password === passwordConfirm) {
                if (password !== "" && passwordConfirm !== "") {
                    try {
                        await editPasswordMutation({
                            variables: {
                                password
                            }
                        });
                    } catch (e) {
                        return toast.error("비밀번호가 변경되지 않습니다.");
                    }
                } 
            } else {
                return toast.error("비밀번호가 변경되지 않습니다.");
            }
            const {
                data: { editUser }
            } = await editUserMutation({
                variables: {
                    userName,
                    email,
                }
            });
            if (!editUser){
                toast.error("프로필 편집 되지 않았습니다.");
            } else {
                toast.success("프로필이 편집 되었습니다.");
            }
            history.push(`/${userName}`)
        } catch (e) {
            if (
                e.message === "GraphQL error: A unique constraint would be violated on User. Details: Field name = userName"
            ) {
                toast.error("이미 존재하는 이름 입니다.");
            } else if (
                e.message === "GraphQL error: A unique constraint would be violated on User. Details: Field name = email"
            ) {
                toast.error("이미 존재하는 이메일 입니다.");
            } else {
                toast.error(e.message);
            }
        }
    };
    
    return (
        <EditProfilePresenter 
            data={data}
            loading={loading}
            pwText={pwText}
            handleConfirm={handleConfirm}
        />
    );
};

