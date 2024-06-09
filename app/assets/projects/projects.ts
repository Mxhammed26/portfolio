import type { project } from "../../types";

const dev = process.env.NEXT_PUBLIC_DEV === "DEV" ? "/" : "";

function generateImages(
  prefix: string,
  count: number,
  small = false
): string[] {
  return Array.from({ length: count }).map(
    (_, num) =>
      `${dev}${prefix}/${prefix}-${num + 1}${small ? "-small" : ""}.png`
  );
}

type Projects = {
  freelance: project[];
};

const projects: Projects = {
  freelance: [
    {
      title: "Elomradz",
      description: "Agencies marketplace",
      tools: [
        "React js",
        "Tailwind css",
        "shadcn",
        "React Query",
        "Typescript",
        "Node.js",
        "MySQL",
        "Prisma ORM",
      ],
      thumbnail: dev + "elomradz.png",
      images: generateImages("elomradz", 4),
      loadingImages: generateImages("elomradz", 4, true),
      placeholder: dev + "elomradz-small.png",
      link: "https://www.elomradz.com",
      repository: "",
    },
    {
      title: "Buyme shopping",
      description: "Ecommerce",
      tools: ["React js", "Styled components", "Typescript", "Pocketbase"],
      thumbnail: dev + "buyme.png",
      images: generateImages("buyme", 4),
      loadingImages: generateImages("buyme", 4, true),
      placeholder: dev + "buyme-small.png",
      link: "https://www.buyme-dz.com",
      repository: "",
    },
    {
      title: "Cleano",
      description: "Cleaning services platform",
      tools: ["React js", "Typescript", "Tailwind css", "shadcn"],
      thumbnail: dev + "cleano.png",
      images: generateImages("cleano", 4),
      loadingImages: generateImages("cleano", 4, true),
      placeholder: dev + "cleano-small.png",
      link: "https://cleaning-services-platform.onrender.com",
      repository: "",
    },
    {
      title: "StockGG",
      description: "Inventory management system",
      tools: [
        "React js",
        "Nodejs",
        "PostgreSQL",
        "SequelizeORM",
        "Google Cloud Platform",
      ],
      thumbnail: dev + "stockgg.png",
      images: generateImages("stockgg", 7),
      loadingImages: generateImages("stockgg", 7, true),
      placeholder: dev + "stockgg-small.png",
      link: "",
      repository: "",
    },
    {
      title: "electro industry",
      description: "Company website",
      tools: ["React js", "Styled components", "Firebase"],
      thumbnail: dev + "electro-industry.png",
      images: generateImages("electro-industry", 1),
      loadingImages: generateImages("electro-industry", 1, true),
      placeholder: dev + "electro-industry-small.png",
      link: "https://www.electroindustry.io",
      repository: "",
    },
  ],
};

export default projects;
