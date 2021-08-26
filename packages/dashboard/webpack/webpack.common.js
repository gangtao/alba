const HtmlWebpackPlugin = require("html-webpack-plugin");
const apiMocker = require('mocker-api');
const WebSocketServer = require('websocket').server;

const path = require("path");

const PATHS = {
    local: path.join(__dirname, "../"),
    app: path.join(__dirname, "../src"),
    packages: path.join(__dirname, "../../"),
    root: path.join(__dirname, "../../../"), // the root folder of the project, not current package
};

module.exports = {
    entry: path.resolve(PATHS.app, './main/index.jsx'),
    output: {
        publicPath: 'auto',
        path: path.resolve(PATHS.local, 'build'),
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.tsx', '.ts'],
        modules: [path.resolve(PATHS.root, 'node_modules')],
        alias: {
            '@dataSources': path.resolve(PATHS.app, './dataSources'),
            '@dashboard': path.resolve(PATHS.app),
            '/form': path.resolve(PATHS.app, './form'),
            '/layout': path.resolve(PATHS.app, './layout'),
            '/visualization': path.resolve(PATHS.app, './visualization'),
            '/dataSources': path.resolve(PATHS.app, './dataSources'),
        },
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
            title: "Alba Dashboard",
            template: path.join(__dirname, "../public/index.html")
        }),],
    devServer: {
        host: process.env.HOST, // Defaults to `localhost` port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser
        port: process.env.PORT
    }
}
