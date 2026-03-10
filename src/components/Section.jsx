import Container from "./Container";

export default function Section({ children, id }) {
  return (
    <section id={id} className="snap-start min-h-screen flex pt-12 md:pt-0">
      <Container className="flex flex-col">{children}</Container>
    </section>
  );
}
