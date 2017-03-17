var webpack= require('webpack');
module.exports = {
  entry: [
  'script-loader!jquery/dist/jquery.min.js',//jquery path
  'script-loader!foundation-sites/dist/foundation.min.js',
  './app/app.jsx'
  ],
  externals:{
    jquery:'jQuery'

  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
  	 modules: [
 __dirname, 'node_modules'
 ],
  	alias: {
  		Main: 'app/components/Main.jsx',
      Nav: 'app/components/nav.jsx',
  		Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Example: 'app/components/Example.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      OpenWeatherMap: 'app/api/OpenWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      AppCss:'app/styles/app.scss'
  	},
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },             
    ]
  }
  //devtool: 'cheap-module-eval-source-map'
};
