import Link from "next/link";
import Container from "@/components/layout/Container";
import { NAV_LINKS } from "@/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue text-background border-t border-white/10 pt-16 pb-8">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* 1. LOGO  */}
        <section className="space-y-6 flex flex-col gap-2">
          <Link href="/">
            <Image width={200} height={100} src="/logo.png" />
          </Link>
          <p className="text-background/80 text-sm leading-relaxed max-w-xs font-body font-light">
            Špecializujeme sa na kvalitné stolárske práce a moderné zasklenia.
            Každý projekt realizujeme s dôrazom na detail a trvácnosť.
          </p>
        </section>

        {/* 2. MENU */}
        <nav>
          <h4 className="text-gold uppercase  font-body tracking-widest text-lg mb-6 font-bold">
            Navigácia
          </h4>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-background/80 hover:text-gold transition-colors text-sm uppercase tracking-widest font-normal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. CONTACT */}
        <section>
          <h4 className="text-gold uppercase tracking-widest text-lg mb-6 font-bold">
            Kontaktujte nás
          </h4>
          <div className="space-y-5 text-sm text-background/80 font-normal">
            <Link
              href="tel:0919194375"
              className="flex items-center gap-4 hover:text-gold transition-colors w-fit"
            >
              <Phone size={16} className="text-gold" />
              <span>0919 194 375</span>
            </Link>
            <Link
              href="mailto:info@stavino-stolarstvo.sk"
              className="flex items-center gap-4 hover:text-gold transition-colors w-fit"
            >
              <Mail size={16} className="text-gold" />
              <span>info@stavino-stolarstvo.sk</span>
            </Link>
            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-gold mt-1" />
              <span>Stavino s. r. o. Cabov 111, 094 14 Cabov</span>
            </div>
          </div>
        </section>
      </Container>

      {/* BOTTOM BAR */}
      <Container className="pt-8 border-t border-background/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-[2px] text-background/80 text-center md:text-left">
        <p>
          stavino-stolarstvo.sk — tvorba webu{" "}
          <a
            href="https://slavomirjoni.dev"
            target="_blank"
            className="hover:text-gold transition-colors underline underline-offset-4"
          >
            slavomirjoni.dev
          </a>
        </p>

        <div className="flex gap-6">
          <Link
            href="/ochrana-osobnych-udajov"
            className="hover:text-gold transition-colors"
          >
            Ochrana osobných údajov
          </Link>
          <Link href="/cookies" className="hover:text-gold transition-colors">
            Ochrana súborov cookies
          </Link>
        </div>
      </Container>
    </footer>
  );
}
