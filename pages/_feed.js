import {Component} from 'react'
import Link from 'next/link'
import Page from '../components/page'
import fetch from '../lib/fetch'

const Feed = ({feed}) => (
  <li>
    <span className='point'>{feed.points || 1}</span>
    <span>
      <div>
        <a href={feed.url} target="_blank">
          {feed.title}
        </a>
      </div>
      <div>
        <Link href={`/user?id=${feed.user}`}>
          <a>{feed.user}</a>
        </Link>
        {feed.user && <span> | </span>}
        <Link href={`/comments?id=${feed.id}`}>
          <a>{feed.comments_count || 0} comments</a>
        </Link>
      </div>
    </span>
    <style jsx>{`
			li {
				list-style-type: none;
				position: relative;
				padding: 20px 30px 20px 80px;
				border-bottom: 1px solid #eee;
				line-height: 20px;
			};
      .point {
				font-size: 18px;
				font-weight: 700;
				position: absolute;
				top: 50%;
				left: 0;
				width: 80px;
				text-align: center;
				margin-top: -10px;
			};
		`}</style>
  </li>
)

const Feeds = ({feeds, url: {pathname, query}}) => (
  <div>
    <ul>
    {
      feeds.map(f => <Feed key={f.id} feed={f} />)
    }
    </ul>
    <style jsx>{`
			ul {
				padding: 0;
			};
		`}</style>
  </div>
)

export default class extends Component {
  static async getInitialProps({pathname, query}) {
    const feed = pathname === '/' ? '/news' : pathname
    const page = query.page ? `/${query.page}` : '1'

    return {
      feeds: await fetch(`${feed}/${page}`)
    }
  }
  render () {
    return (
      <Page>
        <Feeds
          feeds={this.props.feeds}
          url={this.props.url}
        />
      </Page>
    )
  }
}
