"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <>
      <div className="w-full flex flex-col items-start gap-4 p-4 md:p-[4rem]">
        <h1 className="text-xl font-bold">Les témoignages</h1>
        <span className="text-2xl">
          Parce qu&apos;ils en parlent mieux que nous !
        </span>
      </div>

      <div className="mt-[-12rem] h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote: "C'était un séjour inoubliable, la piscine est un vrai plus !",
    name: "Charles Dickens",
    title: "Je recommande !",
  },
  {
    quote:
      "Nous avons séjourner du 12 au 19 août, la vue est magnifique, le petit-déjeuner servi dans la chambre est un détail très appréciable ! Je recommanderai cette adesse à mes amis et ma famille.",
    name: "William Shakespeare",
    title: "Séjour mémorable",
  },
  {
    quote:
      "Une petite maison d'hôtes mais avec un service irréprochable et de qualité. Les hôtes sont très sympas, l'environnement est agréable.",
    name: "Edgar Allan Poe",
    title: "A refaire",
  },
  {
    quote: "C'était un séjour inoubliable, la piscine est un vrai plus !",
    name: "Charles Dickens",
    title: "Je recommande !",
  },
  {
    quote:
      "Nous avons séjourner du 12 au 19 août, la vue est magnifique, le petit-déjeuner servi dans la chambre est un détail très appréciable ! Je recommanderai cette adesse à mes amis et ma famille.",
    name: "William Shakespeare",
    title: "Séjour mémorable",
  },
  {
    quote:
      "Une petite maison d'hôtes mais avec un service irréprochable et de qualité. Les hôtes sont très sympas, l'environnement est agréable.",
    name: "Edgar Allan Poe",
    title: "A refaire",
  },
  {
    quote: "C'était un séjour inoubliable, la piscine est un vrai plus !",
    name: "Charles Dickens",
    title: "Je recommande !",
  },
  {
    quote:
      "Nous avons séjourner du 12 au 19 août, la vue est magnifique, le petit-déjeuner servi dans la chambre est un détail très appréciable ! Je recommanderai cette adesse à mes amis et ma famille.",
    name: "William Shakespeare",
    title: "Séjour mémorable",
  },
  {
    quote:
      "Une petite maison d'hôtes mais avec un service irréprochable et de qualité. Les hôtes sont très sympas, l'environnement est agréable.",
    name: "Edgar Allan Poe",
    title: "A refaire",
  },
];
