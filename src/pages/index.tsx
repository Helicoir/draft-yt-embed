import Link from 'next/link'
import Layout from '../components/Layout'
import { Card } from '~/components/atoms/Card'
import {MoviePlayer} from '~/components/atoms/MoviePlayer'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Card title="aaaa" />
    <Card title="bbbb" />
    <Card title="cccc" />
    <MoviePlayer id="bn8IKuQxA_w" />
  </Layout>
)

export default IndexPage