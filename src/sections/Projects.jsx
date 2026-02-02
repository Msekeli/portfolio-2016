import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Text from "../components/Text";
import Surface from "../components/Surface";
import Button from "../components/Button";
import Icon from "../components/Icon";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Tailwind CSS.",
    tech: ["React", "Vite", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Savings Application",
    description: "A cloud-hosted savings tracker with secure authentication.",
    tech: ["C#", ".NET", "Azure"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Reward Chest App",
    description: "Interactive reward system with animated user feedback.",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Tailwind CSS.",
    tech: ["React", "Vite", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Savings Application",
    description: "A cloud-hosted savings tracker with secure authentication.",
    tech: ["C#", ".NET", "Azure"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Reward Chest App",
    description: "Interactive reward system with animated user feedback.",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Surface key={project.title} className="interactive hover:gold-glow">
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{project.title}</h3>

                <Text variant="secondary">{project.description}</Text>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1 rounded-full
                      text-sm
                      border border-gold-main/40
                      text-gold-main
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-4">
                <Button>
                  <span className="flex items-center gap-2">
                    <Icon name="ExternalLink" />
                    Live Demo
                  </span>
                </Button>

                <Button>
                  <span className="flex items-center gap-2">
                    <Icon name="Github" />
                    Source Code
                  </span>
                </Button>
              </div>
            </div>
          </Surface>
        ))}
      </div>
    </Section>
  );
}
