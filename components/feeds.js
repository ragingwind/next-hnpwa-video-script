import Link from 'next/link'

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
        <span>
          <Link href={`/user?id=${feed.user}`}>
            <a>{feed.user}</a>
          </Link>
        </span>
        <span> | </span>
        <span>
          <Link href={`/comments?id=${feed.is}`}>
            <a>{feed.comments_coint || 0} comments</a>
          </Link>
        </span>
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

export default ({feeds, url: {pathname, query}}) => (
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
