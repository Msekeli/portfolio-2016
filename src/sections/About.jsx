import { useState } from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Text from "../components/Text";
import Surface from "../components/Surface";
import items from "../data/about.json";

export default function About() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>

      <div className="space-y-4">
        {items.map((item, index) => {
          const open = openIndex === index;

          return (
            <Surface
              key={item.q}
              elevated={open}
              className={`
                transition-all
                ${open ? "gold-glow border border-gold-main/30" : ""}
              `}
            >
              <button
                onClick={() => setOpenIndex(open ? null : index)}
                className="
                  w-full text-left
                  flex justify-between items-start gap-4
                  cursor-pointer
                  transition-all
                  hover:translate-x-0.5
                "
              >
                <span className="font-medium text-text-primary">{item.q}</span>

                <span
                  className={`
                    text-lg leading-none
                    transition-colors
                    ${open ? "text-gold-main" : "text-text-muted"}
                    hover:text-gold-main
                  `}
                >
                  {open ? "–" : "+"}
                </span>
              </button>

              {open && (
                <div className="mt-3 md:mt-4">
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
