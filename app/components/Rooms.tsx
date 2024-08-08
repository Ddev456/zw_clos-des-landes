import {
  BathIcon,
  Mountain,
  Star,
  User,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { cn } from "../lib/utils";

interface Room {
  id: number;
  name: string;
  rating: number;
  capacity: number;
  description: string;
  thumbnail: string;
  services: Service[];
}

interface Service {
  id: number;
  name: string;
  icon: React.ReactNode;
}

export const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Chambre Lavande",
      rating: 3.4,
      capacity: 1,
      description: "Une suite spacieuse avec vue panoramique sur les champs",
      thumbnail: "/lavande.jpg",
      services: [
        {
          id: 1,
          name: "Wifi",
          icon: <Wifi className="w-6 h-6 stroke-slate-800" />,
        },
      ],
    },
    {
      id: 2,
      name: "Chambre Olivier",
      rating: 4.2,
      capacity: 2,
      description: "Idéal pour un couple",
      thumbnail: "/olivier.jpg",
      services: [
        {
          id: 1,
          name: "Wifi",
          icon: <Wifi className="w-6 h-6 stroke-slate-800" />,
        },
        {
          id: 2,
          name: "Petit Déjeuner inclus",
          icon: <UtensilsCrossed className="w-6 h-6 stroke-slate-800" />,
        },
      ],
    },
    {
      id: 3,
      name: "Le Romarin",
      rating: 4.7,
      capacity: 4,
      description: "Grande suite adaptée aux familles avec enfants",
      thumbnail: "/lavande.jpg",
      services: [
        {
          id: 1,
          name: "Wifi",
          icon: <Wifi className="w-6 h-6 stroke-slate-800" />,
        },
        {
          id: 2,
          name: "Petit Déjeuner inclus",
          icon: <UtensilsCrossed className="w-6 h-6 stroke-slate-800" />,
        },
        {
          id: 3,
          name: "Salle de bain privative",
          icon: <BathIcon className="w-6 h-6 stroke-slate-800" />,
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center gap-8 text-slate-900 md:p-[4rem]">
      <div className="flex flex-col items-start gap-4 p-4">
        <h1 className="text-xl font-bold">Les Chambres</h1>
        <span className="text-2xl">
          Découvrez les chambres de hôtes du Clos des Lavandes qui vous
          conviennent le mieux pour séjourner dans la Provence.
        </span>
      </div>
      <div className="flex flex-col gap-[10rem]">
        {rooms.map((room) => (
          <RoomCard room={room} key={room.id} />
        ))}
      </div>
    </div>
  );
};

export const RoomCard = ({ room }: { room: Room }) => {
  return (
    <div
      className={cn(
        room.id === 3 ? "bg-slate-300" : "",
        "card flex flex-col md:flex-row text-xl font-bold items-center gap-4 p-6"
      )}
    >
      <div
        className={cn(
          room.id % 2 === 0 ? `order-${room.id}` : "order-last",
          "flex flex-col justify-between w-[28rem] h-[400px]"
        )}
      >
        <div className="badge flex justify-between gap-2 p-3 bg-slate-300">
          <span>{room.rating}</span>
          <div className="flex gap-1">
            {Array(Math.round(room.rating))
              .fill(0)
              .map((_, i) => (
                <Star
                  key={room.id + i}
                  className="w-6 h-6 stroke-slate-800 fill-slate-800"
                />
              ))}
          </div>
        </div>
        <h3>{room.name}</h3>
        <div className="flex items-center gap-3 p-1 font-medium text-slate-600">
          <User className="w-6 h-6 stroke-slate-800 fill-slate-800" />
          <span>{room.capacity} personnes</span>
        </div>

        <div className="flex items-center gap-3 p-1 font-medium text-slate-600">
          <Mountain className="w-6 h-6 stroke-slate-800 fill-slate-800" />
          <span>{room.description}</span>
        </div>
        {room.services.map((service) => (
          <div
            className="flex items-center gap-3 p-1 font-medium text-slate-600"
            key={service.id}
          >
            {service.icon}
            <span>{service.name}</span>
          </div>
        ))}

        <div className="cta flex gap-3 p-1">
          <button className="text-white bg-slate-700 hover:scale-[0.96] text-[14px] font-semibold transition-transform px-4 py-4">
            <span className="text-center">Découvrir la Chambre</span>
          </button>
          <button className="nav-parent text-slate-700 bg-slate-50 border-2 border-slate-600 hover:scale-[0.96] text-[14px] font-semibold transition-transform px-4 py-4">
            <span className="nav-link text-center">Réserver</span>
          </button>
        </div>
      </div>
      <Image
        src={room.thumbnail}
        alt="room3"
        width={600}
        height={400}
        className="rounded-lg shadow-xl"
      />
    </div>
  );
};
