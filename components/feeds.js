import Link from 'next/link'

const Feed = ({feed}) => (
  <li>
    <span>{feed.points || 1}</span>
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
  </li>
)

export default ({feeds, url: {pathname, query}}) => (
  <div>
    <ul>
    {
      feeds.map(f => <Feed key={f.id} feed={f} />)
    }
    </ul>
  </div>
)
