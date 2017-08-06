import m from "mithril";
import Layout from "./views/Layout";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";

m.route(document.body, "/list", {
    "/list": {
        render() {
            return m(Layout, m(UserList));
        },
    },
    "/edit/:id": {
        render(vnode) {
            return m(Layout, m(UserForm, vnode.attrs));
        },
    },
});
