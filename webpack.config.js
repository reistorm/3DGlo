// const path = require('path')

// module.exports = {
//     context: path.resolve(__dirname, 'src'),
//     entry: './index.js',
//     output: {
//         filename: 'js/main.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     devServer: {
//         hot: true,
//         static: {
//             directory: './dist',
//             watch: true
//         }
//     }

// }

const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Для всех JS файлов
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                    // babel-loader будет брать настройки из .babelrc
                }
            }
        ]
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    }
};