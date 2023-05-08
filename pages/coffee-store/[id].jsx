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
            <title>{`Coffey - ${title}`}</title>
          </Head>
          <div className="w-full flex justify-start space-x-2 bg-zinc-900/70 p-3 px-6 rounded-3xl">
            <Link className="hover:text-white" href="/">
              Home
            </Link>{" "}
            <span>/</span> <p className="text-white font-medium">{title}</p>
          </div>
          <div className="w-full flex flex-col space-y-8">
            <div className="bg-zinc-900/70 rounded-3xl overflow-hidden">
            <h1 className="text-4xl font-bold  p-6 rounded-3xl text-center">{title}</h1>
            <div className="w-full h-[35rem] rounded-t-xl overflow-hidden border-2 border-zinc-800">
              <Image
                className="w-full h-full object-cover object-center"
                src={image}
                width={2440}
                height={1564}
                alt={title}
                priority
              />
            </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl">Information</h1>
              <div className="flex flex-col text-zinc-50/80 gap-5">

                <div className="flex flex-col lg:flex-row gap-5">

                  <div className="flex gap-x-2 py-5 justify-center items-center w-full lg:w-full h-full bg-zinc-900/70 rounded-3xl">
                    <MapPin className="text-brown" size={20} />{" "}
                    <p className="font-medium">{address}</p>
                  </div>

                  <div className="flex gap-x-2 py-5 px-6 justify-center items-center h-full bg-zinc-900/70 w-full lg:w-fit rounded-3xl">
                    <Star className="text-brown" size={20} />{" "}
                    <p className="font-medium">{stars}</p>
                  </div>

                </div>

                <div className="w-full p-7 bg-zinc-900/70 rounded-3xl">
                  <Info className="float-left mr-3 mb-3 text-brown" />
                  <p>{description}</p>
                </div>

              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl">Reviews</h1>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {reviews.map((review) => {
                  const colors = [
                    "220, 38, 38",
                    "22, 163, 74",
                    "37, 99, 235",
                    "217, 119, 6",
                    "124, 58, 237",
                    "5, 150, 105",
                  ];
                  const color = colors[Math.floor(Math.random() * 6)];
                  return (
                    <div
                      className="w-full flex flex-col space-y-4 bg-zinc-900/70 rounded-3xl px-4 py-6"
                      key={review.author}
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className="h-7 w-7 rounded-full text-center flex justify-center items-center"
                          style={{ backgroundColor: `rgba(${color}, 0.2)` , color: `rgb(${color})`}}
                        >
                          <p>{review.author.slice(0, 1)}</p>
                        </div>
                        <h5 className="text-lg font-medium">{review.author}</h5>
                      </div>
                      <p className="text-zinc-50/80">{review.text}</p>
                    </div>
                  );
                })}
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
