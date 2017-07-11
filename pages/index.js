// This is the Link API
import Link from 'next/link'

//Link is a higher order componenet

const index = () => (
	<div>
		<Link href="/about"> 
			<a style={{ fontSize: 20 }}>About</a>
		</Link>
		<Link href="/about"> 
			<button style={{ fontSize: 20 }}>About</button>
		</Link>
		<p>Hello Next.js</p>
		
	</div>
)

export default index