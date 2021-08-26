const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const moment = require('moment');

const pjson = require('../package.json');

const PROJECT_NAME = pjson.name;
const PROJECT_VERSION = pjson.version;

exports.loadCSS = ({ include, exclude } = {}) => ({
    module: {
        rules: [{
            test: /\.css$/, include, exclude,
            use: ["style-loader", "css-loader"],
        },
        ],
    },
});

exports.extractCSS = ({ include, exclude, use = [] }) => { // Output extracted CSS to a file
    const plugin = new MiniCssExtractPlugin({
        filename: "[name].css",
    });
    return {
        module: {
            rules: [{
                test: /\.css$/, include, exclude,
                use: [MiniCssExtractPlugin.loader,
                ].concat(use),
            },
            ],
        },
        plugins: [plugin],
    };
};

exports.minifyJavaScript = () => ({
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
});

exports.clean = path => ({
    plugins: [new CleanWebpackPlugin()],
});

exports.manifest = path => ({
    plugins: [new WebpackManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: './',
        generate: (seed, files) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
  
          return {
            build: {
              name: PROJECT_NAME,
              time: moment().format(),
              version: `${PROJECT_VERSION}-SNAPSHOT`,
            },
            status: 'UP',
            files: manifestFiles,
          };
        },
      })]
});


