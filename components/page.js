import Link from 'next/link'

const Menu = ({href, label}) => (
  <span>
    <Link href={href}><a>{label}</a></Link>
    <style jsx>{`
			{
				padding: 6px 4px;
			}
			a {
				color: white;
				text-decoration: none;
				font-size: 16px;
			}
		`}</style>
  </span>
)

export default ({children}) => (
  <main>
    <nav>
      <Menu href={'/'} label={'▲'} />
      {
        [
          'news',
          'newest',
          'ask',
          'show',
          'jobs'
        ].map(m => {
          return <Menu
            key={m}
            href={`/${m}`}
            label={m.toUpperCase()}
          />
        })
      }
    </nav>
    <div>
      {children}
    </div>
    <style jsx>{`
			div {
				width: 100%;
				color: #333;
				padding-top: 30px;
			};
		`}</style>
    <style global jsx>{`
      body {
				font-family: Helvetica, sans-serif;
			};
			@media (max-width: 600px) {
				header {
					justify-content: none;
				}
			};
			nav {
				text-align: left;
				background-color: black;
				color: white;
				padding: 12px;
				position: fixed;
				z-index: 1000;
				top: 0;
				left: 0;
				right: 0;
			};
      a {
				color: #0e0e0e;
				text-decoration: none;
			};
    `}</style>
  </main>
)
