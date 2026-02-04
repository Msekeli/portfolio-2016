import { useState, useEffect } from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Surface from "../components/Surface";
import certificates from "../data/certificates.json";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  // ESC to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <Section id="certificates">
      <SectionTitle>Certificates</SectionTitle>

      <div className="relative">
        {/* FORCED 4 COLUMNS ON DESKTOP/BIG SCREENS */}
        <div
          className={`
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
            transition-opacity duration-300
            ${activeCert ? "opacity-10 pointer-events-none" : "opacity-100"}
          `}
        >
          {certificates.map((cert) => (
            <div key={cert.id}>
              <Surface
                noPadding
                onClick={() => setActiveCert(cert)}
                className="gold-glow interactive cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <div className="w-full aspect-4/3 flex items-center justify-center bg-black/20">
                  <img
                    src={cert.image}
                    alt={`Certificate ${cert.id}`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </Surface>
            </div>
          ))}
        </div>

        {/* CENTERED OVERLAY WITHIN SECTION */}
        {activeCert && (
          <div
            className="
              absolute inset-0 z-40
              flex items-center justify-center
              bg-black/30 backdrop-blur-sm
              rounded-2xl
            "
            onClick={() => setActiveCert(null)}
          >
            <Surface
              noPadding
              elevated
              className="gold-glow relative max-w-4xl w-[90%] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-center p-2">
                <img
                  src={activeCert.image}
                  alt="Certificate preview"
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              <button
                onClick={() => setActiveCert(null)}
                className="
                  absolute -top-12 right-0
                  text-white/70 hover:text-white
                  flex items-center gap-2 text-sm uppercase tracking-widest
                "
              >
                <span>Close</span>
                <span className="text-2xl">✕</span>
              </button>
            </Surface>
          </div>
        )}
      </div>
    </Section>
  );
}
