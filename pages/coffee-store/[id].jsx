import Head from 'next/head'
import Link from 'next/link';
import React from 'react'


export default function coffeeStore() {
  

  const id = 4;
  
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-y-4 text-5xl'>
      <Link className='group absolute top-6 left-6 text-base border border-neutral-200 w-32 px-3 py-2 self-start text-right' href="/">
        <span className='opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2 transition-all'>{"<"}</span>
        Back Home
      </Link>
      <div className='w-full h-screen flex flex-col justify-center items-center gap-y-4 text-5xl'>
          <Head>
              <title>{id}</title>
          </Head>
          <p>Coffee Store</p>
          <p>id: {id}</p>
      </div>
    </div>
  )
}
