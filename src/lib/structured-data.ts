import { companyDetails, siteConfig } from "@/lib/data";
import { seoMetadata, SITE_URL, toAbsoluteAssetUrl } from "@/lib/seo";

const foundingDateIso = "2013-12-23";

const postalAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: "01 Swami Samarth Nagar, Kalpataru Building",
  addressLocality: "Shirpur-Warwade",
  postalCode: "425405",
  addressRegion: "Maharashtra",
  addressCountry: "IN",
};

const geoCoordinates = {
  "@type": "GeoCoordinates" as const,
  latitude: siteConfig.contact.coordinates.lat,
  longitude: siteConfig.contact.coordinates.lng,
};

const sharedBusinessFields = {
  name: seoMetadata.organizationName,
  alternateName: seoMetadata.alternateName,
  url: SITE_URL,
  logo: toAbsoluteAssetUrl(seoMetadata.logoPath),
  description: seoMetadata.description,
  email: siteConfig.contact.email,
  telephone: `+91-${siteConfig.contact.phone}`,
  foundingDate: foundingDateIso,
  address: postalAddress,
  geo: geoCoordinates,
  identifier: [
    {
      "@type": "PropertyValue" as const,
      name: "CIN",
      value: companyDetails.cin,
    },
    {
      "@type": "PropertyValue" as const,
      name: "GSTIN",
      value: companyDetails.gstin,
    },
    {
      "@type": "PropertyValue" as const,
      name: "Udyog Aadhar",
      value: companyDetails.udyogAadhar,
    },
  ],
};

export function getStructuredDataGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        ...sharedBusinessFields,
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "ProfessionalService",
        ...sharedBusinessFields,
        image: toAbsoluteAssetUrl(seoMetadata.logoPath),
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Maharashtra, India",
        },
      },
    ],
  };
}
