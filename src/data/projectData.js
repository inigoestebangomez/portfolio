const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export const projects = [
  {
    id: 1,
    title: "WINE TASTING NOTES",
    des: "React Native + Expo Router | Supabase",
    preview: "/images/wine-tasting-notes.gif",
    img: ["/images/wine-tasting-notes.gif", "/images/wine-tasting-notes-screens.png"],
    logo: ["/images/wine-tasting-notes-logo.png"],
    slug: "wine-tasting-notes",
    services: [
      { name: "GitHub", url: "https://github.com/inigoestebangomez/wine-tasting-notes" }
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban" }
    ],
    year: "2025",
  },
  {
    id: 2,
    title: "ROY",
    des: "VueJs + NuxtJs",
    preview: "/images/roy.gif",
    img: ["/images/roy.gif", "/images/roy-4.png", "/images/roy-2.png"],
    logo: ["/images/roy-logo.png"],
    slug: "roy",
    services: [
      { name: "GitHub", url: "https://github.com/inigoestebangomez/roy" }
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban" }
    ],
    year: "2024",
  },
  {
    id: 3,
    title: "LIVEWAVE",
    des: "React Native | Supabase",
    preview: "/images/livewave.gif",
    img: ["/images/livewave.gif"],
    logo: ["/images/livewave-logo.png"],
    slug: "livewave",
    services: [
      { name: "GitHub", url: "https://github.com/inigoestebangomez/livewave" }
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban" }
    ],
    year: "2025",
  },
  {
    id: 4,
    title: "COOLMEX",
    des: "React + NodeJs | NodeJs + Express",
    preview: "/images/coolmex.gif",
    img: ["/images/coolmex.gif", "/images/coolmex-1.png" ,"/images/coolmex-2.png", "/images/coolmex-3.png"],
    logo: ["/images/coolmex-logo.png"],
    slug: "coolmex",
    services: [
      { name: "GitHub", url: "https://github.com/inigoestebangomez/cool-mex-client" }
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban"}
    ],
    year: "2024",
  },
  {
    id: 5,
    title: "WINEWEB",
    des: "React + NodeJs | NodeJs + Express",
    preview: "/images/wineweb.gif",
    img: ["/images/wineweb.gif"],
    logo: ["/images/wineweb-logo.png"],
    slug: "wineweb",
    services: [
      { name: "GitHub", url: "https://github.com/inigoestebangomez/cellar-app" },
      { name: "Live", url: "https://wineweb.netlify.app/" }
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban" },
      { role: "Developer", person: "Félix F" }

    ],
    year: "2024",
  },
  {
    id: 6,
    title: "WORKOUTSWEB",
    des: "React + NodeJs | NodeJs + Express",
    preview: "/images/workoutsweb.gif",
    img: [ "/images/workoutsweb.png", "/images/workoutsweb.png"],
    logo: ["/images/workoutsweb-logo.png"],
    slug: "workoutsweb",
    services: [
      { name: "GitHub", url: "https://github.com/FelixFS3D/client-workoutweb" },
      { name: "Live", url: "https://workouts-web.netlify.app/" }
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban" },
      { role: "Developer", person: "Félix F" }

    ],
    year: "2024",
  },
].map((p) => ({
  ...p,
  slug: slugify(p.title),
}));

export const frontFace = {
  img: "/images/Prueba de cara.png"
}
