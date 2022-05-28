import Layout from "../components/Layout"
import Link from 'next/link'

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>404</h1>
      <h5 className="mt-3">This is not the page you're looking for</h5>
      <img className="img-fluid" src="404.jpg" alt="404"/>
      <p className="mt-3">Please return to <Link href="/"><a>Home</a></Link></p>
    </div>
  </Layout>
)

export default custom404