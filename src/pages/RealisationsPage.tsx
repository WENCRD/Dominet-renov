import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { X, Images, ArrowUp } from "lucide-react";
import Footer from "../components/Footer";
import { asset } from "../utils/asset";

type Realisation = {
  image: string;
  service: string;
};

type Service = {
  id: string;
  label: string;
  accent: string;
};

const realisationsData: Realisation[] = [
  // SOL
  { image: asset("/realisations/sol/sol1.jpg"), service: "sol" },
  { image: asset("/realisations/sol/sol2.jpg"), service: "sol" },
  { image: asset("/realisations/sol/sol3.jpg"), service: "sol" },

  // PEINTURE
  {
    image: asset("/realisations/peinture/peinture1.jpg"),
    service: "peinture",
  },
  {
    image: asset("/realisations/peinture/peinture2.jpg"),
    service: "peinture",
  },

  // SALLE DE BAIN
  { image: asset("/realisations/sdb/sdb1.jpg"), service: "salledebain" },
  { image: asset("/realisations/sdb/sdb2.jpg"), service: "salledebain" },

  // PLACO
  { image: asset("/realisations/placo/placo1.jpg"), service: "placo" },

  // MENUISERIE
  {
    image: asset("/realisations/menuiserie/menuiserie1.jpg"),
    service: "menuiserie",
  },

  // FAÇADE
  {
    image: asset("/realisations/facade/facade1.jpg"),
    service: "facade",
  },

  // Quand tu auras les photos :
  // { image: asset("/realisations/electricite/electricite1.jpg"), service: "electricite" },
  // { image: asset("/realisations/sinistre/sinistre1.jpg"), service: "sinistre" },
];

const services: Service[] = [
  {
    id: "peinture",
    label: "Peinture intérieure",
    accent: "bg-blue-500",
  },
  {
    id: "sol",
    label: "Revêtements de sol",
    accent: "bg-amber-600",
  },
  {
    id: "salledebain",
    label: "Salle de bain",
    accent: "bg-cyan-500",
  },
  {
    id: "placo",
    label: "Cloison & placo",
    accent: "bg-slate-400",
  },
  {
    id: "menuiserie",
    label: "Menuiserie",
    accent: "bg-orange-500",
  },
  {
    id: "facade",
    label: "Façade & extérieur",
    accent: "bg-emerald-500",
  },
  {
    id: "electricite",
    label: "Électricité",
    accent: "bg-yellow-400",
  },
  {
    id: "sinistre",
    label: "Intervention après sinistre",
    accent: "bg-red-500",
  },
];

export default function RealisationsPage() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll automatique vers le service demandé
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  }, [location]);

  // Bloque le scroll quand une photo est ouverte
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Affiche le bouton "Retour en haut"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pro py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10">
                <Images className="w-5 h-5 text-brand-blue" />
              </div>

              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-brand-blue">
                DOMINET RÉNOVATION
              </p>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight">
              Nos réalisations
            </h1>

            <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Découvrez quelques exemples de travaux réalisés dans différents
              domaines de la rénovation.
            </p>
            {/* Navigation vers les réalisations */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-500 mb-4">
                Aller directement à :
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {services.map((service) => {
                  const hasPhotos = realisationsData.some(
                    (realisation) => realisation.service === service.id
                  );

                  if (!hasPhotos) return null;

                  return (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border border-slate-200
            bg-white
            px-4 py-2.5
            text-sm
            font-medium
            text-slate-700
            shadow-sm
            transition
            hover:-translate-y-0.5
            hover:border-brand-blue
            hover:text-brand-blue
            hover:shadow-md
          "
                    >
                      <span
                        className={`
              w-2.5 h-2.5
              rounded-full
              ${service.accent}
            `}
                      />

                      {service.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container-pro">

          {services.map((service) => {
            const photos = realisationsData.filter(
              (realisation) => realisation.service === service.id
            );

            // Ne montre pas une catégorie vide
            if (photos.length === 0) return null;

            return (
              <section
                key={service.id}
                id={service.id}
                className="
                  scroll-mt-28
                  mb-20
                  md:mb-28
                  last:mb-0
                "
              >
                {/* TITRE SERVICE */}
                <div className="flex items-center gap-4 mb-8 md:mb-10">

                  <span
                    className={`
                      w-3 h-3
                      rounded-full
                      shrink-0
                      ${service.accent}
                    `}
                  />

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">
                      Nos travaux
                    </p>

                    <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-brand-blue">
                      {service.label}
                    </h2>
                  </div>

                </div>

                {/* PHOTOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
                  {photos.map((realisation, index) => {
                    const large =
                      photos.length >= 3 && index % 3 === 0;

                    return (
                      <button
                        key={realisation.image}
                        type="button"
                        onClick={() =>
                          setSelectedImage(realisation.image)
                        }
                        className={`
                          relative
                          overflow-hidden
                          rounded-3xl
                          shadow-md
                          group
                          text-left
                          ${large
                            ? "lg:col-span-7"
                            : "lg:col-span-5"
                          }
                        `}
                      >
                        <div
                          className={`
                            overflow-hidden
                            ${large
                              ? "h-[300px] sm:h-[380px] lg:h-[460px]"
                              : "h-[300px] sm:h-[380px] lg:h-[460px]"
                            }
                          `}
                        >
                          <img
                            src={realisation.image}
                            alt={`${service.label} - réalisation ${index + 1}`}
                            className="
                              w-full h-full
                              object-cover
                              transition-transform
                              duration-700
                              group-hover:scale-105
                            "
                          />
                        </div>

                        {/* Dégradé au survol */}
                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-black/50
                            via-transparent
                            to-transparent
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-300
                          "
                        />

                        {/* Numéro */}
                        <div
                          className="
                            absolute
                            bottom-5 left-5
                            flex items-center gap-2
                            opacity-0
                            group-hover:opacity-100
                            transition
                            text-white
                          "
                        >
                          <span
                            className={`
                              w-2.5 h-2.5
                              rounded-full
                              ${service.accent}
                            `}
                          />

                          <span className="text-sm font-medium">
                            Voir la réalisation
                          </span>
                        </div>

                        {/* Ligne couleur */}
                        <div
                          className={`
                            absolute
                            bottom-0 left-0
                            h-[5px] w-full
                            ${service.accent}
                          `}
                        />
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}

        </div>
      </section>

      <Footer />

      {/* RETOUR EN HAUT */}
      {showScrollTop && !selectedImage && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
      fixed
      bottom-5 right-5
      sm:bottom-7 sm:right-7
      z-40
      flex
      h-12 w-12
      items-center justify-center
      rounded-full
      bg-brand-blue
      text-white
      shadow-xl
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-brand-blue/90
      hover:shadow-2xl
    "
          aria-label="Retour en haut de la page"
          title="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* PHOTO PLEIN ÉCRAN */}
      {selectedImage && (
        <div
          className="
            fixed inset-0
            z-[100]
            bg-slate-950/95
            backdrop-blur-sm
            flex items-center justify-center
            p-4 sm:p-8
          "
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              top-5 right-5
              sm:top-8 sm:right-8
              w-11 h-11
              flex items-center justify-center
              rounded-full
              bg-white/10
              text-white
              hover:bg-white/20
              transition
            "
            aria-label="Fermer l'image"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={selectedImage}
            alt="Réalisation DOMINET RÉNOVATION"
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-full
              max-h-[88vh]
              object-contain
              rounded-2xl
              shadow-2xl
            "
          />
        </div>
      )}
    </>
  );
}