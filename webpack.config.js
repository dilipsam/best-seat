const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');


// TODO: https://webpack.js.org/guides/asset-management/#loading-data add config through a JSON file
// TODO: Start using TS and sourcemaps

module.exports = {
    entry: {
        app: './ui/index.jsx'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        // https://github.com/NekR/offline-plugin/blob/master/docs/examples/SPA.md
        // new OfflinePlugin({
        //     externals: [
        //         '/',
        //         '/site.webmanifest',
        //         '/favicon.ico',
        //         '/favicon-16x16.png',
        //         '/favicon-32x32.png'
        //     ],
        //     appShell: '/'
        //
        // }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'BookASeat',
            template: "index.html"
        }),
        new CopyPlugin([{
            from: 'static/'
        }])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
