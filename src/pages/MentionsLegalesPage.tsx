import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Globe, Mail, Server } from "lucide-react";
import Footer from "../components/Footer";

export default function MentionsLegalesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pro py-12 md:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-blue transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-brand-blue">
              DOMINET RÉNOVATION
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-blue">
              Mentions légales
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Informations légales relatives au site internet de
              DOMINET RÉNOVATION.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container-pro">
          <div className="max-w-4xl mx-auto space-y-6">

            {/* ÉDITEUR */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-brand-blue" />
                </div>

                <h2 className="text-xl md:text-2xl font-semibold">
                  Éditeur du site
                </h2>
              </div>

              <div className="mt-6 space-y-2 text-slate-600 leading-7">
                <p>
                  <strong className="text-slate-800">
                    Nom commercial :
                  </strong>{" "}
                  DOMINET Rénov
                </p>

                <p>
                  <strong className="text-slate-800">
                    Entrepreneur :
                  </strong>{" "}
                  Dominik Wisniewski
                </p>

                <p>
                  <strong className="text-slate-800">
                    SIRET :
                  </strong>{" "}
                  819 944 604 00019
                </p>

                <p>
                  <strong className="text-slate-800">
                    Adresse :
                  </strong>{" "}
                  15 RUE HENRI CARRETTE, 59100 ROUBAIX
                </p>
              </div>
            </div>

            {/* CONTACT */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>

                <h2 className="text-xl md:text-2xl font-semibold">
                  Contact
                </h2>
              </div>

              <div className="mt-6 text-slate-600">
                <p>
                  Email :{" "}
                  <a
                    href="mailto:dominet.renov@gmail.com"
                    className="text-brand-blue font-medium hover:underline"
                  >
                    dominet.renov@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* RESPONSABLE PUBLICATION */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-brand-blue" />
                </div>

                <h2 className="text-xl md:text-2xl font-semibold">
                  Responsable de la publication
                </h2>
              </div>

              <p className="mt-6 text-slate-600 leading-7">
                Le responsable de la publication du site est
                Dominik Wisniewski.
              </p>
            </div>

            {/* HÉBERGEMENT */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-brand-blue" />
                </div>

                <h2 className="text-xl md:text-2xl font-semibold">
                  Hébergement
                </h2>
              </div>

              <div className="mt-6 text-slate-600 leading-7">
                <p>
                  Le site est hébergé par Hostinger.
                </p>
              </div>
            </div>

            {/* PROPRIÉTÉ INTELLECTUELLE */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl md:text-2xl font-semibold">
                Propriété intellectuelle
              </h2>

              <p className="mt-5 text-slate-600 leading-7">
                Les contenus présents sur ce site, notamment les textes,
                photographies, éléments graphiques et le logo, sont protégés
                par les règles applicables en matière de propriété
                intellectuelle.
              </p>

              <p className="mt-4 text-slate-600 leading-7">
                Toute reproduction ou utilisation non autorisée de ces
                contenus est interdite, sauf autorisation préalable de leur
                titulaire.
              </p>
            </div>

            {/* DONNÉES */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl md:text-2xl font-semibold">
                Données personnelles
              </h2>

              <p className="mt-5 text-slate-600 leading-7">
                Le site ne comporte pas de formulaire de contact enregistrant
                directement des données personnelles. Les demandes de contact
                sont effectuées par l'intermédiaire du logiciel de messagerie
                de l'utilisateur.
              </p>

              <p className="mt-4 text-slate-600 leading-7">
                Pour toute question relative à vos données personnelles,
                vous pouvez contacter DOMINET RÉNOVATION à l'adresse :
                {" "}
                <a
                  href="mailto:dominet.renov@gmail.com"
                  className="text-brand-blue font-medium hover:underline"
                >
                  dominet.renov@gmail.com
                </a>.
              </p>
            </div>

            {/* CRÉATION */}
            <div className="text-center pt-4">
              <p className="text-sm text-slate-400">
                Site internet réalisé pour DOMINET RÉNOVATION.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}