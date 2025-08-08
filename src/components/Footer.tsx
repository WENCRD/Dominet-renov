export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white mt-12">
      <div className="container-pro py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-lg mb-3">DOMINET Rénov</h3>
          <p className="opacity-90">
            Rénovation intérieure & extérieure · Devis gratuit · Intervention rapide
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Coordonnées</h4>
          <ul className="space-y-1 opacity-90">
            <li>
              Tél :{" "}
              <a href="tel:+33612345678" className="underline">
                06 12 34 56 78
              </a>
            </li>
            <li>
              Email :{" "}
              <a href="mailto:contact@dominet-renov.fr" className="underline">
                contact@dominet-renov.fr
              </a>
            </li>
            <li>Horaires : Lun–Sam 8h–19h</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Zones d’intervention</h4>
          <p className="opacity-90">[Ta ville] et alentours (20–30 km)</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro py-4 text-sm opacity-80 text-center">
          © {new Date().getFullYear()} DOMINET Rénov — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
