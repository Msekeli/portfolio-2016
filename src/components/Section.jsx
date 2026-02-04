import Container from "./Container";

export default function Section({ children, id }) {
  return (
    <section
      id={id}
      className="
        snap-start
        pt-8 md:pt-[7vh]
        pb-24
      "
    >
      <Container>{children}</Container>
    </section>
  );
}
