import React from "react";
import Container from "@/components/layout/Container";

const page = () => {
  return (
    <section className="py-20 md:py-40">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Ochrana osobných údajov (GDPR)
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          V spoločnosti{" "}
          <strong className="text-gray-900">Stavino s. r. o.</strong> dbáme na
          bezpečnosť vašich údajov. Tieto informácie vysvetľujú, ako spracúvame
          vaše osobné údaje v súvislosti s prevádzkou nášho stolárstva a webovej
          stránky.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            1. Identifikácia prevádzkovateľa
          </h3>
          <p className="text-gray-600 leading-loose">
            <strong className="text-gray-900">Obchodné meno:</strong> Stavino s.
            r. o.
            <br />
            <strong className="text-gray-900">Sídlo:</strong> Cabov 111, 094 14
            Cabov
            <br />
            <strong className="text-gray-900">IČO:</strong> 55775641
            <br />
            <strong className="text-gray-900">DIČ:</strong> 2122085658
            <br />
            <strong className="text-gray-900">IČ DPH:</strong> nie je platcom
            DPH
            <br />
            <strong className="text-gray-900">Štatutárny orgán:</strong>{" "}
            Slavomír Dudáš, konateľ
            <br />
            <strong className="text-gray-900">E-mail:</strong>{" "}
            info@stavino-stolarstvo.sk
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
          2. Účel spracúvania údajov
        </h3>
        <p className="text-gray-600 mb-4">
          Vaše údaje spracúvame na nasledujúce účely:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li>
            <strong className="text-gray-900">Vybavenie dopytu:</strong> Meno,
            e-mail a telefón pre vypracovanie cenovej ponuky na nábytok alebo
            zasklenie.
          </li>
          <li>
            <strong className="text-gray-900">Plnenie zmluvy:</strong> Údaje
            potrebné na zameranie, výrobu, montáž a fakturáciu.
          </li>
          <li>
            <strong className="text-gray-900">Marketing a analytika:</strong>{" "}
            Používanie cookies na meranie návštevnosti a optimalizáciu reklám
            (Google Analytics, Meta Pixel).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
          3. Právny základ
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li>Plnenie zmluvy a predzmluvné vzťahy.</li>
          <li>Oprávnený záujem prevádzkovateľa.</li>
          <li>Súhlas (pri marketingových cookies).</li>
          <li>Zákonná povinnosť (archivácia účtovných dokladov).</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
          4. Doba uchovávania
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li>Dopyty: 2 roky.</li>
          <li>Faktúry a zmluvná dokumentácia: 10 rokov.</li>
          <li>
            Cookies: Podľa typu (maximálne 2 roky alebo do vymazania
            užívateľom).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
          5. Príjemcovia údajov
        </h3>
        <p className="text-gray-600 mb-4">
          Údaje môžu byť poskytnuté nasledujúcim subjektom:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li>Poskytovateľ hostingu.</li>
          <li>Externá účtovná kancelária.</li>
          <li>
            Nástroje Google (Analytics) a Meta (v prípade spustenia reklám).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
          6. Vaše práva
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Máte právo na prístup k údajom, ich opravu, vymazanie, obmedzenie
          spracúvania, ako aj právo namietať proti spracúvaniu a právo na
          prenosnosť údajov. Svoje práva môžete uplatniť na e-maile:{" "}
          <a
            href="mailto:info@stavino-stolarstvo.sk"
            className="text-blue hover:underline"
          >
            info@stavino-stolarstvo.sk
          </a>
          .
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
          7. Cookies
        </h3>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Tento web používa cookies. Nastavenia súhlasu môžete kedykoľvek zmeniť
          prostredníctvom cookie lišty na našom webe.
        </p>

        <p className="text-sm text-gray-400 italic border-top pt-8">
          Aktualizované dňa 11. 05. 2026
        </p>
      </Container>
    </section>
  );
};

export default page;
