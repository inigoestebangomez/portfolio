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
    img: [
      "/images/wine-tasting-notes-1.webp", 
      "/images/wine-tasting-notes-2.webp", 
      "/images/wine-tasting-notes-3.webp"
    ],
    logo: ["/images/wine-tasting-notes-logo.webp"],
    hero: ["/images/wine-tasting-notes-hero.webp"],
    slug: "wine-tasting-notes",
    services: [
      { name: "iOS", url: "https://apps.apple.com/es/app/wine-tasting-notes/id6758449813" },
      { name: "Android", url: "https://play.google.com/store/apps/details?id=com.inigo.winetastingnotes" }
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban" }
    ],
    year: "2025",
  },
  {
    id: 2,
    title: "LIVEWAVE",
    des: "React Native | Supabase",
    preview: "/images/livewave.gif",
    img: [
      "/images/livewave-1.webp",
      "/images/livewave-2.webp",
      "/images/livewave-3.webp",
      "/images/livewave-4.webp"
    ],
    hero: ["/images/livewave-hero.webp"],
    logo: ["/images/livewave-logo.webp"],
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
    id: 3,
    title: "COOLMEX",
    des: "React + NodeJs | NodeJs + Express",
    preview: "/images/coolmex-low.gif",
    img: [ 
      "/images/coolmex-1.webp" ,
      "/images/coolmex-2.webp", 
      "/images/coolmex-3.webp"
    ],
    logo: ["/images/coolmex-logo.webp"],
    hero: ["/images/coolmex-2.webp"],
    slug: "coolmex",
    services: [
      { name: "GitHub", url: "https://github.com/inigoestebangomez/cool-mex-client" },
      { name: "Live", url: "https://cool-mex.netlify.app" }
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban"}
    ],
    year: "2024",
  },
  {
    id: 4,
    title: "ROY",
    des: "VueJs + NuxtJs",
    preview: "/images/roy-low.gif",
    img: ["/images/roy-4.webp", "/images/roy-1.webp", "/images/roy-2.webp"],
    logo: ["/images/roy-logo.webp"],
    hero: ["/images/roy-2.webp"],
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
    id: 5,
    title: "WINEWEB",
    des: "React + NodeJs",
    preview: "/images/wineweb-low.gif",
    img: [
      "/images/wineweb-1.webp", 
      "/images/wineweb-2.webp", 
      "/images/wineweb-3.webp"
    ],
    logo: ["/images/wineweb-logo.webp"],
    hero: ["/images/wineweb.webp"],
    slug: "wineweb",
    services: [
      { name: "GitHub", url: "https://github.com/inigoestebangomez/cellar-app" },
      { name: "Live", url: "https://wineweb.netlify.app/" }
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban" },
      { role: "Developer", person: "Félix Romero" }

    ],
    year: "2024",
  },
  {
    id: 6,
    title: "WORKOUTSWEB",
    des: "React + NodeJs",
    preview: "/images/workoutsweb-low.gif",
    img: [ 
      "/images/workoutsweb-1.webp", 
      "/images/workoutsweb-2.webp",
      "/images/workoutsweb-3.webp"],
    logo: ["/images/workoutsweb-logo.webp"],
    hero: ["/images/workoutsweb-1.webp"],
    slug: "workoutsweb",
    services: [
      { name: "GitHub", url: "https://github.com/FelixFS3D/client-workoutweb" },
      { name: "Live", url: "https://workouts-web.netlify.app/" }
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban" },
      { role: "Developer", person: "Félix Romero" }

    ],
    year: "2024",
  },
  {
    id: 7,
    title: "DUTTI",
    des: "Angular + NodeJs",
    preview: "/images/dutti-low.gif",
    img: [ 
      "/images/dutti-1.webp", 
      "/images/dutti-2.webp",
      "/images/dutti-3.webp"],
    logo: ["/images/dutti-logo.webp"],
    hero: ["/images/dutti-1.webp"],
    slug: "dutti",
    services: [
      { name: "GitHub", url: "https://github.com/inigoestebangomez/dutti" },
    ],
    credits: [
      { role: "Developer", person: "Iñigo Esteban" }
    ],
    year: "2025",
  },

].map((p) => ({
  ...p,
  slug: slugify(p.title),
}));

export const frontFace = {
  img: "/images/Prueba de cara.webp"
}
