import { ArrowUpRight, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Card({ store }) {
  const { id, title, address, image, stars } = store;
  return (
    <Link
      href={`/coffee-store/${id}`}
      className="group w-full min-h-[26rem] bg-zinc-900/50 hover:bg-zinc-900/90 border border-zinc-800/90 flex flex-col items-center justify-between rounded-4xl overflow-hidden p-3"
    >
      <div className="w-full h-full">
        <div className="w-full bg-red-500 h-[16rem] rounded-[2rem] overflow-hidden transition">
          <Image
            className="w-full h-full object-cover"
            width={520}
            height={520}
            quality={75}
            src={image}
            alt="coffee shop"
          />
        </div>
        <div className="px-2 py-3.5 flex flex-col gap-y-3">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="flex flex-col gap-y-2">
            <div className="text-zinc-400/80 inline-flex gap-x-2 items-center">
              <MapPin className="text-white" size={20} /> <p>{address}</p>
            </div>
            <div className="text-zinc-400/80 inline-flex gap-x-2 items-center">
              <Star className="text-white" size={20} /> <p>{stars}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="flex justify-between items-center pl-5 text-brown hover:bg-brown hover:text-white w-full rounded-full h-16 overflow-hidden ring-1 ring-zinc-800/90 hover:ring-0">
        <p>Discover Now</p>
        <div className="group-hover:scale-[1.8] group-hover:mr-3.5 flex justify-center items-center transition-all bg-white w-14 rounded-full h-full text-brown">
          <ArrowUpRight size={24} />
        </div>
      </button>
    </Link>
  );
}
export default Card;
