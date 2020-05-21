import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../Routes/Auth";
// import Feed from "../Routes/Feed";
import Daddy from "../Routes/Daddy";
import Daughter from "../Routes/Daughter";
import Search from "../Routes/Search";
import SearchGroup from "../Routes/SearchGroup";
import SearchMe from "../Routes/SearchMe";
import SearchMeGroup from "../Routes/SearchMeGroup";
import ViewApply from "../Routes/ViewApply";
import WriteApply from "../Routes/WriteApply";
import WriteRecruit from "../Routes/WriteRecruit";
import WriteRecruitGroup from "../Routes/WriteRecruitGroup";
import WriteRecruitMe from "../Routes/WriteRecruitMe";
import WriteRecruitMeGroup from "../Routes/WriteRecruitMeGroup";
import ProgressStap from "../Routes/ProgressStap";
import ProgressPost from "../Routes/ProgressPost";
import Comment from "../Routes/Comment";
import Buy from "../Routes/Buy";
import BuyGroup from "../Routes/BuyGroup";
import Apply from "../Routes/Apply";
import ApplyGroup from "../Routes/ApplyGroup";
import ChatRoom from "../Routes/ChatRoom";
import Chat from "../Routes/Chat";
import FriendList from "../Routes/FriendList";
import GroupRoom from "../Routes/GroupRoom";
import GroupRoomMe from "../Routes/GroupRoomMe";
import AddGroupRoom from "../Routes/AddGroupRoom";
import EditProfile from "../Routes/EditProfile";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Daddy} />
        <Route path="/daddy" component={Daddy} />
        <Route path="/daughter" component={Daughter} />
        <Route path="/search/:term" component={Search} />
        <Route path="/searchGroup/:groupRoomId/:term" component={SearchGroup} />
        <Route path="/searchMe/:term" component={SearchMe} />
        <Route path="/searchMeGroup/:groupRoomId/:term" component={SearchMeGroup} />
        <Route path="/viewApply/:postId" component={ViewApply} />
        <Route path="/writeApply/:postId" component={WriteApply} />
        <Route path="/writeRecruit" component={WriteRecruit} />
        <Route path="/writeRecruitGroup/:groupRoomId" component={WriteRecruitGroup} />
        <Route path="/writeRecruitMe" component={WriteRecruitMe} />
        <Route path="/writeRecruitMeGroup/:groupRoomId" component={WriteRecruitMeGroup} />
        <Route path="/writeRecruit/:address" component={WriteRecruit} />
        <Route path="/progressStap/:postId" component={ProgressStap} />
        <Route path="/progress/:postId" component={ProgressPost} />
        <Route path="/comment/:postId" component={Comment} />
        <Route path="/buy" component={Buy} />
        <Route path="/buyGroup/:groupRoomId" component={BuyGroup} />
        <Route path="/apply" component={Apply} />
        <Route path="/applyGroup/:groupRoomId" component={ApplyGroup} />
        <Route path="/chat/:chatRoomId" component={ChatRoom} />
        <Route path="/chat" component={Chat} />
        <Route path="/friendList" component={FriendList} />
        <Route path="/groupRoom/:groupRoomId" component={GroupRoom} />
        <Route path="/groupRoomMe/:groupRoomId" component={GroupRoomMe} />
        <Route path="/addGroupRoom/:userName" component={AddGroupRoom} />
        <Route path="/editProfile/:userName" component={EditProfile} />
        <Route path="/:userName" component={Profile} />
        <Redirect from="*" to="/" />
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Redirect from="*" to="/" />
    </Switch>
);

const Routes = ({ isLoggedIn }) => 
    isLoggedIn? <LoggedInRoutes /> : <LoggedOutRoutes />;


Routes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default Routes;