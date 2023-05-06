import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { stores } from "../../data";
import Image from "next/image";
import { Info, MapPin, Star } from "lucide-react";
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
  const storesWithoutCurrent = stores.filter(
    (store) => store.id.toString() !== params.id
  );
  for (let i = 0; i < 3; i++) {
    let randIndex;
    do {
      randIndex = Math.floor(Math.random() * storesWithoutCurrent.length);
    } while (simStores.includes(storesWithoutCurrent[randIndex]));
    simStores.push(storesWithoutCurrent[randIndex]);
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
  const { title, image, address, stars, description, reviews } = store;

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-y-4">
      {router.isFallback && <div>Getting data...</div>}
      {store && (
        <div className="w-full flex flex-col justify-center items-center gap-y-4">
          <Head>
            <title>Coffey - {title}</title>
          </Head>
          <div className="w-full flex justify-start space-x-2 text-zinc-500 border p-3 lg:px-6 rounded-3xl">
            <Link className="hover:text-white" href="/">
              Home
            </Link>{" "}
            <span>/</span> <p className="text-white">{title}</p>
          </div>
          <div className="w-full flex flex-col space-y-8">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="w-full h-[35rem] rounded-3xl overflow-hidden border-2 border-zinc-800">
              <Image
                className="w-full h-full object-cover object-center"
                src={image}
                width={2440}
                height={1564}
                alt={title}
                priority
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl">Information</h1>
              <div className="flex flex-col border rounded-3xl text-zinc-300/80">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex gap-x-2 py-5 justify-center items-center w-full lg:w-1/2 h-full border-b lg:border-r">
                    <MapPin className="text-brown" size={20} /> <p className="font-medium">{address}</p>
                  </div>
                  <div className="flex gap-x-2 py-5 justify-center items-center h-full w-full lg:w-1/2">
                    <Star className="text-brown" size={20} /> <p className="font-medium">{stars}</p>
                  </div>
                </div>
                <div className="w-full p-7 border-t">
                  <Info className="float-left mr-3 mb-3 text-brown"/>
                  <p className="">{description}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl">Reviews</h1>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {reviews.map((review) => (
                  <div
                    className="w-full flex flex-col space-y-4 bg-brown/80 rounded-3xl p-4"
                    key={review.author}
                  >
                    <h5 className="text-lg font-medium">{review.author}</h5>
                    <p className="text-zinc-50/80">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-6 py-6">
              <h1 className="text-3xl">Similair Stores</h1>
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
