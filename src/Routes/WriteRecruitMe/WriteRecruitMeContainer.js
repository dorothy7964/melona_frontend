import React, { useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { useMutation } from "react-apollo-hooks";
import { categoryArray, categoryObj } from "../../Hooks/Category";
import WriteRecruitMePresenter from "./WriteRecruitMePresenter";
import { CREATE_BUYME, CREATE_CONTENTS, CONNECT_CONTENTS } from "./WriteRecruitQueries";

export default ({ location: { pathname }}) => {
    const [action, setAction] = useState("view");
    const [createBuyMeMutation] = useMutation(CREATE_BUYME);
    const [createContentsMutation] = useMutation(CREATE_CONTENTS);
    const [coonnectContentsMutation] = useMutation(CONNECT_CONTENTS);
    
    // categoryId.postId
    const [categoryIdState] = useState(categoryObj);
    const [postId, setPostId] = useState("");

    // CheckboxRadio
    const [checkbox, setCheckbox] = useState(categoryArray[0]);
    const handleCheckbox = e => {
        setCheckbox(e.target.value);
    };

    // DatePicker
    const [selectedDate, handleDateChange] = useState(new Date());

    // contentText
    const [inputText, setInput] = useState("");
    const handleChange = e => {
        setInput(e.target.value);
    };

    const createBuyMe = async() => {
        // contentText
        if (inputText === ""){
            return toast.error("카테고리 내용을 작성해주세요.");
        }

        // GoogleMaps
        let location;
        if (pathname === "/writeRecruitMe" || pathname === "/writeRecruitMe/") {
            return toast.error("지역을 작성 해주세요.");
        } else {
            const locationSplit = pathname.split("/writeRecruitMe/");
            location = locationSplit[1];
        }

        // DatePicker
        const date = moment(selectedDate).format("YYYY-MM-DDTHH:mm:ssZ");
        const dateSplit = date.split("T");
        const lastDate = dateSplit[0];

        // Mutation
        try {
            const {
                data: {
                    createBuyMe: {
                        category
                    }
                }
            } = await createBuyMeMutation({
                variables: {
                    location,
                    lastDate,
                    categoryText: checkbox,
                    contentText: inputText
                }   
            });
            setPostId(category.post.id);
            categoryIdState[checkbox] = category.id;
        } catch(e) {
            console.log(e);
        }
    };

    const handleConfirm = () => {
         // contentText
        if (inputText === ""){
            return toast.error("카테고리 내용을 작성해주세요.");
        }
        // GoogleMaps
        if (pathname === "/writeRecruitMe" || pathname === "/writeRecruitMe/") {
            return toast.error("지역을 작성 해주세요.");
        } 
        createBuyMe();
        toast.success("작성이 완료 되었습니다.");
        setTimeout(() => setAction("feed"), 1000);
    };

    const handleAddContent = () => {
        // contentText
        if (inputText === ""){
            return toast.error("카테고리 내용을 작성해주세요.");
        }
        // GoogleMaps
        if (pathname === "/writeRecruitMe" || pathname === "/writeRecruitMe/") {
            return toast.error("지역을 작성 해주세요.");
        } 
        createBuyMe();
        setInput("");
        toast.success("다음 페이지로 이동합니다.");
        setTimeout(() => setAction("add"), 1000);
    };


    const addContent = async() => {
        if (inputText === ""){
            return toast.error("카테고리 내용을 작성해주세요.");
        }
        if (categoryIdState[checkbox] === "") {
            const { 
                data: {
                    createContents: {
                        category
                    }
                }
             } = await createContentsMutation({
                variables: {
                    postId,
                    categoryText: checkbox,
                    contentText: inputText
                }
            });
            categoryIdState[checkbox] = category.id
            setInput("");
        } else {
            await coonnectContentsMutation({
                variables: {
                    text: inputText,
                    categoryId: categoryIdState[checkbox]
                }
            });
            setInput("");
        }
    };

    const handlePlusContent = async() => {
        // contentText
        if (inputText === ""){
            return toast.error("카테고리 내용을 작성해주세요.");
        }
        addContent();
        toast.success("더쓰기");
    };

    const handleAddConfirm = () => {
        // contentText
        if (inputText === ""){
            return toast.error("카테고리 내용을 작성해주세요.");
        }
        addContent();
        toast.success("작성이 완료 되었습니다.");
        setTimeout(() => setAction("feed"), 1000);
    };

    return (
        <WriteRecruitMePresenter 
            action={action}
            checkbox={checkbox}
            categoryArray={categoryArray}
            selectedDate={selectedDate}
            inputText={inputText}
            handleCheckbox={handleCheckbox}
            handleDateChange={handleDateChange}
            handleChange={handleChange}
            handleConfirm={handleConfirm}
            handleAddContent={handleAddContent}
            handlePlusContent={handlePlusContent}
            handleAddConfirm={handleAddConfirm}
        />
    );
};


