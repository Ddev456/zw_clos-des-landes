import Image from "next/image";

export const Hero = () => {
  return (
    <div className="hero-bg rounded-[2rem] h-[60rem] text-white flex flex-col md:flex-row items-start gap-6 p-[1rem] md:p-[4rem]">
      <div className="bg-slate-700/45 p-4 rounded-[2rem] flex flex-col gap-4 items-center">
        <h1 className="text-[2.5rem] font-bold uppercase text-center">
          Vivez la Provence authentique au Clos des Lavandes
        </h1>
        <span className="font-semibold text-xl">
          Une chambre d&apos;hôtes de charme au cœur des champs de lavande
        </span>
      </div>
    </div>
  );
};
