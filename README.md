# Lounais-Lapin Remonttipalvelu

Yrityksen verkkosivu. Staattinen Astro-sivusto, yksi etusivu ja tietosuojaseloste.

## Käynnistys

```bash
npm install
npm run dev
```

Julkaistava versio:

```bash
npm run build
npm run preview
```

## Kuvien vaihto

Sivun kuvat ovat väliaikaisia kuvituskuvia. Vaihda ne yrityksen omiin kuviin säilyttämällä tiedostonimet:

- `src/assets/meista-tyomaa.jpg` — etusivun iso kuva
- `src/assets/rakentaminen.jpg` — Meistä-osio ja rakentamisen kortti
- `src/assets/autohuolto.jpg` — autohuollon kortti
- `public/og.jpg` — kuva, joka näkyy kun sivu jaetaan somessa

Käytä vaakakuvaa etusivulle ja somen kuvaan. Rakennuksen jälkeen sivu tekee kuvista WebP-versiot.

## Arvostelut ja yhteystiedot

- Arvostelutekstit: `src/data/reviews.ts`
- Google-arvosana, arvostelujen määrä, puhelin, sähköposti ja linkit: `src/data/site.ts`
- Palvelut: `src/data/services.ts`

`googleWriteReviewUrl` kannattaa vaihtaa Google Business -profiilin kohtaan **Pyydä arvosteluja**. Siihen asti nappi avaa yrityksen Google-listauksen.

## Lomake

Oletuksena lomake avaa kävijän sähköpostiohjelman osoitteeseen `tdianoff@hotmail.com`.

Vastaanotto ilman sähköpostiohjelmaa:

1. **Formspree:** aseta `src/data/site.ts` tiedostossa `formMode` arvoksi `"formspree"` ja `formEndpoint` oman lomakkeen osoitteeksi, esimerkiksi `https://formspree.io/f/abcxyz`.
2. **Netlify Forms:** aseta `formMode` arvoksi `"netlify"` ja julkaise sivusto Netlifyyn. Lomake näkyy Netlifyn Forms-näkymässä.

## Julkaisu ja domain

Sivusto voidaan julkaista Netlifyyn, Cloudflare Pagesiin tai Verceliin. Julkaisukomento on `npm run build` ja julkaistava kansio on `dist`.

Domain `lounaislapinremonttipalvelu.net` ohjataan palveluun nimipalvelussa:

- Netlify ja Cloudflare Pages: lisää domain palvelun ohjeen mukaan ja päivitä nimipalvelun tietueet.
- Kun domain vastaa, tarkista että `astro.config.mjs` kohdan `site` on `https://www.lounaislapinremonttipalvelu.net`.

Netlifyyn on valmis `netlify.toml`.
