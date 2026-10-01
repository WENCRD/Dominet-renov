import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  slug: string;
  image: string;
  accent?: string;
};

export default function ServiceCard({
  title,
  description,
  slug,
  image,
  accent = "bg-brand-blue",
}: Props) {
  return (
    <Link to={`/service/${slug}`} className="block h-full">
      <article
        className="
          relative
          min-h-[280px]
          sm:min-h-[320px]
          lg:min-h-[360px]
          rounded-3xl
          overflow-hidden
          shadow-md
          hover:shadow-xl
          transition-all
          duration-300
          hover:-translate-y-1
          group
        "
      >
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Voile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

        {/* Accent métier */}
        <div
          className={`
            absolute
            bottom-0 left-0
            w-full h-2
            ${accent}
          `}
        />

        {/* Contenu */}
        <div
          className="
            relative z-10
            min-h-[280px]
            sm:min-h-[320px]
            lg:min-h-[360px]
            flex flex-col
            justify-end
            p-6
            text-white
          "
        >
          {/* Petite pastille */}
          <div className="mb-3">
            <span
              className={`
                inline-block
                w-3 h-3
                rounded-full
                ${accent}
                shadow
              `}
            />
          </div>

          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 text-white/80">
            {description}
          </p>

          <span className="mt-5 font-semibold text-white">
            Découvrir →
          </span>
        </div>
      </article>
    </Link>
  );
}