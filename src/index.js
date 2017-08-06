import m from "mithril";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";

m.route(document.body, "/list", {
    "/list": UserList,
    "/edit/:id": UserForm,
});
