import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import RootLayout from "../layouts/rootLayout";

export default function Products(second) {
  return (
    <RootLayout>
      <Section>
        <Hero></Hero>
      </Section>
      <h1>Productos</h1>
    </RootLayout>
  );
}
