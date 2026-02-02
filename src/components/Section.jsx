import Container from "./Container";

export default function Section({ children, id }) {
  return (
    <section
      id={id}
      className="
        min-h-screen
        snap-start
        pt-[7vh]
        pb-24
      "
    >
      <Container>{children}</Container>
    </section>
  );
}
