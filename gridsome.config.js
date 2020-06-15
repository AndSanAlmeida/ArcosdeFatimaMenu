// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Arcos de Fátima',
	plugins: [
		{
			use: 'gridsome-source-google-sheets',
			options: {
				sheetId: '1ouO4ZMBJrQXI_XQEildqCByFzpTB4ZHrSkwpaagK7sQ',
				apiKey: 'AIzaSyBL-18fibQfcpCwqJRUYHIL_8X4UOFDFF8',
				// type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
			},
		},
	],
};