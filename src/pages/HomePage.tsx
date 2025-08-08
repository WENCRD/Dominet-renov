import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
// import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-white">
        <div className="container-pro grid gap-8 md:grid-cols-2 items-center">
          <div>
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
            <img
              className="rounded-xl2 object-cover h-[320px] w-full"
              src="/hero-renov.jpg"
              alt="Travaux de rénovation"
            />
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section id="prestations" className="section bg-slate-50">
        <div className="container-pro">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue">
            Prestations
          </h2>
          <p className="mt-2 text-slate-600">Tout pour vos projets intérieur/extérieur.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard title="Peinture intérieure" description="Préparation, enduits, finitions mates/satinées." />
            <ServiceCard title="Revêtements de sol" description="Parquet, stratifié, carrelage, plinthes." />
            <ServiceCard title="Salle de bain" description="Rénovation complète, étanchéité, faïence." />
            <ServiceCard title="Cloison & placo" description="Cloisons, doublages, isolation, plafonds." />
            <ServiceCard title="Menuiserie" description="Pose portes, fenêtres, cuisine, rangements." />
            <ServiceCard title="Façade & extérieur" description="Nettoyage, ravalement, petite maçonnerie." />
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
      <section id="devis" className="section bg-brand-blue text-white">
        <div className="container-pro grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Besoin d’un devis ?</h2>
            <p className="mt-2 text-white/80">Réponse sous 24h, déplacement gratuit.</p>
          </div>
          <form className="card p-6 bg-white text-slate-900 space-y-3">
            <input className="w-full border rounded-xl2 px-4 py-3" placeholder="Nom" />
            <input className="w-full border rounded-xl2 px-4 py-3" placeholder="Téléphone" />
            <input className="w-full border rounded-xl2 px-4 py-3" placeholder="Email" />
            <textarea className="w-full border rounded-xl2 px-4 py-3" placeholder="Votre besoin" rows={4} />
            <button className="btn-accent w-full">Envoyer ma demande</button>
          </form>
        </div>
      </section>

  {/* <Contact /> */}
      <Footer />
    </>
  );
}
