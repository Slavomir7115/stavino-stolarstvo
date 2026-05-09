import Container from "./layout/Container";
import { Phone, Mail, MapPin } from "lucide-react";
import H2 from "./layout/H2";
import Form from "./layout/Form";

export default function Contact() {
  return (
    <section className="bg-blue text-background py-30" id="kontakt">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <Form />

        <div className="flex flex-col justify-center">
          <H2>Poďme spolu niečo vytvoriť</H2>
          <p className="text-background/80 mb-12 mt-5 max-w-md font-light">
            Máte otázky alebo konkrétnu predstavu? Napíšte nám cez formulár,
            alebo nás kontaktujte priamo.
          </p>

          <div className="space-y-10">
            <a href="tel:+421900000000" className="flex items-center group">
              <Phone size={24} className="text-gold mr-6" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                  Telefón
                </span>
                <span className="text-xl font-light group-hover:text-gold transition-colors">
                  +421 900 000 000
                </span>
              </div>
            </a>

            <a href="mailto:info@firma.sk" className="flex items-center group">
              <Mail size={24} className="text-gold mr-6" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                  E-mail
                </span>
                <span className="text-xl font-light group-hover:text-gold transition-colors">
                  info@firma.sk
                </span>
              </div>
            </a>

            <div className="flex items-center">
              <MapPin size={24} className="text-gold mr-6" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                  Dielňa a adresa
                </span>
                <span className="text-xl font-light uppercase">
                  Hlavná 123, Mesto
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
