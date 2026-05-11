"use client";
import Container from "./layout/Container";
import { MessageSquare, Ruler, Hammer, Truck } from "lucide-react";
import H2 from "./layout/H2";
import { motion } from "framer-motion";
const steps = [
  {
    title: "Konzultácia",
    desc: "Vypočujeme si vaše predstavy a navrhneme technické riešenie, ktoré spája dizajn s funkčnosťou.",
    icon: <MessageSquare size={32} strokeWidth={2} />,
  },
  {
    title: "Zameranie",
    desc: "Prídeme priamo k vám, aby sme priestor presne zamerali a predišli akýmkoľvek komplikáciám.",
    icon: <Ruler size={32} strokeWidth={2} />,
  },
  {
    title: "Výroba",
    desc: "V našej dielni premieňame kvalitné materiály na poctivý nábytok či konštrukcie.",
    icon: <Hammer size={32} strokeWidth={2} />,
  },
  {
    title: "Montáž",
    desc: "Finálny produkt dovezieme a odborne namontujeme s dôrazom na čistotu a detail.",
    icon: <Truck size={32} strokeWidth={2} />,
  },
];

export default function Process() {
  return (
    <section id="ako-to-prebieha" className="py-30 ">
      <Container>
        <div className="text-center mb-20">
          <H2>Ako prebieha spolupráca</H2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeIn", delay: index * 0.2 }}
              key={index}
              className="relative group"
            >
              <div className="relative  flex flex-col items-start">
                <div className="mb-6 text-gold  p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-medium  mb-4">{step.title}</h3>

                <p className="leading-relaxed ">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
