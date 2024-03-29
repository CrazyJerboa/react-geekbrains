const path = require('path');

module.exports = {
    entry: {
        app: './static_src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'static/build'),
        filename: 'app.js',
        publicPath: 'static/build/',
    },
    resolve: {
        modules: [path.resolve(__dirname, 'static_src'), 'node_modules'],
        extensions: ['.jsx', '.js'],
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'static_src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: [
                                [
                                    "@babel/plugin-proposal-class-properties",
                                    {
                                        "loose": true
                                    }
                                ]
                            ]
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
    devtool: 'cheap-inline-module-source-map'
};