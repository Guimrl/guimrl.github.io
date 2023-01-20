

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module:  {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}