const galleryBase = "/images/projects/Gallery";

/** Paths only for files that exist in public/images/projects/Gallery */
const villageDevelopmentGallery = [
  `${galleryBase}/Village Development1.jpeg`,
  `${galleryBase}/Village Development2.jpeg`,
  `${galleryBase}/Village Development (2).jpeg`,
  `${galleryBase}/Village Development (3).jpeg`,
  `${galleryBase}/Village Development (5).jpeg`,
  `${galleryBase}/Village Development (6).jpeg`,
  `${galleryBase}/Village Development (7).jpeg`,
  `${galleryBase}/Village Development (8).jpeg`,
  `${galleryBase}/Village Development (9).jpeg`,
  `${galleryBase}/Village Development (10).jpeg`,
  `${galleryBase}/Village Development (11).jpeg`,
  `${galleryBase}/Village Development (12).jpeg`,
  `${galleryBase}/Village Development (13).jpeg`,
  `${galleryBase}/Village Development (14).jpeg`,
  `${galleryBase}/Village Development (15).jpeg`,
  `${galleryBase}/Village Development (16).jpeg`,
] as const;

const schoolBeautificationGallery = [
  `${galleryBase}/School Beautification.jpeg`,
  `${galleryBase}/School Beautification (1).jpeg`,
  `${galleryBase}/School Beautification (2).jpeg`,
  `${galleryBase}/School Beautification (3).jpeg`,
  `${galleryBase}/School Beautification (4).jpeg`,
  `${galleryBase}/School Beautification (5).jpeg`,
  `${galleryBase}/School Beautification (6).jpeg`,
  `${galleryBase}/School Beautification (7).jpeg`,
  `${galleryBase}/School Beautification (8).jpeg`,
  `${galleryBase}/School Beautification (9).jpeg`,
  `${galleryBase}/School Beautification (10).jpeg`,
  `${galleryBase}/School Beautification (11).jpeg`,
  `${galleryBase}/School Beautification (12).jpeg`,
  `${galleryBase}/School Beautification (13).jpeg`,
  `${galleryBase}/School Beautification (14).jpeg`,
  `${galleryBase}/School Beautification (15).jpeg`,
  `${galleryBase}/School Beautification (16).jpeg`,
  `${galleryBase}/School Beautification (18).jpeg`,
  `${galleryBase}/School Beautification (19).jpeg`,
  `${galleryBase}/School Beautification (20).jpeg`,
  `${galleryBase}/School Beautification (21).jpeg`,
] as const;

const solarInstallationsGallery = [
  `${galleryBase}/Solar Installations.jpeg`,
  `${galleryBase}/Solar Installations (1).jpeg`,
  `${galleryBase}/Solar Installations (2).jpeg`,
  `${galleryBase}/Solar Installations (3).jpeg`,
  `${galleryBase}/Solar Installations (4).jpeg`,
  `${galleryBase}/Solar Installations (5).jpeg`,
  `${galleryBase}/Solar Installations (6).jpeg`,
  `${galleryBase}/Solar Installations (7).jpeg`,
  `${galleryBase}/Solar Installations (8).jpeg`,
  `${galleryBase}/Solar Installations (9).jpeg`,
] as const;

const streetLightsGallery = [
  `${galleryBase}/Street Lights 1.jpeg`,
  `${galleryBase}/Street Lights 2.jpeg`,
  `${galleryBase}/Street Lights 3.jpeg`,
  `${galleryBase}/Street Lights 4.jpeg`,
  `${galleryBase}/Street Lights 5.jpeg`,
  `${galleryBase}/Street Lights 6.jpeg`,
  `${galleryBase}/Street Lights 7.jpeg`,
] as const;

const roWaterPlantGallery = [`${galleryBase}/RO water Plant.png`] as const;

/** Full-bleed hero backgrounds — electrical / solar / infrastructure */
export const heroSlideshow = [
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=80",
    alt: "High-voltage power lines at sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80",
    alt: "Solar panels powering clean energy",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2400&q=80",
    alt: "Large-scale solar farm installation",
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2400&q=80",
    alt: "City street lighting at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2400&q=80",
    alt: "Electrical infrastructure and engineering work",
  },
  {
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2400&q=80",
    alt: "Renewable energy landscape",
  },
] as const;

export const images = {
  logo: "/images/SEPL logo.png",
  director: "/images/Director - Sagar Girase.jpeg",
  hero: solarInstallationsGallery[0],
  about: solarInstallationsGallery[0],
  projects: {
    ruralElectrification: "/images/projects/Saubhagya Scheme.jpg",
    dtcElectrification:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    grampanchayat:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80",
    privateSector:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    solarLighting: streetLightsGallery[1],
    railway: "/images/projects/Indian Railways.png",
    smartVillage: "/images/projects/PWD.jpg",
  },
  ongoing: {
    feederImprovement:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
    villageElectrification:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
  },
  associations: {
    pwd: "/images/projects/PWD.jpg",
    msedcl: "/images/projects/MSEDCL.jpg",
    indianRailways: "/images/projects/Indian Railways.png",
    midc: "/images/projects/MIDC.jpg",
    zillaParishad: "/images/projects/Zilla Parishad.jpg",
    saubhagya: "/images/projects/Saubhagya Scheme.jpg",
    jalJeevan: "/images/projects/Jal Jeevan Mission.jpg",
    relianceJio: "/images/projects/Reliance Jio.jpg",
  },
  showcase: [
    streetLightsGallery[0],
    solarInstallationsGallery[0],
    roWaterPlantGallery[0],
    "/images/projects/PWD.jpg",
  ],
  gallery: {
    villageDevelopment: villageDevelopmentGallery[0],
    villageDevelopmentGallery,

    // Kept — no dedicated Gallery folder images yet
    toilets: "/images/projects/Jal Jeevan Mission.jpg",
    toiletsGallery: ["/images/projects/Jal Jeevan Mission.jpg"] as const,

    roPlants: roWaterPlantGallery[0],
    roPlantsGallery: roWaterPlantGallery,

    schools: schoolBeautificationGallery[0],
    schoolsGallery: schoolBeautificationGallery,

    streetLights: streetLightsGallery[0],
    streetLightsGallery,

    solar: solarInstallationsGallery[0],
    solarGallery: solarInstallationsGallery,

    // Kept — no dedicated Water Projects set yet; use RO + Jal Jeevan as cover
    waterProjects: roWaterPlantGallery[0],
    waterProjectsGallery: [
      roWaterPlantGallery[0],
      "/images/projects/Jal Jeevan Mission.jpg",
    ] as const,

    // Kept — no dedicated Beautification set yet
    beautification: villageDevelopmentGallery[0],
    beautificationGallery: villageDevelopmentGallery,
  },
} as const;
