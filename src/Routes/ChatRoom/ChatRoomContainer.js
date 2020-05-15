import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";
import { 
    CHATROOMS_QUERY, 
    SEE_CHATROOM, 
    DELETE_CHATROOM,
    SEND_MESSAGE, 
    READCOUNT_MESSAGE
} from "./ChatRoomQueries";
import ChatRoomPresenter from "./ChatRoomPresenter";
import useInput from "@am-hooks/use-input";

export default ({ match: { params: { chatRoomId } }, history}) => {
    const messageInput = useInput("");
    const chatLocation = useRef(null);
    const [sendLoading, setSendLoading] = useState(false);
    const [deleteRoomMutaion] = useMutation(DELETE_CHATROOM);
    const { data, loading } = useQuery(SEE_CHATROOM, {
        variables: {
            id: chatRoomId
        }
    });
    const [sendMessageMutation] = useMutation(SEND_MESSAGE, {
        refetchQueries:() => [{
            query: SEE_CHATROOM,
            variables:{
                id: chatRoomId
            }
        }],
        variables: {
            message: messageInput.value,
            chatRoomId
        }
    });
    const [readcountMsgMutation] = useMutation(READCOUNT_MESSAGE, {
        refetchQueries:() => [{
            query: SEE_CHATROOM,
            variables:{
                id: chatRoomId
            }
        }],
        variables: {
            chatRoomId
        }
    });

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log("확인");
        try {
            setSendLoading(true);
            messageInput.setValue("");
            await sendMessageMutation();
            await readcountMsgMutation();
        } catch {
            console.log(e);
            toast.error("Cant send messageInput");
        } finally {
            setSendLoading(false);
        }
    };

    const onKeyPress = async(e) => {
        const { which } = e;
        if(which === 13){
            e.preventDefault();
            try {
                setSendLoading(true);
                messageInput.setValue("");
                await sendMessageMutation();
                await readcountMsgMutation();
            } catch {
                console.log(e);
            } finally {
                setSendLoading(false);
            }
       }
    };

    const handleDeleteRoom = async (chatRoomId)=>{
        history.push("/chat");
        try {
            await deleteRoomMutaion({
                refetchQueries:() => [{
                    query: CHATROOMS_QUERY,
                }],
                variables: {
                    chatRoomId
                }
            }); 
        } catch(e) {
            console.log(e);
        }
    };

    const scrollBottom = () => {
        chatLocation.current.scrollIntoView({ 
            block: 'end', behavior: 'smooth' 
        });
    };

    useEffect(()=>{
        if (!loading) {
            scrollBottom();
        }
    }, [data])

    return (
        <ChatRoomPresenter 
            chatRoomId={chatRoomId}
            data={data}
            loading={loading}
            newMessage={messageInput}
            sendLoading={sendLoading}
            chatLocation={chatLocation}
            onSubmit={onSubmit}
            onKeyPress={onKeyPress}
            handleDeleteRoom={handleDeleteRoom}
        />
    );
};
