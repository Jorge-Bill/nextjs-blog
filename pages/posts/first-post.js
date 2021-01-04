import Head from 'next/head'
import Link from 'next/link'

const FirstPost = () => {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className="title"> 
        First Post
      </h1>
      <h2 className="title"> 
          <Link href="/">
            Back to Home
          </Link>
        </h2>
        <img src="/assets/img/vercel.svg" alt="Vercel Logo" className="logo" />
    </div>
  )
}

export default FirstPost