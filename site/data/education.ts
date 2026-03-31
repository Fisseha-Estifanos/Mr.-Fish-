export interface EducationEntry {
  id: string;
  credential: string;
  institution: string;
  year: string;
  relevance?: string;
}

export const education: EducationEntry[] = [
  {
    id: "aait-bsc",
    credential: "BSc. Software Engineering",
    institution: "Addis Ababa Institute of Technology (AAiT)",
    year: "2018 – 2022",
    relevance:
      "Formal foundation in software architecture, database systems, and advanced programming — the academic bedrock behind the practical engineering.",
  },
  {
    id: "10academy-fellowship",
    credential: "Data Engineering Intensive Fellowship",
    institution: "10 Academy",
    year: "2022",
    relevance:
      "Intensive, project-based programme covering end-to-end data engineering: pipelines, warehousing, MLOps, and production deployment on real-world datasets.",
  },
];
