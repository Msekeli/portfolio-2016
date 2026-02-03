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
            className="
              group
              transition-all
              hover:gold-glow
              hover:border hover:border-gold-main/30
            "
          >
            <div className="space-y-4">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full aspect-16/10 object-cover
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="text-base font-medium text-text-primary">
                  {project.title}
                </h3>

                <Text variant="secondary" className="text-sm leading-relaxed">
                  {project.description}
                </Text>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-2.5 py-1
                      text-xs
                      rounded-md
                      border border-gold-main/30
                      text-gold-soft
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-3">
                <Button variant="primary">
                  <span className="flex items-center gap-2">
                    <Icon name="ExternalLink" />
                    Live Demo
                  </span>
                </Button>

                <Button variant="secondary">
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
