module.exports = [
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
  {
	test: /\.(css)$/,
	use: [
		'style-loader', 
		{ 
			loader: 'css-loader', 
			options: {
				url: {
					filter: (url, resourcePath) => {
				  		// resourcePath - path to css file
				  		// Don't handle `data:` urls
						if (url.startsWith('data:')) {
							return false;
						}
						return true;
					},
				},
			} 
		}
	]
  }
]