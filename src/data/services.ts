export type Service = {
  id: string;
  title: string;
  text: string;
  icon: string;
  layout: "feature" | "card" | "wide";
  image?: "rakentaminen" | "autohuolto";
  tags?: string[];
};

export const services: Service[] = [
  {
    id: "rakentaminen",
    title: "Rakentaminen ja remontit",
    text: "Rakennus- ja remonttityöt omakotitaloista taloyhtiöihin. Kokemusta työmailta Etelä- ja Pohjois-Suomesta.",
    icon: "building",
    layout: "feature",
    image: "rakentaminen",
  },
  {
    id: "autohuolto",
    title: "Autokorjaamo ja huolto",
    text: "Renkaat, jarrut, öljynvaihdot ja Defa-asennukset Rytikadun hallissa. Myös raskaan kaluston huolto. Työlle 12 kuukauden takuu.",
    icon: "car",
    layout: "feature",
    image: "autohuolto",
  },
  {
    id: "kunnossapito",
    title: "Teollisuuden kunnossapito",
    text: "Laitos- ja kunnossapitotyöt tuotantolaitoksissa ja kaivoksilla. Taustaa muun muassa Kemin Veitsiluodosta.",
    icon: "factory",
    layout: "card",
  },
  {
    id: "asennukset",
    title: "Asennustyöt",
    text: "Kone-, ilmastointi- ja sprinkler-asennukset sekä muut asennustehtävät asiakkaan kohteessa.",
    icon: "wind",
    layout: "card",
  },
  {
    id: "hitsaus",
    title: "Hitsaus",
    text: "Hitsaustyöt teollisuuteen, rakentamiseen ja korjaamon tarpeisiin.",
    icon: "flame",
    layout: "card",
  },
  {
    id: "maanrakennus",
    title: "Maanrakennus ja putkityöt",
    text: "Maanrakennus- ja putkityöt. Kokemusta aina Norjan Huippuvuorille asti.",
    icon: "mountain",
    layout: "card",
  },
  {
    id: "tyovoima",
    title: "Työvoimaa eri aloilta",
    text: "Kun oma väki ei riitä, saat meiltä tekijät juuri siihen työhön.",
    icon: "users",
    layout: "wide",
    tags: [
      "Koneasentajat",
      "Hitsaajat",
      "Maanrakentajat",
      "Ilmastointiasentajat",
      "Rakennusmiehet",
      "Muurarit",
      "Sprinkler-asentajat",
    ],
  },
];

export const serviceOptions = services.map((service) => service.title).concat("Muu työ");
