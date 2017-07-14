import Layout from '../comps/MyLayout.js'

export default (props) => (
	<Layout>
		<h1>{props.url.query.title}</h1>
		<p>this is a blog post</p>
	</Layout>
)