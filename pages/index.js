import Head from 'next/head'
import { Banner, Card } from '../components'
import { stores } from '../data'

export const getStaticProps = async (ctx) => {
  return {
    props:{
      stores
    }
  }
}

export default function Home(props) {
  const coffeeStores = props.stores
  return (
    <>
      <Head>
        <title>Coffey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
      <section id='stores' className='flex flex-col gap-y-4'>
        <h2 className='text-5xl md:text-6xl py-6 font-semibold text-center'>Coffee Stores</h2>
        <div className='w-full grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {coffeeStores.map((store) => (
            <Card store={store} key={store.id}/>
          ) )}
        </div>

      </section>
    </>
  )
}
