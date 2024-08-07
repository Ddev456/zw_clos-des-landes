"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 100) {
        if (prevScrollpos > currentScrollPos) {
          setTop(0); // Show navbar
        } else {
          setTop(-115); // Hide navbar
        }
        setPrevScrollpos(currentScrollPos);
      }
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);
  const navbarStyle = {
    position: "fixed",
    top: `${top}px`,
    width: "100%",
    display: "flex",
    transition: "top 0.3s",
  };
  return (
    <>
      <div
        style={navbarStyle}
        className="bg-slate-100 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 text-slate-700 hidden md:flex sticky top-0 w-full items-center justify-between py-4 px-8 sm:px-12 lg:px-16 md:py-8"
      >
        <span className="text-xl font-medium uppercase">Clos des Landes</span>
        <div className="flex justify-around gap-8 items-center">
          <Link className="nav-link" href="#">
            <span>Accueil</span>
          </Link>
          <Link className="nav-link" href="#">
            <span>Chambres</span>
          </Link>
          <Link className="nav-link" href="#">
            <span>Services</span>
          </Link>
          <Link className="nav-link" href="#">
            <span>Réservations</span>
          </Link>
          <Link className="nav-link" href="#">
            <span>Contact</span>
          </Link>
        </div>
      </div>
      <div className="md:hidden flex p-6">
        <Menu className="w-6 h-6" />
      </div>
    </>
  );
};
