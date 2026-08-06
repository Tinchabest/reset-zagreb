import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Leaf } from "lucide-react";

import heroAsset from "@/assets/soba-hero.jpg.asset.json";
import detailAsset from "@/assets/stolice.jpg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";

const FACEBOOK_URL = "https://www.facebook.com/resetmasaza/";
const INSTAGRAM_URL = "https://www.instagram.com/reset_masaza/";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.098 4.388 23.03 10.125 23.927v-6.93H7.078v-2.874h3.047V9.854c0-3.012 1.792-4.68 4.533-4.68 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.49 0-1.955.927-1.955 1.877v2.258h3.328l-.532 2.874h-2.796v6.93C19.612 23.03 24 18.098 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.775-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RESET masaža — Zagreb, Podbrežje" },
      {
        name: "description",
        content:
          "RESET masaža u Zagrebu (Podbrežje V. 32A). Klasična, sportska, relax i terapeutska masaža. Naručite se na 091 753 5101.",
      },
      { property: "og:title", content: "RESET masaža — Zagreb, Podbrežje" },
      {
        property: "og:description",
        content:
          "Opuštajuće i terapeutske masaže u Zagrebu. Podbrežje V. 32A, 10020 Zagreb. Naručivanje: 091 753 5101.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "091 753 5101";
const PHONE_HREF = "tel:+385917535101";
const MAPS_URL = "https://maps.app.goo.gl/?q=RESET+masa%C5%BEa+Podbre%C5%BEje+V.+32A+Zagreb";

const usluge = [
  {
    naziv: "Klasična masaža",
    opis: "Masaža cijelog tijela ili pojedinih regija koja opušta mišiće i potiče cirkulaciju.",
    trajanje: "30 / 60 min",
  },
  {
    naziv: "Sportska masaža",
    opis: "Intenzivnija tehnika za brži oporavak nakon treninga i pripremu mišića za napor.",
    trajanje: "45 / 60 min",
  },
  {
    naziv: "Relax masaža",
    opis: "Nježni, ujednačeni pokreti uz eterična ulja — za smirivanje tijela i uma.",
    trajanje: "60 / 90 min",
  },
  {
    naziv: "Terapeutska masaža",
    opis: "Rad na bolnim točkama, ukočenom vratu, ramenima i leđima nakon dugog sjedenja.",
    trajanje: "30 / 60 min",
  },
  {
    naziv: "Masaža leđa i vrata",
    opis: "Kratki tretman fokusiran na najopterećenije područje — idealan u pauzi dana.",
    trajanje: "30 min",
  },
  {
    naziv: "Anticelulitna masaža",
    opis: "Snažnija tehnika za poticanje limfotoka i tonusa kože, najbolja u serijama.",
    trajanje: "45 min",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#pocetna" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="RESET masaža logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="sr-only">RESET masaža</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#usluge" className="transition-colors hover:text-foreground">
              Usluge
            </a>
            <a href="#o-nama" className="transition-colors hover:text-foreground">
              O nama
            </a>
            <a href="#kontakt" className="transition-colors hover:text-foreground">
              Kontakt
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook profil RESET masaže"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profil RESET masaže"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
            <a
              href={PHONE_HREF}
              className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Naruči se
            </a>
          </div>
        </div>
      </header>

      <main id="pocetna">
        {/* Hero */}
        <section className="relative flex min-h-[92vh] items-end overflow-hidden">
          <img
            src={heroAsset.url}
            alt="Prostor za masažu u salonu RESET u Zagrebu"
            width={763}
            height={918}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="veil absolute inset-0" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
            <p className="eyebrow text-secondary/90">Masaža · Zagreb · Podbrežje</p>
            <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-secondary md:text-7xl">
              Trenutak mira za vaše tijelo
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary/85">
              RESET je mali, tihi salon masaže u Zagrebu. Bez žurbe, bez gužve — samo vi,
              stručne ruke i sat vremena koji vraća energiju.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
              <a
                href="#usluge"
                className="inline-flex items-center rounded-sm border border-secondary/50 px-7 py-3.5 text-sm font-medium text-secondary transition-colors hover:bg-secondary/10"
              >
                Pogledaj usluge
              </a>
            </div>
          </div>
        </section>

        {/* Info traka */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3">
            {[
              { icon: MapPin, t: "Podbrežje V. 32A", s: "10020 Zagreb" },
              { icon: Clock, t: "Pon – Sub", s: "po dogovoru, uz najavu" },
              { icon: Phone, t: PHONE, s: "pozovite ili pošaljite poruku" },
            ].map(({ icon: Icon, t, s }) => (
              <div key={t} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t}</p>
                  <p className="text-sm text-muted-foreground">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usluge */}
        <section id="usluge" className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Usluge</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">
            Tretmani prilagođeni vašem tijelu
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Svaki tretman počinje kratkim razgovorom kako bismo odredili intenzitet i
            područja na kojima ćemo raditi.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {usluge.map((u) => (
              <article key={u.naziv} className="bg-card p-8">
                <Leaf className="h-5 w-5 text-accent" />
                <h3 className="mt-5 text-2xl">{u.naziv}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.opis}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {u.trajanje}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Cijene i točno trajanje dogovaramo telefonski, ovisno o odabranom tretmanu.
          </p>
        </section>

        {/* O nama */}
        <section id="o-nama" className="bg-card">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
            <img
              src={detailAsset.url}
              alt="Čekaonica salona RESET s dvije fotelje i stolićem"
              width={772}
              height={590}
              loading="lazy"
              className="rounded-sm object-cover shadow-[var(--shadow-soft)]"
            />
            <div>
              <p className="eyebrow">O nama</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Mjesto gdje se stvarno stane</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                RESET vodi Milan Zorić, masažni terapeut koji vjeruje da dobra masaža nije
                luksuz nego održavanje. Radimo u ugodnom, mirnom prostoru u Podbrežju, s
                jednim gostom u terminu — bez čekanja i bez buke.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Dolaze nam ljudi s ukočenim vratom od uredskog posla, sportaši u oporavku i
                svi koji jednostavno trebaju sat vremena za sebe.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-foreground">
                {[
                  "Individualni pristup i termin samo za vas",
                  "Ugodan, diskretan prostor",
                  "Naručivanje telefonom, brzo i jednostavno",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Kontakt</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Naručite svoj termin</h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Nazovite ili pošaljite poruku i dogovorit ćemo termin koji vam odgovara.
              </p>
              <div className="mt-10 space-y-6">
                <a href={PHONE_HREF} className="flex items-start gap-4 group">
                  <Phone className="mt-1 h-5 w-5 text-accent" />
                  <span>
                    <span className="block text-xl group-hover:underline">{PHONE}</span>
                    <span className="text-sm text-muted-foreground">Pozivi i poruke</span>
                  </span>
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <MapPin className="mt-1 h-5 w-5 text-accent" />
                  <span>
                    <span className="block text-xl group-hover:underline">
                      Podbrežje V. 32A
                    </span>
                    <span className="text-sm text-muted-foreground">10020 Zagreb</span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-accent" />
                  <span>
                    <span className="block text-xl">Ponedjeljak – subota</span>
                    <span className="text-sm text-muted-foreground">
                      Radno vrijeme po dogovoru
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Karta — RESET masaža, Podbrežje V. 32A, Zagreb"
                src="https://www.google.com/maps?q=Podbre%C5%BEje%20V.%2032A,%2010020%20Zagreb&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
          <p className="font-display text-xl tracking-[0.3em]">RESET</p>
          <p className="text-sm text-muted-foreground">
            Podbrežje V. 32A, 10020 Zagreb · {PHONE}
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RESET masaža
          </p>
        </div>
      </footer>
    </div>
  );
}
