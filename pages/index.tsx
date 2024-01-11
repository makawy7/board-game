import Board from '@/components/Board'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>2048</title>
        <meta name="description" content="2048 game" />
      </Head>
      <main>
        <Board />
      </main>
    </>
  )
}
