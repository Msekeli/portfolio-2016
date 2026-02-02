import { useState } from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Text from "../components/Text";
import Surface from "../components/Surface";

const items = [
  {
    q: "Who are you?",
    a: "I am a software developer focused on building clean, scalable, and user-friendly web experiences.",
  },
  {
    q: "What do you specialize in?",
    a: "I specialize in React, modern CSS, and building structured front-end systems that scale.",
  },
  {
    q: "What drives your work?",
    a: "I enjoy turning complex ideas into simple, elegant interfaces that feel intentional and calm.",
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section>
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
