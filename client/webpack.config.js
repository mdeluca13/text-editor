const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');


module.exports = () => {
  return {
    mode: 'development',
    entry: {
      // entry points
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      // outputs for bundles
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // webpack plugins
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE: Just Another Text Editor'
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      new WebpackPwaManifest({
				fingerprints: false,
				inject: true,
				name: 'Just Another Text Editor',
				short_name: 'JATE',
				description: 'Use JATE online or offline to add text.',
				background_color: '#272822',
				theme_color: '#272822',
				start_url: '/',
				publicPath: '/',
				icons: [
					{
						src: path.resolve('src/images/logo.png'),
						sizes: [96, 128, 192, 256, 384, 512],
						destination: path.join('assets', 'icons'),
					},
				],
			}),
    ],

    module: {
      rules: [
        // loaders
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};