import m from "mithril";
import User from "../models/User";

export default {
    async oninit() {  User.loadList() },
    view() { 
        return m("div.user-list", User.list.map(user => (
            m("div.user-list-item", user.firstName + " " + user.lastName)
        )));
    },
};
