"use client";
import React, { useEffect } from "react";
import Container from "@/components/layout/Container";

const CookiePolicy = () => {
  useEffect(() => {
    if (window.cky) {
    }
  }, []);

  return (
    <Container className="py-20">
      <div className="max-w-4xl mx-auto px-6 py-12 font-body leading-relaxed text-foreground">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-widest text-foreground">
          Zásady používania súborov cookie
        </h1>

        <div className="flex flex-col space-y-2 mb-12 text-xs uppercase tracking-tighter opacity-60">
          <p>Dátum účinnosti: 12. máj 2026</p>
          <p>Posledná aktualizácia: 12. máj 2026</p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide">
            Čo sú súbory cookie?
          </h2>
          <div className="space-y-4 opacity-90">
            <p>
              Tieto Zásady používania súborov cookie vysvetľujú, čo sú súbory
              cookie, ako ich používame, aké typy súborov cookie používame (t.
              j. informácie, ktoré zhromažďujeme pomocou súborov cookie a ako sa
              tieto informácie používajú) a ako môžete spravovať svoje
              nastavenia súborov cookie.
            </p>
            <p>
              Súbory cookie sú malé textové súbory, ktoré sa používajú na
              ukladanie malých kúskov informácií. Ukladajú sa do vášho
              zariadenia po načítaní webovej stránky vo vašom prehliadači. Tieto
              súbory cookie pomáhajú zabezpečiť správne fungovanie webovej
              stránky, zvyšujú jej bezpečnosť, poskytujú lepšiu používateľskú
              skúsenosť a pomáhajú nám analyzovať výkon stránky, aby sme vedeli,
              čo funguje a kde je potrebné zlepšenie.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide">
            Ako používame súbory cookie?
          </h2>
          <div className="space-y-4 opacity-90">
            <p>
              Podobne ako väčšina online služieb, aj naša webová stránka používa
              súbory cookie prvej a tretej strany na rôzne účely. Súbory cookie
              prvej strany sú nevyhnutné predovšetkým pre správne fungovanie
              webovej stránky a nezhromažďujú žiadne vaše osobne
              identifikovateľné údaje.
            </p>
            <p>
              Súbory cookie tretích strán, ktoré používame na našej webovej
              stránke, nám pomáhajú pochopiť, ako webová stránka funguje, ako s
              ňou interagujete, zaisťujú bezpečnosť našich služieb, umožňujú
              zobrazovanie relevantných reklám a celkovo vám poskytujú lepšiu
              používateľskú skúsenosť a zrýchľujú vašu budúcu prácu s našou
              stránkou.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide">
            Typy súborov cookie, ktoré používame
          </h2>

          <div className="cky-audit-table-element bg-foreground/5 rounded-sm p-4 border border-foreground/10 min-h-[200px]"></div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide">
            Správa predvolieb súborov cookie
          </h2>
          <button className="cky-banner-element border border-foreground/40 px-6 py-3 rounded-sm transition-all hover:bg-foreground/10 uppercase text-xs tracking-widest mb-6 text-foreground">
            Predvoľby súhlasu
          </button>

          <div className="space-y-4 mt-4 opacity-90">
            <p>
              Svoje nastavenia súborov cookie môžete kedykoľvek zmeniť kliknutím
              na tlačidlo vyššie. To vám umožní znovu otvoriť lištu so súhlasom
              a aktualizovať svoje predvoľby alebo okamžite odvolať svoj súhlas.
            </p>
            <p>
              Nižšie sú uvedené odkazy na dokumenty podpory pre hlavné webové
              prehliadače:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm italic">
              <li>
                <a
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/accounts/answer/32050"
                >
                  Chrome
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.apple.com/sk-sk/guide/safari/sfri11471/mac"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.mozilla.org/sk/kb/odstranenie-cookies"
                >
                  Firefox
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.microsoft.com/sk-sk/topic/odstránenie-súborov-cookie"
                >
                  Internet Explorer / Edge
                </a>
              </li>
            </ul>
          </div>
        </section>

        <p className="text-[10px] opacity-40 mt-20 border-t border-foreground/10 pt-4">
          Zásady používania súborov cookie vygenerované pomocou{" "}
          <a href="https://www.cookieyes.com" className="underline">
            CookieYes
          </a>
          .
        </p>
      </div>
    </Container>
  );
};

export default CookiePolicy;
