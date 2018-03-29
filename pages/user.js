import {Component} from 'react'
import Page from '../components/page'
import fetch from '../lib/fetch'

const User = ({user}) => (
  <div>
		<h1>{user.id}</h1>
		<div>Created: {user.created}</div>
		<div>Karma: {user.karma}</div>
		<div className='about'
      dangerouslySetInnerHTML={
        {__html: user.about || ''}
      }>
    </div>
		<style jsx>{`
      {
        padding: 3px;
      }
			.about {
				padding-top: 15px;
				word-break: break-word
			}
		`}</style>
	</div>
)

export default class extends Component {
	static async getInitialProps({query}) {
		return {
			user: await fetch(`/user/${query.id}`)
		}
	}

	render() {
		return (
			<Page>
				<User user={this.props.user}/>
			</Page>
		)
	}
}
