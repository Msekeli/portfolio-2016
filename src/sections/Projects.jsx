import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Text from "../components/Text";
import Surface from "../components/Surface";
import Button from "../components/Button";
import Icon from "../components/Icon";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Surface
            key={project.title}
            className="group interactive hover:gold-glow"
          >
            <div className="space-y-5">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full aspect-4/3 object-cover
                    transform transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Text */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium">{project.title}</h3>

                <Text variant="secondary">{project.description}</Text>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1 rounded-full text-sm
                      border border-gold-main/40
                      text-gold-main
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
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
