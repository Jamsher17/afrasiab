import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface gridElementProps {
  id?: number;
  image: StaticImageData;
  name?: string;
  route?: string;
  price?: string;
  duration?: string;
}

export default function TourCard({ ...data }: gridElementProps) {
  return (
    <div className="justify-center max-w-[320px] min-w-[320px] h-[350px] border-0 bg-white border-white rounded-2xl shadow-[0px_1px_4px_rgba(0,0,0,0.5)]">
      <Link href={data.price ? `/tours/${data.id}` : `/cities/${data.id}`}>
        <Image
          className="w-full h-[170px] border-0 rounded-t-2xl"
          src={data.image}
          alt="фотография тура"
        />
        <div className="py-4 px-5 h-[180px] flex flex-col justify-between border">
          <div>
            <p className="text-[1.15rem] font-bold ">{data.name}</p>
          </div>
          <div>
            <p className="text-sm">{data?.route}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-base font-bold text-yellow">{data?.price}</p>
            <p className="text-grey text-sm ">{data?.duration}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
