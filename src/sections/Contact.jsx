import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Text from "../components/Text";
import Surface from "../components/Surface";
import Button from "../components/Button";
import Icon from "../components/Icon";

export default function Contact() {
  return (
    <Section>
      <SectionTitle>Contact</SectionTitle>

      <div className="max-w-2xl">
        <Surface className="gold-glow">
          <div className="space-y-6">
            <Text variant="secondary">
              I’m always open to discussing new opportunities, collaborations,
              or interesting projects. If you’d like to work together or just
              say hello, feel free to reach out.
            </Text>

            <div className="flex flex-wrap gap-4">
              <Button>
                <span className="flex items-center gap-2">
                  <Icon name="Mail" />
                  Email Me
                </span>
              </Button>

              <Button>
                <span className="flex items-center gap-2">
                  <Icon name="Github" />
                  GitHub
                </span>
              </Button>

              <Button>
                <span className="flex items-center gap-2">
                  <Icon name="Linkedin" />
                  LinkedIn
                </span>
              </Button>
            </div>
          </div>
        </Surface>
      </div>
    </Section>
  );
}
