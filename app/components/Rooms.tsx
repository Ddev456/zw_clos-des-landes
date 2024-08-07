import { Mountain, Star, User, Wifi } from "lucide-react";
import Image from "next/image";

export const Rooms = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-slate-900 mt-[8rem] md:p-[4rem]">
      <div className="flex flex-col items-start gap-4 p-4">
        <h1 className="text-xl font-bold">Les Chambres</h1>
        <span className="text-2xl">
          Découvrez les chambres de hôtes du Clos des Lavandes qui vous
          conviennent le mieux pour séjourner dans la Provence.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="card flex flex-col md:flex-row text-xl font-bold items-center gap-4 p-6">
          <div className="flex flex-col gap-12 w-[28rem]">
            <div className="badge flex justify-around gap-2 p-3 rounded-full bg-slate-300">
              <span>4.4</span>
              <div className="flex gap-1">
                <Star className="w-6 h-6 stroke-slate-800 fill-slate-800" />
                <Star className="w-6 h-6 stroke-slate-800 fill-slate-800" />
                <Star className="w-6 h-6 stroke-slate-800 fill-slate-800" />
                <Star className="w-6 h-6 stroke-slate-800 fill-slate-800" />
              </div>
            </div>
            <h3>Chambre Lavande</h3>
            <div className="flex items-center gap-3 p-1 font-medium text-slate-600">
              <User className="w-6 h-6 stroke-slate-800 fill-slate-800" />
              <span>1 - 2 personnes</span>
            </div>

            <div className="flex items-center gap-3 p-1 font-medium text-slate-600">
              <Mountain className="w-6 h-6 stroke-slate-800 fill-slate-800" />
              <span>
                Une suite spacieuse avec vue panoramique sur les champs
              </span>
            </div>
            <div className="flex items-center gap-3 p-1 font-medium text-slate-600">
              <Wifi className="w-6 h-6 stroke-slate-800" />
              <span>Wifi disponible</span>
            </div>
            <div className="cta flex gap-3 p-1">
              <button className="btn btn-primary text-white bg-slate-700 hover:scale-[0.96] text-[14px] font-semibold transition-transform px-4 py-4 rounded-[2rem]">
                Découvrir la Chambre
              </button>
              <button className="btn btn-primary text-slate-900 bg-transparent border-2 border-slate-900 hover:scale-[0.96] text-[14px] font-semibold transition-transform px-4 py-4 rounded-[2rem]">
                Contacter l&apos;hôte
              </button>
            </div>
          </div>
          <div className="card-bg-lavande w-[500px] h-[600px] rounded-lg" />
        </div>

        <div className="card flex flex-col md:flex-row-reverse text-xl font-bold items-center gap-4 p-6">
          <div className="flex flex-col gap-4 w-72">
            <h3>Chambre Olivier</h3>
            <span className="font-medium">
              Chambre double cosy avec terrasse privée
            </span>
          </div>
          <Image
            src="/olivier.jpg"
            alt="room2"
            width={400}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </div>

        <div className="card w-full p-6 gap-4 flex flex-col font-bold text-xl justify-center">
          <div className="flex flex-col gap-4">
            <h3>Le Romarin</h3>
            <span className="font-medium">
              Chambre familiale avec espace enfants
            </span>
          </div>
          <Image
            src="/lavande.jpg"
            alt="room3"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};
