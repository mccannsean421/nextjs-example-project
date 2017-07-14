import Layout from '../comps/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
	<li>
		<Link href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
)

export default () => (
    <Layout>
      <h1>My Blog</h1>
      <PostLink title="Blog 1" />
      <PostLink title="Blog 2" />
      <PostLink title="Blog 3" />
    </Layout>
)