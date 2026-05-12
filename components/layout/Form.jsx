"use client";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";

const Form = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mnjwlopy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-background/5 p-8 md:p-12 rounded-sm border border-gold text-center animate-in fade-in duration-500">
        <h3 className="text-2xl mb-4 text-gold uppercase tracking-widest">
          Ďakujeme
        </h3>
        <p className="text-background/80">
          Vaša požiadavka bola úspešne prijatá. Budeme vás kontaktovať.
        </p>
        <button
          onClick={() => setStatus("")}
          className="mt-6 text-xs uppercase tracking-widest text-background underline"
        >
          Poslať ďalší dopyt
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background/5 p-8 md:p-12 rounded-sm border border-background/10">
      <h3 className="text-2xl mb-8 text-gold">Nezáväzný dopyt</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="_gotcha"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-background">
              Meno
            </label>
            <input
              name="name"
              type="text"
              required
              className="bg-transparent border-b border-background/20 py-2 focus:border-gold outline-none transition-colors font-body text-background placeholder:text-background/60"
              placeholder="Vaše meno"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-background">
              E-mail
            </label>
            <input
              name="email"
              type="email"
              required
              className="bg-transparent border-b border-background/20 py-2 focus:border-gold outline-none transition-colors font-body text-background placeholder:text-background/60"
              placeholder="vas@email.sk"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-background">
            Telefónne číslo
          </label>
          <input
            name="phone"
            type="tel"
            required
            className="bg-transparent border-b border-background/20 py-2 focus:border-gold outline-none transition-colors font-body text-background placeholder:text-background/60"
            placeholder="+421 000 000 000"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-background">
            O čo máte záujem?
          </label>
          <select
            name="interest"
            className="bg-transparent border-b border-background/20 py-2 focus:border-gold outline-none transition-colors font-body text-background/80 cursor-pointer appearance-none"
          >
            <option className="bg-[#0a0a0a]" value="zasklenie">
              Zasklenie terasy / balkóna
            </option>
            <option className="bg-[#0a0a0a]" value="nabytok">
              Nábytok na mieru
            </option>
            <option className="bg-[#0a0a0a]" value="altanok">
              Altánok / Prístrešok
            </option>
            <option className="bg-[#0a0a0a]" value="ine">
              Iné
            </option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-background">
            Správa
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="bg-transparent border-b border-background/20 py-2 focus:border-gold outline-none transition-colors font-body resize-none text-background placeholder:text-background/60"
            placeholder="Popíšte nám vašu predstavu..."
          ></textarea>
        </div>

        <p className="text-xs text-background/50 mt-4 leading-relaxed">
          Odoslaním formulára beriete na vedomie, že spoločnosť Stavino s. r. o.
          spracúva vaše osobné údaje...{" "}
          <a href="/ochrana-osobnych-udajov" className="text-gold underline">
            Viac info
          </a>
          .
        </p>

        <div className="pt-4">
          <PrimaryButton
            type="submit"
            disabled={status === "loading"}
            className="w-full justify-center"
          >
            {status === "loading" ? "Odosiela sa..." : "Odoslať dopyt"}
          </PrimaryButton>

          {status === "error" && (
            <p className="text-red-500 text-xs mt-2 text-center">
              Chyba pri odosielaní. Skúste to prosím neskôr.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
