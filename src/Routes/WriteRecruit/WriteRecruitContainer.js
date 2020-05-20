import React, { useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { useMutation } from "react-apollo-hooks";
import { categoryState, categoryArray } from "../../Hooks/Category";
import WriteRecruitPresenter from "./WriteRecruitPresenter";
import { CREATE_BUY } from "./WriteRecruitQueries";


export default ({ location: { pathname }}) => {
    return "test"
    // const [action, setAction] = useState("view");
    // const [createBuyMutation] = useMutation(CREATE_BUY);

    // // CheckboxLabels
    // const [checkbox, setCheckbox] = useState(categoryState);
    // const handleCheckbox = e => {
    //     setCheckbox({ ...checkbox, [e.target.name]: e.target.checked });
    // };

    // // DatePicker
    // const [selectedDate, handleDateChange] = useState(new Date());

    // // confirm Mutation
    // const handleConfirm = async() => {
    //     // CheckboxLabels
    //     let checkArray = [];
    //     for (var prop in checkbox) {
    //         if (checkbox[prop] === true ) {
    //             checkArray.push(prop);
    //         }
    //     }
    //     if (checkArray.length === 0) {
    //         return toast.error("카테고리를 선택 해주세요.");
    //     }
        
    //     // GoogleMaps
    //     let location;
    //     if (pathname === "/writeRecruit" || pathname === "/writeRecruit/") {
    //         return toast.error("지역을 작성 해주세요.");
    //     } else {
    //         const locationSplit = pathname.split("/writeRecruit/");
    //         location = locationSplit[1];
    //     }

    //     // DatePicker
    //     const date = moment(selectedDate).format("YYYY-MM-DDTHH:mm:ssZ");
    //     const dateSplit = date.split("T");
    //     const lastDate = dateSplit[0];


    //     // Mutation
    //     try {
    //         await createBuyMutation({
    //             variables: {
    //                 location,
    //                 lastDate,
    //                 categoryText: checkArray
    //             }   
    //         }); 
    //         toast.success("작성이 완료 되었습니다.");
    //     } catch(e) {
    //         console.log(e);
    //     }
    //     setTimeout(() => setAction("feed"), 1000);
    // };

    // return (
    //     <WriteRecruitPresenter 
    //         action={action}
    //         checkbox={checkbox}
    //         categoryArray={categoryArray}
    //         handleCheckbox={handleCheckbox}
    //         selectedDate={selectedDate}
    //         handleDateChange={handleDateChange}
    //         handleConfirm={handleConfirm}
    //         pathname={pathname}
    //     />
    // );
};