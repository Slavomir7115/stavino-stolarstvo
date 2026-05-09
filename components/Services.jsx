"use client";
import React from "react";
import Container from "./layout/Container";
import H2 from "./layout/H2";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Interiér na mieru",
    desc: "Od moderných kuchýň po masívne stoly. Každý kus je originál navrhnutý pre váš priestor.",
    items: ["Kuchynské linky", "Vstavané skrine", "Masívny nábytok"],
    image: "/nabytok.webp",
  },
  {
    title: "Záhradná architektúra",
    desc: "Štýlové altánky a funkčné prístrešky s dôrazom na dlhú životnosť materiálov.",
    items: ["Moderné altánky", "Drevené terasy", "Prístrešky pre autá"],
    image: "/zahradna.webp",
    featured: true,
  },
  {
    title: "Zasklenie terás",
    desc: "Hliníkové systémy, ktoré predĺžia sezónu na vašej terase bez ohľadu na počasie.",
    items: ["Bezrámové systémy", "Rámové zasklenie", "Hliníkové profily"],
    image: "/zasklenie.webp",
  },
];

const Services = () => {
  return (
    <section className="py-20">
      <Container className="flex flex-col gap-20">
        <div className="flex items-center justify-center text-center">
          <H2>Komplexné riešenia pre váš domov a záhradu</H2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeIn", delay: index * 0.2 }}
              key={index}
              className={`flex flex-col ${service.featured ? "md:-mt-8" : "md:mt-8"}`}
            >
              <div className="relative aspect-4/5 overflow-hidden ">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="py-8">
                <h3 className="text-2xl   mb-4">{service.title}</h3>
                <p className=" mb-6 leading-relaxed">{service.desc}</p>

                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm ">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
