const withManifest = require('next-manifest')

module.exports = withManifest({
	manifest: {
		icons: {
			src: './assets/icon-512x512.png'
		}
	}
})
