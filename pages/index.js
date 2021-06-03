import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Homepage | Dozens Kenya</title>
        <meta name="description" content="Lets buy cheap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="font-extrabold text-xl">
          Hello Kenya
        </div>
      </main>
    </div>
  )
}
