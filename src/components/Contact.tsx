// import { useState } from "react";

// export default function FloatingContactForm() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Bouton flottant */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-6 right-6 z-50 bg-brand-yellow text-brand-blue font-semibold px-5 py-3 rounded-full shadow-lg hover:brightness-105 transition"
//       >
//         📩 Contact
//       </button>

//       {/* Formulaire popup */}
//       {open && (
//         <div className="fixed bottom-20 right-6 w-80 bg-white border border-slate-200 rounded-xl2 shadow-card p-4 z-50">
//           <form className="space-y-3">
//             <input className="w-full border rounded-xl2 px-4 py-2" placeholder="Nom" />
//             <input className="w-full border rounded-xl2 px-4 py-2" placeholder="Téléphone" />
//             <textarea className="w-full border rounded-xl2 px-4 py-2" rows={3} placeholder="Message" />
//             <button className="btn-accent w-full">Envoyer</button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// }
