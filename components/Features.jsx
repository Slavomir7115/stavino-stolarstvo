"use client";
import Container from "./layout/Container";
import { motion } from "framer-motion";

const features = [
  {
    title: "Materiály",
    desc: "Pracujeme výhradne s certifikovaným masívom a prémiovými hliníkovými systémami, ktoré odolajú času aj trendom.",
  },
  {
    title: "Precíznosť",
    desc: "Vlastná výroba nám dovoľuje kontrolovať každý milimeter. Od prvého rezania až po finálne osadenie u vás doma.",
  },
  {
    title: "Dostupnosť",
    desc: "Nezáleží na tom, kde staviate. Naše montážne tímy realizujú projekty po celom Slovensku s maximálnou čistotou.",
  },
];

export default function Features() {
  return (
    <section className="py-30 bg-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-1/2 text-[15rem] font-bold text-gold/3 leading-none select-none pointer-events-none translate-x-1/2">
        KVALITA
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          {features.map((f, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeIn", delay: i * 0.2 }}
              key={i}
              className="flex flex-col gap-6"
            >
              <div className="text-gold font-light text-5xl">0{i + 1}</div>

              <div className="h-px w-12 bg-gold" />

              <h3 className="text-2xl font-medium tracking-wide">{f.title}</h3>

              <p className="text-background/80 leading-relaxed font-light">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
