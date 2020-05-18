import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import axios from "axios";
import AddRoomPresenter from "./AddRoomPresenter";
import { CREATE_GROUPROOM, SEE_FOLLOWING } from "./AddRoomQueries";

export default ({ history, match: { params: { userName } }}) => {
    const [createGroupRoomMutation] = useMutation(CREATE_GROUPROOM);
    // 친구 목록 데이터
    const { data, loading, refetch } = useQuery(SEE_FOLLOWING);
    const [right, setRight] = useState([]);

    // 그룹 이름
    const [roomName, setRoomName] = useState("");
    const [coverPhoto, setCoverPhoto] = useState("https://pbs.twimg.com/profile_images/926440213475246080/BkBTGG8b_400x400.jpg");

    const handleChangeRoomName = e => {
        setRoomName(e.target.value);
    };
    
    const url = process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://melona-backend.herokuapp.com"

    // 커버 이미지
    const handleUpload = async(e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        try {
            const {
                data: { location }
            } = await axios.post(`${url}/api/upload`, formData, {
                headers: {
                    "content-type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            setCoverPhoto(location);
        } catch (e) {
            toast.error("업로드 실패하였습니다.");
        }
    };

    // Mutation
    const handleConfirm = async() => {
        try {
            await createGroupRoomMutation({
                variables: {
                    coverPhoto, 
                    roomName, 
                    userName: right
                }
            });
        } catch (e) {
            toast.error("업로드 실패하였습니다.");
        }
        toast.success("완료 되었습니다.");
        history.push(`/${userName}`);
    };

    useEffect(() => {
        refetch();
    }, []);

    return (
        <AddRoomPresenter 
            data={data}
            right={right}
            setRight={setRight}
            loading={loading}
            roomName={roomName}
            coverPhoto={coverPhoto}
            handleChangeRoomName={handleChangeRoomName}
            handleUpload={handleUpload}
            handleConfirm={handleConfirm}
        />
    );
};