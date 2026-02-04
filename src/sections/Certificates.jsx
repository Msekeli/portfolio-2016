import { useState, useEffect } from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Surface from "../components/Surface";
import Button from "../components/Button";
import certificates from "../data/certificates.json";
import { MotionContainer, MotionItem } from "../animations/Motion";

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  // Detect desktop (lg breakpoint)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // ESC to close (desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isDesktop]);

  return (
    <Section id="certificates">
      <SectionTitle>Certificates</SectionTitle>

      {/* LOCAL POSITIONING CONTEXT */}
      <div className="relative">
        {/* ANIMATED GRID */}
        <MotionContainer>
          <div
            className={`
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
              transition-opacity duration-300
              ${activeCert ? "opacity-30 pointer-events-none" : ""}
            `}
          >
            {visibleCertificates.map((cert) => (
              <MotionItem key={cert.id}>
                <Surface
                  noPadding
                  onClick={isDesktop ? () => setActiveCert(cert) : undefined}
                  className={`
                    gold-glow
                    interactive
                    transition-transform duration-300
                    ${isDesktop ? "cursor-pointer hover:scale-105" : ""}
                  `}
                >
                  <div className="w-full aspect-4/3 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={`Certificate ${cert.id}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Surface>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>

        {/* DESKTOP-ONLY FOCUS MODE */}
        {isDesktop && activeCert && (
          <div
            className="
              absolute inset-0 z-50
              flex items-start justify-center
              bg-black/60 backdrop-blur-sm
              pt-16 lg:pt-24
            "
            onClick={() => setActiveCert(null)}
          >
            <Surface
              noPadding
              elevated
              className="
                gold-glow
                relative
                max-w-3xl w-[90%]
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full aspect-4/3 flex items-center justify-center p-6">
                <img
                  src={activeCert.image}
                  alt="Certificate preview"
                  className="w-full h-full object-contain"
                />
              </div>

              <button
                onClick={() => setActiveCert(null)}
                className="
                  absolute top-4 right-4
                  text-white/80 hover:text-white
                  text-xl
                "
              >
                ✕
              </button>
            </Surface>
          </div>
        )}
      </div>

      {/* VIEW MORE / LESS */}
      <div className="mt-16 flex justify-center relative z-10">
        <Button onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? "View Less" : "View More"}
        </Button>
      </div>
    </Section>
  );
}
