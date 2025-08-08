// src/components/ServiceCard.tsx
type Props = { title: string; description: string; icon?: React.ReactNode; };

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <article className="card p-6 hover:shadow-lg transition">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl2 bg-brand/5 grid place-items-center text-brand text-xl">
          {icon ?? "🛠️"}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="mt-1 text-slate-600">{description}</p>
        </div>
      </div>
    </article>
  );
}
