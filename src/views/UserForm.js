import m from "mithril";
import User from "../models/User";

export default {
    oninit(vnode) { User.load(vnode.attrs.id) },
    view: () => m("form",
        {
            async onsubmit(e) {
                e.preventDefault();
                await User.save();
                m.route.set("/list");
            }
        },
        [
            m("label.label", "First Name"),
            m("input.input[type=text][placeholder=First Name]", {
                oninput: m.withAttr("value", value => { User.current.firstName = value; }),
                value: User.current.firstName
            }),
            m("label.label", "Last Name"),
            m("input.input[placeholder=Last Name]", {
                oninput: m.withAttr("value", value => { User.current.lastName = value; }),
                value: User.current.lastName
            }),
            m("button.button[type=submit]", "Save")
        ]
    ),
};
