 module.exports = {
     entry: './src/app.js', // en entrer le seul fichier qui t'intesse --> le fichier main de notre application
     output: {
         path: './public',// mettre dans {}
         filename: 'app.bundle.js' // appelle le {}
     },

     module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }

 };