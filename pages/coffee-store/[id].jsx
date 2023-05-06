import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { stores } from "../../data";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { Card } from "../../components";

export const getStaticPaths = async () => {
  const paths = stores.map((store) => ({
    params: { id: store.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const params = ctx.params;
  let simStores = [];
  for (let i = 0; i < 3; i++) {
    let randIndex;
    do {
      randIndex = Math.floor(Math.random() * stores.length);
    } while (simStores.includes(stores[randIndex]));
    simStores.push(stores[randIndex]);
  }

  return {
    props: {
      store: stores.find((store) => store.id.toString() === params.id),
      simStores,
    },
  };
};

export default function CoffeeStore({ store, simStores }) {
  const router = useRouter();
  const { title, image, address, stars } = store;
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-y-4">
      {router.isFallback && <div>Getting data...</div>}
      {store && (
        <div className="w-full flex flex-col justify-center items-center gap-y-4">
          <Head>
            <title>Coffey - {store.title}</title>
          </Head>
          <div className="w-full flex justify-start space-x-2 text-zinc-500 border p-3 lg:px-6 rounded-3xl">
            <Link className="hover:text-white" href="/">
              Home
            </Link>{" "}
            <span>/</span> <p className="text-white">{title}</p>
          </div>
          <div className="w-full flex flex-col space-y-6">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="w-full h-[35rem] rounded-3xl overflow-hidden border-2 border-zinc-800">
              <Image
                className="w-full h-full object-cover object-center"
                src={image}
                width={2400}
                height={2400}
                alt={title}
                priority
              />
            </div>
            <div className="flex flex-col gap-y-2 border rounded-3xl p-6">
              <div className="text-zinc-400/80 inline-flex gap-x-2 items-center">
                <MapPin className="text-white" size={20} /> <p>{address}</p>
              </div>
              <div className="text-zinc-400/80 inline-flex gap-x-2 items-center">
                <Star className="text-white" size={20} /> <p>{stars}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-6 py-6">
              <h3 className="text-3xl">Similair Stores</h3>
              <div>
                <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {simStores.map((store) => (
                    <Card store={store} key={store.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
