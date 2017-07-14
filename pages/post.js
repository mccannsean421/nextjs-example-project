import Layout from '../comps/MyLayout.js'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

//passing URL via props as URL is only available to the pages main component
export default (props) => (
    <Layout>
       <Content url={props.url} />
    </Layout>
)