const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "app.js",
    },

    module: {
        loaders: [
            {
                loader: "babel-loader",

                include: [
                    path.resolve(__dirname, "src"),
                ],

                test: /.js$/,

                query: {
                    plugins: ["transform-runtime"],
                    presets: ["es2015", "es2016", "es2017"]
                }
            }
        ]
    }
};
