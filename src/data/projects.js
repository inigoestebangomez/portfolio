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
    img: "/images/wine-tasting-notes.gif",
    slug: "wine-tasting-notes",
  },
  {
    id: 2,
    title: "ROY",
    des: "VueJs + NuxtJs",
    img: "/images/roy.gif",
    slug: "roy",
  },
  {
    id: 3,
    title: "LIVEWAVE",
    des: "React Native | Supabase",
    img: "/images/livewave.gif",
    slug: "livewave",
  },
  {
    id: 4,
    title: "COOLMEX",
    des: "React + NodeJs | NodeJs + Express",
    img: "/images/coolmex.gif",
    slug: "coolmex",
  },
  {
    id: 5,
    title: "WINEWEB",
    des: "React + NodeJs | NodeJs + Express",
    img: "/images/wineweb.gif",
    slug: "wineweb",
  },
  {
    id: 6,
    title: "WORKOUTSWEB",
    des: "React + NodeJs | NodeJs + Express",
    img: "/images/workoutsweb.gif",
    slug: "workoutsweb",
  },
].map((p) => ({
  ...p,
  slug: slugify(p.title),
}));
