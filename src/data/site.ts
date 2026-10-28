export const site = {
  name: "Lounais-Lapin Remonttipalvelu Ky",
  shortName: "Lounais-Lapin Remonttipalvelu",
  url: "https://www.lounaislapinremonttipalvelu.net",
  description:
    "Rakentaminen, teollisuuden kunnossapito ja autohuolto Kemissä. Kokemusta vuodesta 1999. Soita 040 769 5463.",
  email: "tdianoff@hotmail.com",
  phoneDisplay: "040 769 5463",
  phoneTel: "+358407695463",
  businessId: "2275674-9",
  founded: 2009,
  experienceSince: 1999,
  owner: "Tomi Dianoff",
  ownerRole: "Kunnossapito / ajoneuvoasentaja",
  ownerTitle: "Toimitusjohtaja",
  rating: 4.9,
  reviewCount: 15,
  facebook:
    "https://www.facebook.com/p/Lounais-Lapin-Remonttipalvelu-ky-100063727263792/?locale=fi_FI",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Lounais-Lapin+Remonttipalvelu+Ky+Rytikatu+3+Kemi",
  /**
   * Vaihda tämä Google Business -profiilin kohtaan "Pyydä arvosteluja".
   * Toistaiseksi linkki avaa yrityksen Google-listauksen.
   */
  googleWriteReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Lounais-Lapin+Remonttipalvelu+Ky+Rytikatu+3+Kemi",
  luotettavaKumppani: "https://www.vastuugroup.fi/fi-fi/palvelut/luotettava-kumppani",
  /**
   * mailto avaa kävijän sähköpostin.
   * formspree lähettää lomakkeen osoitteeseen formEndpoint.
   * netlify käyttää Netlify Formsia, kun sivusto on Netlifyssä.
   */
  formMode: "mailto" as "mailto" | "formspree" | "netlify",
  formEndpoint: "",
  geo: { lat: 65.683448, lng: 24.649453 },
  languages: ["suomi", "englanti", "venäjä", "ukraina"],
};

export const yearsOnTheJob = new Date().getFullYear() - site.experienceSince;

export const locations = [
  {
    id: "halli",
    name: "Ajoneuvojen ja teollisuuden huoltohalli",
    street: "Rytikatu 3",
    city: "94830 Kemi",
    note: "Renkaat, jarrut, öljynvaihdot, Defa-asennukset ja raskaan kaluston huolto.",
  },
  {
    id: "toimisto",
    name: "Toimisto",
    street: "Veitsiluodontie 16",
    city: "94830 Kemi",
    note: "Rakentaminen, kunnossapito ja asennustyöt.",
  },
] as const;

export const hours = [
  { days: "Ma–pe", time: "8–16" },
  { days: "La–su", time: "Sopimuksen mukaan" },
] as const;

export const trustItems = [
  { label: "Google", value: "4,9 ★" },
  { label: "Kokemus", value: "Vuodesta 1999" },
  { label: "Kumppani", value: "Luotettava" },
  { label: "Takuu", value: "12 kk työlle" },
] as const;

export const references = [
  "Nordic Project Line Oy",
  "Tornion Rakennus-sora Oy",
  "Ot Service Oy",
  "Hv-Maarakennus Oy",
  "Pautec Oy",
  "Isännöitsijät ja taloyhtiöt",
] as const;

export const nav = [
  { href: "/#palvelut", label: "Palvelut" },
  { href: "/#meista", label: "Meistä" },
  { href: "/#arvostelut", label: "Arvostelut" },
  { href: "/#yhteystiedot", label: "Yhteystiedot" },
] as const;
