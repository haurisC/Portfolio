import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">Hello there! I am Hauris!</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a 4th year BSCS student at the University of Virginia, with an interest in SWE/AI/ML{" "}
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a  software engineer with{" "}
        <Highlight> years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
