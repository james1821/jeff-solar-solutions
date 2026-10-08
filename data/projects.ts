export type Project = { title: string; location: string; sizeKwp?: string; type: "Residential" | "Commercial"; description: string; image?: string };
export const projects: Project[] = [
  {
    title: "Jerrick Espinosa Residence",
    location: "San Jose City, Nueva Ecija",
       image: "/images/projects/jerrick_residence.jpg",
    type: "Residential",
    description: "",
  },
];