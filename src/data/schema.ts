import { reviews } from "./reviews";
import { site } from "./site";

export function businessSchema() {
  const googleReviews = reviews.filter((review) => review.source === "Google");

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    name: site.name,
    url: site.url,
    image: `${site.url}/og.jpg`,
    telephone: site.phoneTel,
    email: site.email,
    taxID: site.businessId,
    foundingDate: String(site.founded),
    founder: {
      "@type": "Person",
      name: site.owner,
      jobTitle: site.ownerTitle,
    },
    description: site.description,
    currenciesAccepted: "EUR",
    knowsLanguage: ["fi", "en", "ru", "uk"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rytikatu 3",
      postalCode: "94830",
      addressLocality: "Kemi",
      addressCountry: "FI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.googleMapsUrl,
    areaServed: ["Kemi", "Tornio", "Keminmaa", "Lappi"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [site.facebook],
    location: [
      {
        "@type": "Place",
        name: "Ajoneuvojen ja teollisuuden huoltohalli",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rytikatu 3",
          postalCode: "94830",
          addressLocality: "Kemi",
          addressCountry: "FI",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
      },
      {
        "@type": "Place",
        name: "Toimisto",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Veitsiluodontie 16",
          postalCode: "94830",
          addressLocality: "Kemi",
          addressCountry: "FI",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: googleReviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.stars,
        bestRating: 5,
      },
      reviewBody: review.quote,
      publisher: { "@type": "Organization", name: "Google" },
    })),
  };
}
