const path = require('path'); 


module.exports = {
mode :'development',  
entry: "./src/app.js",
output : {
    path:path.join(__dirname,'public'),
    filename: 'bundle.js'
},
module: {



    rules:[
      {  test: /\.(svg|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'public/images/[name].[ext]',

      }}
      ,
      
      
      
      {
        loader:'babel-loader',
        test :/\.js$/,
        exclude:/node_modules/
    },

  {
    test: /\.scss$/,
    use:[
      'style-loader',
      'css-loader',
      'sass-loader'

    ]
  }]
},
devtool:'inline-cheap-module-source-map',

devServer : {
  static: {
    directory: path.join(__dirname, 'public'),
    
  },  
  historyApiFallback: true,
}

}
;