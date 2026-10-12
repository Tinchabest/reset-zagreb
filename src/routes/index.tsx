import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Leaf } from "lucide-react";

// Images are served from /public so they work on any host (not only Lovable).
const heroAsset = { url: "/images/soba-hero.jpg" };
const detailAsset = { url: "/images/stolice.jpg" };
const logoAsset = { url: "/images/logo.png" };

const PHONE = "091 753 5101";
const PHONE_HREF = "tel:+385917535101";
const MAPS_URL = "https://maps.app.goo.gl/?q=RESET+masa%C5%BEa+Podbre%C5%BEje+V.+32A+Zagreb";
const SITE_URL = "https://reset-masaza.lovable.app";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "RESET masaža",
  description:
    "Salon masaže u Zagrebu, Podbrežje. Tretman i trajanje dogovaraju se telefonski.",
  url: SITE_URL,
  telephone: "+385917535101",
  image: `${SITE_URL}/favicon.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Podbrežje V. 32A",
    postalCode: "10020",
    addressLocality: "Zagreb",
    addressCountry: "HR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.7812923, longitude: 15.959827 },
  areaServed: "Zagreb",
  openingHours: "Mo-Sa",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Masaža Zagreb — RESET masaža, Podbrežje" },
      {
        name: "description",
        content:
          "RESET masaža — masaža u Zagrebu (Podbrežje V. 32A, Novi Zagreb). Tretman i trajanje dogovaramo na pozivu. Naručivanje: 091 753 5101.",
      },
      { name: "keywords", content: "masaža Zagreb, masaža Novi Zagreb, masaža Podbrežje, RESET masaža" },
      { property: "og:title", content: "Masaža Zagreb — RESET masaža, Podbrežje" },
      {
        property: "og:description",
        content:
          "RESET masaža — masaža u Zagrebu (Podbrežje V. 32A, Novi Zagreb). Tretman i trajanje dogovaramo na pozivu. Naručivanje: 091 753 5101.",
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: Index,
});

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
          <a
            href={PHONE_HREF}
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Naruči se
          </a>
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
              Masaža u Zagrebu — trenutak mira za vaše tijelo
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
                Kako se naručiti
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

        {/* Usluge / dogovor */}
        <section id="usluge" className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Usluge</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">
            Tretman dogovaramo na pozivu
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Ne nudimo unaprijed zadane pakete. Kod nas se svaki tretman, njegovo trajanje i
            cijena dogovaraju u kratkom telefonskom razgovoru — tako da dobijete točno ono
            što vaše tijelo treba.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
            {[
              {
                t: "1 · Nazovite",
                d: "Javite se na 091 753 5101 i recite što vas muči ili što biste željeli.",
              },
              {
                t: "2 · Dogovorimo",
                d: "Zajedno biramo vrstu masaže, trajanje i termin koji vam odgovara.",
              },
              {
                t: "3 · Dođete na RESET",
                d: "Podbrežje V. 32A, Zagreb — mirno mjesto samo za vas u tom terminu.",
              },
            ].map((s) => (
              <article key={s.t} className="bg-card p-8">
                <Leaf className="h-5 w-5 text-accent" />
                <h3 className="mt-5 text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </article>
            ))}
          </div>

          <a
            href={PHONE_HREF}
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> Nazovite {PHONE}
          </a>
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
