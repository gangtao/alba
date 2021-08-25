const HtmlWebpackPlugin = require("html-webpack-plugin");
const apiMocker = require('mocker-api');

const path = require("path");

const PATHS = {
    demo: path.join(__dirname, "../"),
    app: path.join(__dirname, "../src"),
    packages: path.join(__dirname, "../../"),
    root: path.join(__dirname, "../../../"), // the root folder of the project, not current package
};

module.exports = {
    entry: path.resolve(PATHS.app, 'index.jsx'),
    output: {
        publicPath: 'auto',
        path: path.resolve(PATHS.demo, 'build'),
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.tsx', '.ts'],
        modules: [path.resolve(PATHS.root, 'node_modules')],
        fallback: {
            assert: false,
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: 'babel-loader',
                include: [PATHS.app, PATHS.packages],  // need include the dependant packages
                exclude: [path.resolve(PATHS.root, 'node_modules')],
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript', '@babel/preset-env']
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Alba Demo",
            template: path.join(__dirname, "../public/index.html")
        }),],
    devServer: {
        host: process.env.HOST, // Defaults to `localhost` port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser
        port: process.env.PORT,
        onBeforeSetupMiddleware(server) {
            console.log("check if mock is on");
            console.log(process.env.MOCK);
            if (process.env.MOCK) {
                console.log("start mock server");
                apiMocker(server.app, path.resolve(PATHS.demo, 'mock/mocker'), {
                    proxy: {
                        '/repos/(.*)': 'https://api.timeplus.io/'
                    },
                    changeHost: true
                })
            }
        },
    }
}
