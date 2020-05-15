import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const TimeIapse = ({ createAt }) => {
    const sec = 60;
    const mins = 60;
    const hours = 24;
    const days = 31;
    const month =12;
    let msg = "";

    const today = moment().format("YYYY-MM-DDTHH:mm:ssZ");
    const time = moment(createAt).format("YYYY-MM-DDTHH:mm:ssZ");
    
    const diffTime = {
        year: moment(today, "YYYY-MM-DDTHH:mm:ssZ").diff(time, "year"),
        month: moment(today, "YYYY-MM-DDTHH:mm:ssZ").diff(time, "month"),
        day: moment(today, "YYYY-MM-DDTHH:mm:ssZ").diff(time, "day"),
        hour: moment(today, "YYYY-MM-DDTHH:mm:ssZ").diff(time, "hour"),
        minute: moment(today, "YYYY-MM-DDTHH:mm:ssZ").diff(time, "minute"),
        second: moment(today, "YYYY-MM-DDTHH:mm:ssZ").diff(time, "second")
    }

   if(time === "0000-00-00 00:00:00"){
        msg = "";
   }else {
        if(diffTime.second < sec){
            msg = "방금";
        }else if(diffTime.minute < mins){
            msg = Math.floor(diffTime.minute) + "분 전";
        }else if(diffTime.hour < hours){
            msg=Math.floor(diffTime.hour) + "시간 전";
        }else if(diffTime.day < days){
            msg=Math.floor(diffTime.day) + "일 전";
        }else if(diffTime.month < month){
            msg=Math.floor(diffTime.month) + "달 전";
        }else {
            msg=Math.floor(diffTime.year) + "년 전";
        }
        return msg;
   }

    return <span>{msg}</span>;
};

TimeIapse.propTypes = {
    createAt: PropTypes.string.isRequired
};

export default TimeIapse;
