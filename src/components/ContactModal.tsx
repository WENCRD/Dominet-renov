import { X, Mail, Phone, FileText } from "lucide-react";

type ContactModalProps = {
  onClose: () => void;
};

export default function ContactModal({ onClose }: ContactModalProps) {
  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-slate-950/60
        backdrop-blur-sm
        p-4 sm:p-6
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full max-w-md
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Haut de la modale */}
        <div className="bg-brand-blue px-6 pt-7 pb-8 sm:px-8">
          {/* Fermer */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4
              flex h-10 w-10
              items-center justify-center
              rounded-full
              bg-white/10
              text-white
              hover:bg-white/20
              transition
            "
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Logo */}
          <div className="inline-flex rounded-2xl bg-white p-2 shadow-lg">
            <img
              src="/Dominet renov.jpg"
              alt="DOMINET Rénov"
              className="w-[90px] sm:w-[105px] h-auto rounded-xl"
            />
          </div>

          <p className="mt-6 text-brand-yellow text-xs uppercase tracking-[0.2em] font-semibold">
            DOMINET RÉNOVATION
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
            Parlons de votre projet.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
            Une question ou un projet de rénovation ?
            Contactez-nous directement.
          </p>
        </div>

        {/* Actions */}
        <div className="p-5 sm:p-7">
          <div className="space-y-3">

            {/* Devis */}
            <a
              href="mailto:dominet.renov@gmail.com?subject=Demande%20de%20devis"
              className="
                flex items-center gap-4
                rounded-2xl
                bg-brand-yellow
                px-5 py-4
                text-brand-blue
                transition
                hover:brightness-105
              "
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/50">
                <FileText className="w-5 h-5" />
              </div>

              <div>
                <p className="font-semibold">
                  Demander un devis
                </p>

                <p className="text-sm opacity-70">
                  Présentez-nous votre projet
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:dominet.renov@gmail.com"
              className="
                flex items-center gap-4
                rounded-2xl
                border border-slate-200
                px-5 py-4
                text-slate-700
                transition
                hover:border-brand-blue
                hover:bg-slate-50
              "
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Mail className="w-5 h-5" />
              </div>

              <div className="min-w-0">
                <p className="font-semibold text-brand-blue">
                  Envoyer un email
                </p>

                <p className="text-sm text-slate-500 truncate">
                  dominet.renov@gmail.com
                </p>
              </div>
            </a>

            {/* Téléphone */}
            <a
              href="tel:+33781460573"
              className="
    flex items-center gap-4
    rounded-2xl
    border border-slate-200
    px-5 py-4
    text-slate-700
    transition
    hover:border-brand-blue
    hover:bg-slate-50
  "
            >
              <div className="
    flex h-11 w-11 shrink-0
    items-center justify-center
    rounded-xl
    bg-brand-blue/10
    text-brand-blue
  ">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <p className="font-semibold text-brand-blue">
                  Appeler
                </p>

                <p className="text-sm text-slate-500">
                  07 81 46 05 73
                </p>
              </div>
            </a>

          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            DOMINET RÉNOVATION · Lille et alentours
          </p>
        </div>
      </div>
    </div>
  );
}