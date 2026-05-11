import Container from "./layout/Container";
import Image from "next/image";
import PrimaryButton from "./layout/PrimaryButton";
import H1 from "./layout/H1";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="pb-20 pt-40 flex items-center justify-center">
      <Container className="flex flex-col gap-15 ">
        <div className="flex flex-col items-start gap-10">
          <H1>
            Výnimočný nábytok na mieru
            <br className="hidden lg:block" /> a hliníkové zasklenia terás
          </H1>
          <Link href="#kontakt">
            <PrimaryButton>Nezáväzná ponuka</PrimaryButton>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 ">
          <div>
            <p className="text-xl leading-relaxed">
              Od moderných kuchýň z masívu až po unikátne interiérové detaily.
              Vytvárame nábytok, ktorý spája precízne remeslo s nadčasovým
              dizajnom.
            </p>
          </div>
          <div className="border-l border-gold pl-4 flex  items-start">
            <p>
              Realizujeme aj altánky, terasy a hliníkové zasklenia. Naše
              projekty dodávame a montujeme v rámci celého Slovenska.
            </p>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            alt="Luxusný nábytok na mieru"
            fill
            src={"/herobanner.webp"}
            priority
            className="object-cover "
          />
        </div>
      </Container>
    </section>
  );
}
