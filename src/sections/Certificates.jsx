import { useState } from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Surface from "../components/Surface";
import Button from "../components/Button";

const certificates = Array.from({ length: 9 }, (_, i) => ({
  id: i,
}));

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <Section>
      <SectionTitle>Certificates</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCertificates.map((cert) => (
          <Surface key={cert.id} className="group gold-glow interactive">
            <div className="relative rounded-xl">
              <div
                className="
                  w-full aspect-4/3
                  surface
                  transform transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>
          </Surface>
        ))}
      </div>

      {/* Button MUST always render */}
      <div className="mt-16 flex justify-center relative z-10">
        <Button onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? "View Less" : "View More"}
        </Button>
      </div>
    </Section>
  );
}
