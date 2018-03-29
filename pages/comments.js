import {Component} from 'react'
import Link from 'next/link'
import Page from '../components/page'
import fetch from '../lib/fetch'

const Comment = ({comment}) => (
	<div className="comment">
		<div dangerouslySetInnerHTML={{__html: comment.content}}></div>
		<div>
			<Link href={`/user?id=${comment.user}`}><a>{comment.user}</a></Link> | {comment.time_ago}
		</div>
		<style jsx>{`
			.comment {
				margin: 15px 0 15px 0;
				border-top: 1px solid grey;
			};
		`}</style>
	</div>
)

const Comments = ({item}) => (
	<div>
		<h2>
			<a href={item.url} target="_black">{item.title}</a>
		</h2>
		<div>
			<Link href={`/user?id=${item.user}`}>
				<a>{item.user}</a>
			</Link>
      <span> | </span>
      <span>{item.points} points</span>
		</div>
		<div>
			{
        item.comments.map(c => (
            <Comment key={c.id} comment={c} />)
        )
      }
		</div>
    <style jsx>{`
			{
				padding: 5px;
			};
		`}</style>
	</div>
)

export default class extends Component {
	static async getInitialProps({query}) {
		return {
			item: await fetch(`/item/${query.id}`)
		}
	}

	render() {
		return (
			<Page>
				<Comments item={this.props.item}/>
			</Page>
		)
	}
}
