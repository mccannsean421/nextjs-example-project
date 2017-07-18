import Layout from '../comps/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
	<li>
		<Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
)

export default () => (
    <Layout>
      <h1>My Blog</h1>
      <PostLink id="blog-1" title="Blog 1" />
      <PostLink id="blog-2" title="Blog 2" />
      <PostLink id="blog-3" title="Blog 3" />
    </Layout>
)