import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

type SubType = {
  name: string;
  image: string;
};

type Service = {
  title: string;
  description: string;
  details: string;
  heroImage: string;
  subtypes: SubType[];
};

const servicesData: Record<string, Service> = {
  peinture: {
    title: "Peinture intérieure",
    description:
      "Redonnez vie à votre intérieur avec des finitions soignées et durables.",
    details:
      "DOMINET RÉNOVATION intervient pour vos travaux de peinture, de la préparation des supports jusqu'aux finitions. Chaque surface est travaillée avec soin pour obtenir un résultat propre, homogène et durable.",
    heroImage: "/muri.jpg",
    subtypes: [
      { name: "Murs", image: "/muri.jpg" },
      { name: "Plafonds", image: "/spots.jpg" },
      { name: "Façade", image: "/crep.jpg" },
      { name: "Boiseries", image: "/boi.jpg" },
    ],
  },

  sol: {
    title: "Revêtements de sol",
    description:
      "Des sols esthétiques et résistants adaptés à chaque pièce.",
    details:
      "Parquet, stratifié, carrelage ou vinyle : nous préparons les supports et réalisons une pose soignée afin d'obtenir un résultat esthétique, régulier et durable.",
    heroImage: "/parq.png",
    subtypes: [
      { name: "Parquet", image: "/parq.png" },
      { name: "Stratifié", image: "/strat.png" },
      { name: "Carrelage", image: "/carr.png" },
      { name: "Vinyle", image: "/viny.png" },
    ],
  },

  salledebain: {
    title: "Salle de bain",
    description:
      "Transformez votre salle de bain en un espace moderne et fonctionnel.",
    details:
      "De la rénovation partielle à la transformation complète, nous vous accompagnons dans l'aménagement de votre salle de bain : douche, baignoire, faïence, meubles et finitions.",
    heroImage: "/dou.png",
    subtypes: [
      { name: "Douche", image: "/dou.png" },
      { name: "Baignoire", image: "/baign.png" },
      { name: "Faïence", image: "/fai.jpg" },
      { name: "Meuble", image: "/meu.png" },
    ],
  },

  placo: {
    title: "Cloison & placo",
    description:
      "Repensez vos espaces et améliorez le confort de votre logement.",
    details:
      "Création de cloisons, doublage, faux plafonds et isolation : nous réalisons les travaux nécessaires pour aménager vos espaces et améliorer leur confort thermique et acoustique.",
    heroImage: "/rail.png",
    subtypes: [
      { name: "Cloisons", image: "/rail.png" },
      { name: "Isolation", image: "/lain.jpg" },
      { name: "Plafond", image: "/plaf.jpeg" },
      { name: "Placo", image: "/pla.png" },
    ],
  },

  menuiserie: {
    title: "Menuiserie",
    description:
      "Des aménagements pratiques qui s'intègrent naturellement à votre intérieur.",
    details:
      "Pose de portes, fenêtres, cuisines et rangements : DOMINET RÉNOVATION réalise différents travaux de menuiserie et d'aménagement pour améliorer votre intérieur.",
    heroImage: "/cui.jpg",
    subtypes: [
      { name: "Portes", image: "/port.jpg" },
      { name: "Fenêtres", image: "/fen.jpg" },
      { name: "Cuisine", image: "/cui.jpg" },
      { name: "Rangements", image: "/dress.jpg" },
    ],
  },

  facade: {
    title: "Façade & extérieur",
    description:
      "Protégez et valorisez durablement l'extérieur de votre habitation.",
    details:
      "Nous intervenons pour le nettoyage, le ravalement et la remise en état de vos façades ainsi que pour différents travaux de petite maçonnerie extérieure.",
    heroImage: "/crep.jpg",
    subtypes: [
      { name: "Ravalement", image: "/crep.jpg" },
      { name: "Nettoyage", image: "/net.jpg" },
      { name: "Maçonnerie", image: "/mac.jpeg" },
    ],
  },

  electricite: {
    title: "Électricité",
    description:
      "Des installations électriques adaptées à vos projets de rénovation.",
    details:
      "Dans le cadre de vos travaux de rénovation, nous intervenons sur différents équipements électriques : éclairages, prises, interrupteurs et installations associées.",
    heroImage: "/electricite.jpg",
    subtypes: [
      { name: "Éclairage", image: "/eclairage.jpg" },
      { name: "Prises", image: "/prises.jpg" },
      { name: "Installation", image: "/electricite.jpg" },
    ],
  },

  sinistre: {
    title: "Intervention après sinistre",
    description:
      "Remettez votre logement en état après un dégât ou un sinistre.",
    details:
      "Après un dégât des eaux ou un autre sinistre, nous intervenons pour remettre en état les surfaces endommagées : murs, plafonds, peintures, sols et autres éléments nécessitant une rénovation.",
    heroImage: "/sinistre.jpg",
    subtypes: [
      { name: "Dégât des eaux", image: "/degat-eaux.jpg" },
      { name: "Remise en état", image: "/sinistre.jpg" },
      { name: "Rénovation", image: "/renovation.jpg" },
    ],
  },
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = servicesData[slug as string];

  if (!service) {
    return (
      <div className="section text-center">
        <h1 className="text-2xl font-semibold">Service non trouvé</h1>

        <Link
          to="/"
          className="inline-block mt-5 text-brand-blue underline"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    );
  }

  const emailSubject = encodeURIComponent(
    `Demande de devis - ${service.title}`
  );

  return (
    <>
      {/* HERO */}
<section className="bg-white overflow-hidden">

  {/* MOBILE */}
  <div className="lg:hidden px-5 pt-5">
    <Link
      to="/"
      className="inline-block mb-5 text-sm text-slate-500 hover:text-brand-blue"
    >
      ← Retour à l'accueil
    </Link>

    <div className="relative min-h-[520px] rounded-3xl overflow-hidden shadow-xl">

      {/* Photo */}
      <img
        src={service.heroImage}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dégradé */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/90
          via-black/35
          to-black/10
        "
      />

      {/* Texte sur la photo */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">

        <p className="text-brand-yellow text-xs uppercase tracking-[0.2em] font-semibold">
          DOMINET RÉNOVATION
        </p>

        <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-[1.05] text-white">
          {service.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
          {service.description}
        </p>

        <a
          href={`mailto:dominet.renov@gmail.com?subject=${emailSubject}`}
          className="btn-accent mt-6 w-full sm:w-auto px-7 py-4"
        >
          ✉️ Demander un devis
        </a>

      </div>
    </div>

    {/* Explication sous le Hero */}
    <div className="py-10 px-1">
      <p className="text-xs uppercase tracking-[0.2em] text-brand-blue font-semibold">
        Notre savoir-faire
      </p>

      <p className="mt-4 text-slate-600 leading-7">
        {service.details}
      </p>

      <Link
        to={`/realisations#${slug}`}
        className="inline-flex mt-5 font-semibold text-brand-blue"
      >
        Voir nos réalisations →
      </Link>
    </div>
  </div>


  {/* TABLETTE / PC */}
  <div className="hidden lg:block">
    <div className="container-pro py-16">

      <Link
        to="/"
        className="text-sm text-slate-500 hover:text-brand-blue transition"
      >
        ← Retour à l'accueil
      </Link>

      <div className="mt-8 grid grid-cols-2 gap-16 items-center">

        {/* Texte */}
        <div>
          <p className="text-sm uppercase tracking-[0.2em] font-semibold text-brand-blue">
            DOMINET RÉNOVATION
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-brand-blue leading-tight">
            {service.title}
          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            {service.description}
          </p>

          <p className="mt-5 text-slate-500 leading-7">
            {service.details}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:dominet.renov@gmail.com?subject=${emailSubject}`}
              className="btn-accent px-7 py-3"
            >
              Demander un devis
            </a>

            <Link
              to={`/realisations#${slug}`}
              className="
                px-7 py-3
                rounded-xl
                border border-slate-300
                font-semibold
                text-slate-700
                hover:border-brand-blue
                hover:text-brand-blue
                transition
              "
            >
              Voir les réalisations
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -top-5 -right-5 w-40 h-40 bg-brand-blue/10 rounded-full" />

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </div>
  </div>

</section>

      {/* PRESTATIONS */}
      <section className="section bg-slate-50">
        <div className="container-pro">

          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-brand-blue">
              Notre savoir-faire
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
              Ce que nous réalisons
            </h2>

            <p className="mt-4 text-slate-600">
              Découvrez les différents travaux que nous pouvons réaliser
              dans le cadre de votre projet.
            </p>
          </div>

          {/* Grandes cartes */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {service.subtypes.map((type, index) => (
              <div
                key={index}
                className="
                  relative
                  h-[280px]
                  md:h-[340px]
                  rounded-3xl
                  overflow-hidden
                  group
                  shadow-md
                "
              >
                <img
                  src={type.image}
                  alt={type.name}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Dégradé sur l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-sm text-white/70">
                    DOMINET RÉNOVATION
                  </p>

                  <h3 className="mt-1 text-2xl md:text-3xl font-semibold text-white">
                    {type.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONFIANCE */}
      <section className="section bg-white">
        <div className="container-pro">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-brand-blue">
                Votre projet
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
                Un accompagnement pour vos travaux
              </h2>

              <p className="mt-5 text-slate-600 leading-7">
                Chaque projet est différent. DOMINET RÉNOVATION prend en
                compte vos besoins et les caractéristiques de votre logement
                afin de vous proposer une intervention adaptée.
              </p>

              <p className="mt-4 text-slate-600 leading-7">
                De la préparation jusqu'aux finitions, l'objectif est de
                réaliser des travaux propres et cohérents avec votre projet.
              </p>
            </div>

            {/* Bloc décalé */}
            <div className="bg-brand-blue text-white rounded-3xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-semibold">
                Pourquoi nous contacter ?
              </h3>

              <div className="mt-7 space-y-5">
                <div className="flex gap-4">
                  <span className="text-xl">✓</span>
                  <div>
                    <p className="font-semibold">Travail soigné</p>
                    <p className="text-white/70 text-sm mt-1">
                      Une attention portée aux détails et aux finitions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-xl">✓</span>
                  <div>
                    <p className="font-semibold">Plusieurs corps de métier</p>
                    <p className="text-white/70 text-sm mt-1">
                      Une solution pratique pour vos projets de rénovation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-xl">✓</span>
                  <div>
                    <p className="font-semibold">Projet personnalisé</p>
                    <p className="text-white/70 text-sm mt-1">
                      Des travaux adaptés à votre logement et à vos besoins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA DEVIS */}
<section className="bg-slate-50 py-16 md:py-24">
  <div className="container-pro">

    <div
      className="
        relative
        overflow-hidden
        bg-brand-blue
        text-white
        rounded-3xl
        px-7 py-10
        md:px-12 md:py-14
        lg:px-16
        shadow-xl
      "
    >
      {/* Décoration arrière-plan */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-white/5" />

      <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">

        {/* Texte */}
        <div className="max-w-2xl">
          <p className="text-brand-yellow uppercase tracking-[0.2em] text-sm font-semibold">
            Un projet ?
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Parlons de votre rénovation.
          </h2>

          <p className="mt-4 text-white/75 text-lg">
            Besoin d'un renseignement ou d'un devis ?
            Contactez DOMINET RÉNOVATION pour échanger sur votre projet.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 lg:min-w-[240px]">
          <a
            href={`mailto:dominet.renov@gmail.com?subject=${emailSubject}`}
            className="btn-accent px-7 py-4 text-center"
          >
            ✉️ Demander un devis
          </a>

          <Link
            to={`/realisations#${slug}`}
            className="
              px-7 py-4
              border border-white/30
              rounded-xl
              font-semibold
              text-center
              hover:bg-white
              hover:text-brand-blue
              transition
            "
          >
            Voir les réalisations
          </Link>
        </div>

      </div>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}