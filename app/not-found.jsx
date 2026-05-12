import Link from "next/link";
import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/layout/PrimaryButton";

export default function NotFound() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-9xl font-bold text-foreground/10 absolute -z-10">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-widest">
            Stránka nenájdená
          </h2>
          <p className="text-foreground/60 max-w-md mb-8">
            Ľutujeme, ale stránka, ktorú hľadáte, neexistuje alebo bola
            presunutá. Vráťte sa späť k poctivému stolárstvu.
          </p>
          <Link href="/">
            <PrimaryButton>Späť na domovskú stránku</PrimaryButton>
          </Link>
        </div>
      </Container>
    </section>
  );
}
