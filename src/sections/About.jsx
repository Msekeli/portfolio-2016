import { useState } from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Text from "../components/Text";
import Surface from "../components/Surface";
import items from "../data/about.json";

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>

      <div className="space-y-4 max-w-3xl">
        {items.map((item, index) => {
          const open = openIndex === index;

          return (
            <Surface
              key={item.q}
              elevated={open}
              className={open ? "gold-glow" : ""}
            >
              <button
                onClick={() => setOpenIndex(open ? null : index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-text-muted">{open ? "–" : "+"}</span>
              </button>

              {open && (
                <div className="mt-4">
                  <Text variant="secondary">{item.a}</Text>
                </div>
              )}
            </Surface>
          );
        })}
      </div>
    </Section>
  );
}
