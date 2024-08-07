import Image from "next/image";

export const Hero = () => {
  return (
    <div className="hero-bg rounded-[2rem] h-[60rem] w-full text-white flex flex-col items-center justify-center gap-6 p-[1rem] md:p-[4rem]">
      <div className="w-[24rem] bg-slate-700/85 p-4 rounded-[2rem] flex flex-col gap-4 items-center">
        <h1 className="text-[2.5rem] font-bold uppercase text-center">
          Vivez &quot;la Provence authentique&quot; au Clos des Lavandes
        </h1>
        <span className="font-semibold text-xl">
          Une chambre d&apos;hôtes de charme au cœur des champs de lavande
        </span>
      </div>
      <button className="nav-parent w-[24rem] btn btn-primary border-4 border-slate-800 bg-slate-50  text-slate-900 hover:scale-[0.96] text-[14px] font-semibold transition-transform px-4 py-4">
        <span className="nav-link text-center">Découvrir</span>
      </button>
    </div>
  );
};
