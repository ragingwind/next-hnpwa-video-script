import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import Manifest from 'next-manifest/manifest'

export default class extends Document {
	static getInitialProps({renderPage}) {
		return {
			...renderPage(),
			styles: flush()
		}
  }

	render() {
		return (
			<html lang="en">
				<Head>
					<title>HNPWA with Next.js</title>
					<Manifest themeColor='#000000' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
