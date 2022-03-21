const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = options => {
    return {
        mode: 'development',
        entry: './index.js',
        output: {
            filename: 'bundle.js',
            publicPath: "auto",
            uniqueName: "mfe2"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    // loader: 'babel-loader',
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                                presets: ['@babel/react', '@babel/env']
                            }
                        },
                    ],
                }
                // {
                //     test: /.js$/,
                //     exclude: /node_modules/,
                //     use: [
                //         {
                //             loader: 'babel-loader',
                //             options: {
                //                 cacheDirectory: true,
                //                 // presets: [
                //                 //     '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
                //                 //     '@babel/preset-react',
                //                 // ],
                //                 presets: ['@babel/react', '@babel/env']
                //             }
                //         },
                //     ],
                // },
            ],
        },
        plugins: [
            new ModuleFederationPlugin({

                // For remotes (please adjust)
                name: "react",
                library: {type: "var", name: "react"},
                filename: "remoteEntry.js", // <-- Meta Data
                exposes: {
                    './web-components': './bootstrap.js',
                },
                shared: ["react", "react-dom"]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: './*.html'
                    }
                ]
            })
        ],
        devServer: {
            port: 3000
        }
    }
}
//
// module.exports = {
//     mode: 'development',
//     devServer: {
//         port: 3000,
//     },
//     module: {
//         rules: [
//             {
//                 /* The following line to ask babel
//                      to compile any file with extension
//                      .js */
//                 test: /\.js?$/,
//                 /* exclude node_modules directory from babel.
//                     Babel will not compile any files in this directory*/
//                 exclude: /node_modules/,
//                 // To Use babel Loader
//                 use: {
//                     loader:
//                         'babel-loader',
//                     options: {
//                         presets: [
//                             '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
//                             '@babel/preset-react',
//                         ], // to compile react to ES5
//                         plugins: ['syntax-dynamic-import']
//                     },
//                 }
//             },
//         ],
//     },
//     plugins: [
//         new ModuleFederationPlugin(
//             {
//                 name: 'mfe2',
//                 filename:
//                     'remoteEntry.js',
//                 exposes: {
//                     './Button':
//                         './src/Button',
//                 },
//                 shared: ['react']
//             }
//         ),
//         new HtmlWebpackPlugin({
//             template:
//                 './public/index.html',
//         }),
//     ],
// };
