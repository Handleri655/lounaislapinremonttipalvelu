export type Review = {
  quote: string;
  name: string;
  stars: number;
  source: "Google" | "AutoJerry";
};

export const reviews: Review[] = [
  {
    quote:
      "Olipa mukava autokorjaamo, vaihdettiin renkaat ja korjattiin jarrut. Nopea palvelu ja korjaukset tuntuu onnistuneen hyvin. Hyvä lähihuoltopaikka ainakin Hepolan ja Rytikarin asukkaille.",
    name: "Tuomo M.",
    stars: 5,
    source: "Google",
  },
  {
    quote: "Vakipaikka. Osaamista on moneen lähtöön.",
    name: "Jari M.",
    stars: 5,
    source: "Google",
  },
  {
    quote: "Nopea ja hyvä palvelu. Öljynvaihto ja Defan asennus tehty.",
    name: "Natig B.",
    stars: 5,
    source: "Google",
  },
  {
    quote: "Hyvä työ ja hyvä palvelu.",
    name: "Aarne V.",
    stars: 5,
    source: "Google",
  },
  {
    quote: "Hyvä autokorjaamo! Ymmärtävät ja puhuvat myös ukrainaa ja venäjää.",
    name: "Aleksei Š.",
    stars: 5,
    source: "Google",
  },
  {
    quote: "Nopea ajansaanti ja edullinen.",
    name: "Irja H.",
    stars: 5,
    source: "AutoJerry",
  },
];
