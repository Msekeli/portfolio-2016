import Section from "../components/Section";
import Text from "../components/Text";
import Button from "../components/Button";
import hero from "../data/hero.json";

export default function Hero() {
  return (
    <Section id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text block */}
        <div className="space-y-6">
          <Text variant="secondary">{hero.greeting}</Text>

          <h1 className="text-4xl md:text-5xl font-semibold gold-accent">
            {hero.name}
          </h1>

          {/* Headline / role */}
          <h2 className="text-xl md:text-2xl font-medium text-text-secondary">
            {hero.headline}
          </h2>

          <Text>{hero.description}</Text>

          {/* Tech stack tag */}
          {Array.isArray(hero.techStack) && (
            <div className="pt-2 hidden md:block">
              <span className="tag">
                <span className="tag-label">{hero.techStackLabel}</span>
                <span className="tag-value">{hero.techStack.join(" · ")}</span>
              </span>
            </div>
          )}

          <Button to="projects">{hero.cta}</Button>
        </div>

        {/* Image block */}
        <div className="w-full">
          <div className="w-full surface rounded-2xl gold-glow p-6">
            <img
              src="/hero-image.svg"
              alt="Hero illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
