import { useRef, useEffect, useState } from "react";
import { asset } from "../utils/asset"; 
const images = [
  {
    src: asset("/sdbc.avif"),
    label: "Un espace pensé pour votre confort",
  },
  {
    src: asset("/salon.avif"),
    label: "Transformez votre intérieur",
  },
  {
    src: asset("/cuisine.avif"),
    label: "Une cuisine à votre image",
  },
];

export default function HeroCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const width = container.clientWidth;

    container.scrollTo({
      left: width * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      goToSlide(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
        rounded-3xl
        shadow-xl
        group
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      <div
        ref={scrollRef}
        className="
          flex
          overflow-x-hidden
          snap-x
          snap-mandatory
        "
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            className="
              relative
              snap-start
              flex-shrink-0
              w-full
              h-[420px]
              sm:h-[480px]
              lg:h-[560px]
              overflow-hidden
            "
          >
            <img
              src={image.src}
              alt={image.label}
              className={`
                w-full
                h-full
                object-cover
                transition-transform
                duration-[6000ms]
                ease-out
                ${
                  activeIndex === index
                    ? "scale-105"
                    : "scale-100"
                }
              `}
            />

            {/* Dégradé */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/65
                via-black/10
                to-transparent
              "
            />

            {/* Petit texte */}
            <div className="absolute bottom-8 left-6 right-6 sm:left-8">
              <p className="text-brand-yellow text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">
                DOMINET RÉNOVATION
              </p>

              <p className="mt-2 text-white text-2xl sm:text-3xl font-semibold">
                {image.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicateurs */}
      <div className="absolute bottom-5 right-5 sm:right-8 flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Afficher l'image ${index + 1}`}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300
              ${
                activeIndex === index
                  ? "w-8 bg-brand-yellow"
                  : "w-2 bg-white/60 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}