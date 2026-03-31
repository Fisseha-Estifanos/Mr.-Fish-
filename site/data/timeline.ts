export interface TimelineEntry {
  id: string;
  yearRange: string;
  title: string;
  company: string;
  location: string;
  achievements: string[];
  tags: string[];
}

export const timeline: TimelineEntry[] = [
  {
    id: "mr-fish-consulting",
    yearRange: "2022 – Present",
    title: "Founder & Principal Consultant",
    company: "Mr. Fish — Independent Consulting",
    location: "Addis Ababa, Ethiopia · Remote-Global",
    achievements: [
      "Built and deployed RAG (Retrieval-Augmented Generation) pipelines and vector database architectures for AI-driven applications",
      "Designed and delivered end-to-end data engineering systems and full-stack backends for clients across Africa and beyond",
      "Specialising in Generative AI integration, production-grade data infrastructure, and strategic technical advisory for scaling organisations",
    ],
    tags: ["RAG Pipelines", "Generative AI", "Python", "FastAPI", "PostgreSQL", "AWS", "Data Engineering"],
  },
  {
    id: "10academy",
    yearRange: "Aug 2022 – Nov 2022",
    title: "Data Engineering Fellow",
    company: "10 Academy",
    location: "Addis Ababa, Ethiopia",
    achievements: [
      "Completed an intensive 4-month data engineering programme, delivering five production-grade projects on real-world datasets",
      "Engineered end-to-end ELT pipelines using Apache Airflow, dbt, PostgreSQL, and Redash — from raw ingestion to analyst-ready dashboards",
      "Built ML and deep learning models for pharmaceutical sales forecasting (Rossman) and telecom customer analytics, with full MLOps tooling: DVC, GitHub Actions, and Streamlit dashboards",
      "Delivered logistics optimisation system for Gokada (Nigeria's largest last-mile delivery service) using causal inference and geospatial analysis",
    ],
    tags: ["Apache Airflow", "dbt", "Apache Kafka", "Apache Spark", "Python", "Scikit-learn", "DVC", "Streamlit", "PostgreSQL"],
  },
  {
    id: "icare-developer",
    yearRange: "Sept 2019 – June 2021",
    title: "Software Developer — Backend & Database",
    company: "ICare Ethio Medical",
    location: "Addis Ababa, Ethiopia",
    achievements: [
      "Developed and maintained production backend systems for a healthcare software platform serving medical institutions across Ethiopia",
      "Designed and optimised relational database schemas and SQL procedures for clinical data management",
      "Collaborated across the full development lifecycle — from requirements gathering with non-technical medical staff to deployment",
    ],
    tags: ["Backend Development", "Database Design", "SQL", "Python", "Healthcare Tech"],
  },
  {
    id: "icare-intern",
    yearRange: "June 2019 – Sept 2019",
    title: "Software Engineering Intern — Frontend",
    company: "ICare Ethio Medical",
    location: "Addis Ababa, Ethiopia",
    achievements: [
      "First professional engineering role, taken on during the second year of BSc studies",
      "Built and iterated on front-end interfaces for internal clinical tools, gaining hands-on exposure to enterprise software development",
    ],
    tags: ["Frontend Development", "HTML5", "CSS3", "JavaScript"],
  },
];
