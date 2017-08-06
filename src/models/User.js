import m from "mithril";

export default {
    list: [],
    async loadList() {
        const response = await m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        });

        this.list = response.data;
    },

    current: {},
    async load(id) {
        const response = await m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true
        });

        this.current = response;
    },

    async save() {
        await m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + this.current.id,
            data: this.current,
            withCredentials: true,
        })
    }
};
