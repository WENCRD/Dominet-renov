import { Link } from "react-router-dom";
import { ShieldCheck, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white mt-16">

      {/* Bandeau confiance */}
      <div className="bg-brand-yellow text-slate-900 py-3 text-center text-sm font-medium">
        ✔ Assurance décennale · ✔ Responsabilité civile · ✔ Travaux garantis 10 ans
      </div>

      <div className="container-pro py-14 grid gap-10 md:grid-cols-4">

        {/* Présentation */}
        <div>
          <h3 className="font-semibold text-lg mb-3">DOMINET Rénov</h3>
          <p className="opacity-90 text-sm">
            Rénovation intérieure & extérieure.
            Intervention rapide, travail soigné et devis gratuit.
          </p>

          {/* Badge assurance */}
          <div className="mt-5 flex items-center gap-3 bg-white/10 p-3 rounded-xl2">
            <ShieldCheck className="w-6 h-6 text-brand-yellow" />
            <div className="text-sm">
              <p className="font-medium">Assurance décennale</p>
              <p className="opacity-80 text-xs">
                Souscrite auprès de MMA
              </p>
            </div>
          </div>
        </div>

        {/* Coordonnées */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-90">

            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-yellow" />
              <a href="tel:+33612345678" className="hover:underline">
                06 12 34 56 78
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-yellow" />
              <a href="mailto:contact@dominet-renov.fr" className="hover:underline">
                contact@dominet-renov.fr
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-yellow" />
              Lun–Sam 8h–19h
            </li>

            <li>SIRET : 81994460400019</li>

          </ul>
        </div>

        {/* Zone */}
        <div>
          <h4 className="font-semibold mb-4">Zone d’intervention</h4>

          <div className="flex items-start gap-2 text-sm opacity-90">
            <MapPin className="w-4 h-4 text-brand-yellow mt-1" />
            <p>
              Lille et alentours (20–30 km)
              <br />
              Déplacement gratuit pour devis.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li>
              <Link to="/#prestations" className="hover:text-brand-yellow">
                Prestations
              </Link>
            </li>
            <li>
              <Link to="/realisations" className="hover:text-brand-yellow">
                Réalisations
              </Link>
            </li>
            <li>
              <Link to="/#avis" className="hover:text-brand-yellow">
                Avis clients
              </Link>
            </li>
            <li>
              <Link to="/#devis" className="hover:text-brand-yellow">
                Demander un devis
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bas footer */}
      <div className="border-t border-white/10">
        <div className="container-pro py-4 text-sm opacity-80 text-center">
          © {new Date().getFullYear()} DOMINET Rénov — Tous droits réservés ·
          <Link
  to="/mentions-legales"
  className="ml-1 underline hover:text-brand-yellow transition"
>
  Mentions légales
</Link>
        </div>
      </div>

    </footer>
  );
}