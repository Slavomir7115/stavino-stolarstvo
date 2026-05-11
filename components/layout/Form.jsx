import React from "react";
import PrimaryButton from "./PrimaryButton";

const Form = () => {
  return (
    <div className="bg-background/5 p-8 md:p-12 rounded-sm border border-background/10">
      <h3 className="text-2xl mb-8 text-gold">Nezáväzný dopyt</h3>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-400">
              Meno
            </label>
            <input
              type="text"
              className="bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors font-body text-background"
              placeholder="Vaše meno"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-400">
              E-mail
            </label>
            <input
              type="email"
              className="bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors font-body text-background"
              placeholder="vas@email.sk"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-400">
            Telefónne číslo
          </label>
          <input
            type="tel"
            className="bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors font-body text-background"
            placeholder="+421 000 000 000"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-400">
            O čo máte záujem?
          </label>
          <select className="bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors font-body text-zinc-400 cursor-pointer">
            <option className="bg-blue" value="zasklenie">
              Zasklenie terasy / balkóna
            </option>
            <option className="bg-blue" value="nabytok">
              Nábytok na mieru
            </option>
            <option className="bg-blue" value="altanok">
              Altánok / Prístrešok
            </option>
            <option className="bg-blue" value="ine">
              Iné
            </option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-400">
            Správa
          </label>
          <textarea
            rows="4"
            className="bg-transparent border-b border-background/20 py-2 focus:border-gold outline-none transition-colors font-body resize-none text-background"
            placeholder="Popíšte nám vašu predstavu..."
          ></textarea>
        </div>
        <p className="text-xs  mt-4 leading-relaxed">
          Odoslaním formulára beriete na vedomie, že spoločnosť Stavino s. r. o.
          spracúva vaše osobné údaje za účelom vypracovania cenovej ponuky a
          vybavenia dopytu. Viac informácií nájdete na stránke{" "}
          <a href="/ochrana-osobnych-udajov" className="text-gold underline">
            Ochrana osobných údajov
          </a>
          .
        </p>

        <div className="pt-4">
          <PrimaryButton className="w-full justify-center">
            Odoslať dopyt
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
