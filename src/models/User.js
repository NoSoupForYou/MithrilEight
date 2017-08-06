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

        return response;
    },
};
