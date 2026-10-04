import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import HeroCarousel from "../components/HeroCarousel";
import { Helmet } from "react-helmet-async";
import { asset } from "../utils/asset";
// import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Dominet Renov - Rénovation intérieure à [TA VILLE]</title>
        <meta
          name="description"
          content="Entreprise de rénovation à Roubaix : peinture, parquet, salle de bain, placo. Devis gratuit et intervention rapide."
        />
      </Helmet>
      {/* Hero */}
      <section className="section bg-white">
        <div className="container-pro grid gap-8 md:grid-cols-2 items-center">
          <div>
            {/* Logo DOMINET */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="bg-white rounded-3xl p-3 shadow-lg border border-slate-100">
                <img
                  src="/Dominet renov.jpg"
                  alt="DOMINET Rénov"
                  className="
        w-[130px]
        sm:w-[150px]
        lg:w-[170px]
        h-auto
        rounded-2xl
      "
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-brand-blue">
              Rénovation complète, finitions soignées,{" "}
              <span className="text-brand-yellow">devis gratuit</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Peinture, parquet, carrelage, salle de bain, maçonnerie légère… Intervention rapide et travail garanti.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#devis" className="btn-accent">Demander un devis</a>
              <a href="#prestations" className="btn-primary">Voir les prestations</a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <li>✔️ Déplacement gratuit</li>
              <li>✔️ Assurance décennale</li>
              <li>✔️ Respect des délais</li>
            </ul>
          </div>

          <div className="card p-2">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section id="prestations" className="section bg-slate-50">
        <div className="container-pro">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue">
            Prestations
          </h2>

          <p className="mt-2 text-slate-600">
            Tout pour vos projets de rénovation intérieure et extérieure.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Peinture intérieure"
              description="Préparation, enduits, finitions mates et satinées."
              slug="peinture"
              image={asset("/speinture.jpg")}
              accent="bg-blue-500"
            />

            <ServiceCard
              title="Revêtements de sol"
              description="Parquet, stratifié, carrelage et plinthes."
              slug="sol"
              image="/rsol.jpg"
              accent="bg-amber-600"
            />

            <ServiceCard
              title="Salle de bain"
              description="Rénovation complète, étanchéité et faïence."
              slug="salledebain"
              image="/sdb.jpg"
              accent="bg-cyan-500"
            />

            <ServiceCard
              title="Cloison & placo"
              description="Cloisons, doublages, isolation et plafonds."
              slug="placo"
              image="/cp.jpg"
              accent="bg-slate-400"
            />

            <ServiceCard
              title="Menuiserie"
              description="Pose de portes, fenêtres, cuisine et rangements."
              slug="menuiserie"
              image="/ebm.jpg"
              accent="bg-orange-500"
            />
{/* 
            <ServiceCard
              title="Façade & extérieur"
              description="Nettoyage, ravalement et petite maçonnerie."
              slug="facade"
              image="/images/facade.jpg"
              accent="bg-emerald-500"
            /> */}

            <ServiceCard
              title="Électricité"
              description="Installation, rénovation et mise aux normes électriques."
              slug="electricite"
              image="/te.jpg"
              accent="bg-yellow-400"
            />

            <ServiceCard
              title="Intervention après sinistre"
              description="Remise en état après dégâts des eaux et autres sinistres."
              slug="sinistre"
              image="/is.jpg"
              accent="bg-red-500"
            />
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="section bg-white">
        <div className="container-pro">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue">
            Avis clients
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {["Travail soigné", "Très réactif", "Excellent rapport qualité/prix"].map((t, i) => (
              <div key={i} className="card p-5">
                <p className="italic">“{t}.”</p>
                <div className="mt-3 text-sm text-slate-500">— Client vérifié</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Devis */}
      <section id="devis" className="bg-slate-50 py-16 md:py-24">
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
                  Une question, un projet de rénovation ou besoin d’un devis ?
                  Contactez DOMINET RÉNOVATION pour échanger sur vos besoins.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 lg:min-w-[250px]">
                <a
                  href="mailto:dominet.renov@gmail.com?subject=Demande%20de%20renseignement%20ou%20devis"
                  className="btn-accent px-7 py-4 text-center"
                >
                  ✉️ Demander un devis
                </a>

                <a
                  href="mailto:dominet.renov@gmail.com"
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
                  Poser une question
                </a>
              </div>

            </div>

            {/* Email */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/60">
                ✉ dominet.renov@gmail.com
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* <Contact /> */}
      <Footer />
    </>
  );
}
