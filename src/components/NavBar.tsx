import { useState } from "react";
import { X } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container-pro flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl2 bg-brand-yellow grid place-items-center font-bold text-slate-900">
            DR
          </div>
          <span className="font-semibold text-lg">DOMINET Rénov</span>
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#prestations">Prestations</a>
          <a href="#realisations">Réalisations</a>
          <a href="#avis">Avis</a>
          <button
            className="hover:text-brand"
            onClick={() => setOpenContact(true)}
          >
            Contact
          </button>
          <a className="btn-accent" href="#devis">Devis gratuit</a>
        </nav>

        {/* Burger menu mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpenMenu(true)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {openMenu && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpenMenu(false)}
          />
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6">
            <button
              className="self-end p-2"
              onClick={() => setOpenMenu(false)}
              aria-label="Fermer le menu"
            >
              <X className="h-6 w-6" />
            </button>
            <a href="#prestations" onClick={() => setOpenMenu(false)}>Prestations</a>
            <a href="#realisations" onClick={() => setOpenMenu(false)}>Réalisations</a>
            <a href="#avis" onClick={() => setOpenMenu(false)}>Avis</a>
            <button
              onClick={() => {
                setOpenMenu(false);
                setOpenContact(true);
              }}
              className="text-left"
            >
              Contact
            </button>
            <a className="btn-accent justify-center" href="#devis" onClick={() => setOpenMenu(false)}>
              Devis gratuit
            </a>
          </div>
        </div>
      )}

      {/* Modal de contact */}
      {openContact && <ContactModal onClose={() => setOpenContact(false)} />}
    </header>
  );
}
