import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Home, Images, Star } from "lucide-react";
import ContactModal from "./ContactModal";
import { asset } from "../utils/asset";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <header
        className="
          sticky top-0 z-40
          bg-white/95
          backdrop-blur-md
          border-b border-slate-200/70
          shadow-sm
        "
      >
        <div className="container-pro flex items-center justify-between h-[76px]">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Accueil DOMINET Rénov"
          >
            <img
              src="/Dominet renov.jpg"
              alt="DOMINET Rénov"
              className="
                w-[58px]
                h-[58px]
                object-contain
                rounded-xl
              "
            />

            <div className="hidden sm:block leading-tight">
              <p className="font-bold text-brand-blue text-lg">
                DOMINET
              </p>

              <p className="text-xs text-slate-500">
                Rénovation
              </p>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              to="/#prestations"
              className="text-sm font-medium text-slate-700 hover:text-brand-blue transition"
            >
              Prestations
            </Link>

            <Link
              to="/realisations"
              className="text-sm font-medium text-slate-700 hover:text-brand-blue transition"
            >
              Réalisations
            </Link>

            <Link
              to="/#avis"
              className="text-sm font-medium text-slate-700 hover:text-brand-blue transition"
            >
              Avis
            </Link>

            <button
              type="button"
              onClick={() => setOpenContact(true)}
              className="text-sm font-medium text-slate-700 hover:text-brand-blue transition"
            >
              Contact
            </button>

            <Link
              to="/#devis"
              className="btn-accent px-5 py-3"
            >
              Demander un devis
            </Link>
          </nav>

          {/* BURGER TABLETTE / MOBILE */}
          <button
            type="button"
            className="
              lg:hidden
              flex items-center justify-center
              w-11 h-11
              rounded-xl
              bg-slate-100
              text-brand-blue
              hover:bg-slate-200
              transition
            "
            onClick={() => setOpenMenu(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      {openMenu && (
        <div className="fixed inset-0 z-[60] lg:hidden">

          {/* Fond */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setOpenMenu(false)}
          />

          {/* Panneau */}
          <div
            className="
              absolute
              top-0 right-0
              w-[88%]
              max-w-[360px]
              h-full
              bg-white
              shadow-2xl
              flex flex-col
            "
          >

            {/* Haut */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">

              <Link
                to="/"
                onClick={() => setOpenMenu(false)}
                className="flex items-center gap-3"
              >
                <img
                  src={asset("/Dominet renov.jpg")}
                  alt="DOMINET Rénov"
                  className="w-[62px] h-[62px] object-contain rounded-xl"
                />

                <div>
                  <p className="font-bold text-brand-blue">
                    DOMINET
                  </p>

                  <p className="text-xs text-slate-500">
                    Rénovation
                  </p>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setOpenMenu(false)}
                className="
                  flex items-center justify-center
                  w-10 h-10
                  rounded-full
                  bg-slate-100
                  text-slate-600
                "
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-5 space-y-2">

              <Link
                to="/#prestations"
                onClick={() => setOpenMenu(false)}
                className="
                  flex items-center gap-4
                  px-4 py-4
                  rounded-2xl
                  text-slate-700
                  hover:bg-slate-50
                  transition
                "
              >
                <Home className="w-5 h-5 text-brand-blue" />

                <span className="font-medium">
                  Prestations
                </span>
              </Link>

              <Link
                to="/realisations"
                onClick={() => setOpenMenu(false)}
                className="
                  flex items-center gap-4
                  px-4 py-4
                  rounded-2xl
                  text-slate-700
                  hover:bg-slate-50
                  transition
                "
              >
                <Images className="w-5 h-5 text-brand-blue" />

                <span className="font-medium">
                  Réalisations
                </span>
              </Link>

              <Link
                to="/#avis"
                onClick={() => setOpenMenu(false)}
                className="
                  flex items-center gap-4
                  px-4 py-4
                  rounded-2xl
                  text-slate-700
                  hover:bg-slate-50
                  transition
                "
              >
                <Star className="w-5 h-5 text-brand-blue" />

                <span className="font-medium">
                  Avis clients
                </span>
              </Link>

              <button
                type="button"
                onClick={() => {
                  setOpenMenu(false);
                  setOpenContact(true);
                }}
                className="
                  w-full
                  flex items-center gap-4
                  px-4 py-4
                  rounded-2xl
                  text-slate-700
                  hover:bg-slate-50
                  transition
                  text-left
                "
              >
                <Mail className="w-5 h-5 text-brand-blue" />

                <span className="font-medium">
                  Contact
                </span>
              </button>
            </nav>

            {/* CTA BAS DU MENU */}
            <div className="p-5 border-t border-slate-100">
              <Link
                to="/#devis"
                onClick={() => setOpenMenu(false)}
                className="
                  btn-accent
                  w-full
                  py-4
                  justify-center
                  text-center
                "
              >
                Demander un devis
              </Link>

              <p className="mt-4 text-xs text-center text-slate-400">
                DOMINET RÉNOVATION
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CONTACT */}
      {openContact && (
        <ContactModal
          onClose={() => setOpenContact(false)}
        />
      )}
    </>
  );
}