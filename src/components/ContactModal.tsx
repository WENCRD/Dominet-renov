import { X } from "lucide-react";

type ContactModalProps = {
  onClose: () => void;
};

export default function ContactModal({ onClose }: ContactModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose} // clic sur fond noir ferme
    >
      <div
        className="bg-white rounded-xl2 shadow-card p-6 w-full max-w-lg relative"
        onClick={(e) => e.stopPropagation()} // empêche fermeture si clic à l'intérieur
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
          aria-label="Fermer le formulaire de contact"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Titre */}
        <h2 className="text-2xl font-semibold text-brand-blue mb-4">
          Contactez-nous
        </h2>

        {/* Actions rapides */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <a
            href="tel:+33612345678"
            className="flex-1 btn-accent justify-center"
          >
            📞 Appeler
          </a>
          <a
            href="mailto:contact@dominet-renov.fr"
            className="flex-1 btn-primary justify-center"
          >
            ✉️ Email
          </a>
        </div>

        {/* Formulaire */}
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Nom"
            className="w-full border rounded-xl2 px-4 py-3"
            required
          />
          <input
            type="tel"
            placeholder="Téléphone"
            className="w-full border rounded-xl2 px-4 py-3"
          />
          <textarea
            placeholder="Votre message"
            rows={4}
            className="w-full border rounded-xl2 px-4 py-3"
            required
          />
          <button type="submit" className="btn-accent w-full">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}
