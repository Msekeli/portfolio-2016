import Section from "../components/Section";
import Text from "../components/Text";
import Button from "../components/Button";

export default function Hero() {
  return (
    <Section id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Text block */}
        <div className="space-y-6">
          <Text variant="secondary">Hi, I’m</Text>

          <h1 className="text-4xl md:text-5xl font-semibold gold-accent">
            Msekeli Mkwibiso
          </h1>

          <Text variant="secondary">
            I bring ideas to life through innovative and visually appealing web
            solutions.
          </Text>

          <Button>View My Work</Button>
        </div>

        {/* Image block — MUST be visible */}
        <div className="w-full flex justify-center">
          <div className="w-64 h-80 surface rounded-2xl border border-red-500" />
        </div>
      </div>
    </Section>
  );
}
